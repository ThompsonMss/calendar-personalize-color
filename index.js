import React from 'react';
import {
    Container,
    Actions,
    ContainerDays,
    ContentLabelsDays,
    ContentDays,
    WrapperDay,
    ColumnDay,
    Check,
    Badge
} from './styles';

import weeks from './weeks';
import monthName from './month';
import transformDays from './transformDays';
import getDaysMonth from './getDaysMonth';

import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { format, parseISO, isAfter, addMonths, subMonths } from 'date-fns';
import { pt } from 'date-fns/locale/pt';

const defaultProps = {
    primaryColor: "#000",
    inversePrimaryColor: "#FFF",
    secondaryColor: "#f39c12",
    inverseSecondaryColor: "#000",
    onCheckDay: () => null,
    alertBlock: () => null,
    dates: undefined
};

export default function Calendar(props) {

    const propsCalendar = { ...defaultProps, ...props };

    const [check, setCheck] = React.useState("");

    const [disableBackCalendar, setDisableBackCalendar] = React.useState(true);

    const [lastDayCurrent, setLastDayCurrent] = React.useState("");
    const [yearCurrent, setYearCurrent] = React.useState(2021);
    const [monthCurrent, setMonthCurrent] = React.useState(1);
    const [dayCurrent, setDayCurrent] = React.useState(new Date());
    const [days, setDays] = React.useState(null);

    React.useEffect(() => {

        const dias = getDaysMonth(
            setLastDayCurrent,
            setMonthCurrent,
            setYearCurrent,
            props.dates,
            dayCurrent
        );

        setDays(transformDays(dias));

    }, [dayCurrent, props.dates]);

    function handleCheck(date) {
        propsCalendar?.onCheckDay(date);
        setCheck(date);
    }

    function getDiaValido(dia) {

        let response;

        if (dia.passado) {
            response = false;
        } else if (dia.futuro) {
            response = false;
        } else {
            response = dia.value;
        }

        return response;
    }

    function renderDay(dataDays, initial) {

        const diasValidos = {};

        Object.keys(dataDays).map((dia, index) => {
            if (index >= initial && index < initial + 7) {
                diasValidos[dia] = dataDays[dia];
            }
        });

        return (
            <ColumnDay>
                {Object.keys(diasValidos).map((dia) => (
                    <WrapperDay
                        disabled={!getDiaValido(dataDays[dia])}
                        propsCalendar={propsCalendar}
                        onClick={() => {
                            if (getDiaValido(dataDays[dia])) {
                                handleCheck(dia)
                            } else {
                                propsCalendar?.alertBlock()
                            }
                        }}
                    >
                        <Check
                            propsCalendar={propsCalendar}
                            check={check == dia ? true : false}
                            disabled={!getDiaValido(dataDays[dia])}
                            colorOff={isAfter(parseISO(dia), lastDayCurrent)}
                        >
                            <span>{format(parseISO(dia), "dd")}</span>
                            {dataDays[dia]?.badge && (
                                <Badge
                                    show={true}
                                    color={dataDays[dia].value ? '#27ae60' : 'red'}
                                />
                            )}
                        </Check>

                    </WrapperDay>

                ))}
            </ColumnDay>
        )
    }

    function changeMonth(opt) {
        if (opt == '+') {
            const addDate = addMonths(dayCurrent, 1);
            setDayCurrent(addDate)
            setDisableBackCalendar(false);
        } else {

            const subDate = subMonths(dayCurrent, 1);
            setDayCurrent(subDate)

            const year = format(subDate, "yyyy");
            const month = format(subDate, "MM");

            const yearNow = format(new Date(), "yyyy");
            const monthNow = format(new Date(), "MM");

            if (year === yearNow && month === monthNow) {
                setDisableBackCalendar(true);
            }
        }
    }

    return (
        <Container propsCalendar={propsCalendar}>

            <Actions propsCalendar={propsCalendar}>
                <button onClick={() => {
                    if (!disableBackCalendar) {
                        changeMonth('-')
                    }
                }} style={{ justifyContent: "flex-start", color: disableBackCalendar ? "#666" : null }} >
                    <FaAngleLeft style={{ color: disableBackCalendar ? "#666" : null }} />
                </button>

                <div>
                    <span>{monthName[monthCurrent - 1]}, {yearCurrent}</span>
                </div>

                <button onClick={() => changeMonth('+')} style={{ justifyContent: "flex-end" }} >
                    <FaAngleRight />
                </button>
            </Actions>

            <ContainerDays propsCalendar={propsCalendar}>
                <ContentLabelsDays propsCalendar={propsCalendar}>
                    {weeks.map(week => (
                        <div>
                            <span>{week.label}</span>
                        </div>
                    ))}
                </ContentLabelsDays>

                <ContentDays>
                    {days !== null && (
                        <>
                            {renderDay(days, 0)}
                            {renderDay(days, 7)}
                            {renderDay(days, 14)}
                            {renderDay(days, 21)}
                            {renderDay(days, 28)}
                            {renderDay(days, 35)}
                        </>
                    )}
                </ContentDays>
            </ContainerDays>

        </Container>
    );
}