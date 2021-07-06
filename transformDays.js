import {
    format
} from 'date-fns';

export default function transformDays(days = []) {
    const month = {};

    for (let day of days) {
        const dayFormat = format(day[0], "yyyy-MM-dd");
        month[dayFormat] = day[1];
    }

    return month;
}