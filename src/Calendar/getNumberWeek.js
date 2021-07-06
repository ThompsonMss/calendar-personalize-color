export default function getNumberWeek(nameWeek) {

    switch (nameWeek) {
        case 'Sun': // Domingo
            return 1;
        case 'Mon': // Segunda
            return 2;
        case 'Tue':
            return 3;
        case 'Wed':
            return 4;
        case 'Thu':
            return 5;
        case 'Fri':
            return 6;
        case 'Sat': // Sábado
            return 7;
    }

}