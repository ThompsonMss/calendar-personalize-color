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

import days from './days';

import { FaAngleLeft, FaAngleRight } from "react-icons/fa";


const defaultProps = {
    primaryColor: "#000",
    inversePrimaryColor: "#FFF",
    secondaryColor: "#f39c12",
    inverseSecondaryColor: "#000"
};

export default function Calendar(props) {

    const propsCalendar = { ...defaultProps };

    const dias = [
        ["29",
            "30",
            "01",
            "02",
            "03",
            "04",
            "05"],
        ["06",
            "07",
            "08",
            "09",
            "10",
            "11",
            "12"],
        ["13",
            "14",
            "15",
            "16",
            "17",
            "18",
            "19"],
        ["20",
            "21",
            "22",
            "23",
            "24",
            "25",
            "26"],
        ["27",
            "28",
            "29",
            "30",
            "01",
            "02",
            "03"]
    ];

    return (
        <Container propsCalendar={propsCalendar}>

            <Actions propsCalendar={propsCalendar}>
                <button style={{ justifyContent: "flex-start" }} >
                    <FaAngleLeft />
                </button>

                <div>
                    <span>Julho, 2021</span>
                </div>

                <button style={{ justifyContent: "flex-end" }} >
                    <FaAngleRight />
                </button>
            </Actions>

            <ContainerDays propsCalendar={propsCalendar}>
                <ContentLabelsDays propsCalendar={propsCalendar}>
                    {days.map(day => (
                        <div>
                            <span>{day.label}</span>
                        </div>
                    ))}
                </ContentLabelsDays>

                <ContentDays>
                    {dias.map((dia) => (
                        <ColumnDay>
                            {dia.map((item, index) => (
                                <WrapperDay
                                    disabled={index == 6 && true}
                                    propsCalendar={propsCalendar}
                                >
                                    <Check
                                        propsCalendar={propsCalendar}
                                        check={index == 4 && true}
                                        disabled={index == 2 && true}
                                    >
                                        <span>{item}</span>
                                        {/* {index == 6 && ( */}
                                        <Badge
                                            show={true}
                                            color="red"
                                        />
                                        {/* )} */}
                                    </Check>

                                </WrapperDay>
                            ))}
                        </ColumnDay>
                    ))}
                </ContentDays>
            </ContainerDays>

        </Container>
    );
}