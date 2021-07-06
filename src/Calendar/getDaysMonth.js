import {
    format,
    parseISO,
    getDaysInMonth,
    startOfMonth,
    endOfMonth,
    subDays,
    addDays
} from 'date-fns';
import { pt } from 'date-fns/locale';

import getNumberWeek from './getNumberWeek';

export default function getDaysMonth(
    setLastDayCurrent,
    setMonthCurrent,
    setYearCurrent,
    dates,
    changeDate
) {

    const dateCurrent = changeDate;

    setMonthCurrent(format(dateCurrent, "MM"))
    setYearCurrent(format(dateCurrent, "yyyy"))

    const numberWeekDayCurrent = getNumberWeek(format(dateCurrent, 'EEE'));

    const numberDaysMonth = getDaysInMonth(dateCurrent);
    const startDayMonth = startOfMonth(dateCurrent);
    const endDayMonth = endOfMonth(dateCurrent);

    setLastDayCurrent(endDayMonth)

    const numberWeekstartDayMonth = getNumberWeek(format(startDayMonth, 'EEE'));
    const numberWeekendDayMonth = getNumberWeek(format(endDayMonth, 'EEE'));

    // Recuperando dias restante do mês anterior.
    const diasMesAnterior = [];
    const diferencaDiaAnterior = numberWeekstartDayMonth - 1; // 1 pois é o inicial da semana
    if (diferencaDiaAnterior > 0) {
        for (let i = 1; i <= diferencaDiaAnterior; i++) {
            const dataAux = subDays(startDayMonth, i);
            diasMesAnterior.unshift([dataAux, {
                value: false,
                passado: true,
                futuro: false
            }]);
        }
    }

    // Gerando intervalo de dias do mes
    const daysCurrent = [];
    for (let j = 0; j < numberDaysMonth; j++) {
        daysCurrent.push([addDays(startDayMonth, j), {
            value: false,
            passado: false,
            futuro: false
            // badge: true
        }]);
    }

    // Recuperando dias restante do mês posterior.
    const diasMesPosteriro = [];
    const diferencaDiaPosteriro = 7 - numberWeekendDayMonth; // 7 pois é o final da semana
    if (diferencaDiaPosteriro > 0) {
        for (let i = 1; i <= diferencaDiaPosteriro; i++) {
            const dataAux = addDays(endDayMonth, i);
            diasMesPosteriro.push([dataAux, {
                value: false,
                passado: false,
                futuro: true
                // badge: true
            }]);
        }
    }

    // Verificando se tem 42 datas no total
    const sumDays = diasMesAnterior.length + numberDaysMonth + diasMesPosteriro.length;

    if (sumDays < 42) {
        // Gerandos as datas posteriores
        const diferenca = 42 - sumDays;
        const aux = [];
        for (let i = 1; i <= diferenca; i++) {
            let ultimaDataPosterior;
            if (diasMesPosteriro.length > 0) {
                ultimaDataPosterior = diasMesPosteriro[diasMesPosteriro.length - 1][0];
            } else {
                ultimaDataPosterior = daysCurrent[daysCurrent.length - 1][0];
            }

            const dataAux = addDays(ultimaDataPosterior, i);
            aux.push([dataAux, {
                value: false,
                passado: false,
                futuro: true
                // badge: true
            }]);
        }

        diasMesPosteriro.push(...aux);
    }

    // Tranformando dados
    const daysMonth = [
        ...diasMesAnterior,
        ...daysCurrent,
        ...diasMesPosteriro
    ];

    const responseDaysMonth = [];

    daysMonth.map(day => {
        const aux = [];

        aux.push(day[0]);

        const obj = day[1];
       
        if (dates !== undefined) {
            const valueDate = dates[format(day[0], "yyyy-MM-dd")];
            if (valueDate !== undefined) {
                obj.value = valueDate;
                obj.badge = true;
            }
        }

        aux.push(obj)

        responseDaysMonth.push(aux);
    });

    return responseDaysMonth;
}