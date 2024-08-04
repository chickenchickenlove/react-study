export const moveToOtherMonth = (date: Date, nextMonth: number) => {
    let year;
    let month = date.getMonth() + nextMonth;
    if (month === -1) {
        year = date.getFullYear() - 1;
        month = 11
    } else if (month === 12) {
        year = date.getFullYear() + 1;
        month = 0
    } else {
        year = date.getFullYear();
    }

    return new Date(year, month, date.getDate())
};

export const getStart = (date: Date): Date => {
    return new Date(date.getFullYear(), date.getMonth(), 1, 0, 0, 0, 0)
};

export const getEnd = (date: Date): Date => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month, resolveLastDate(year, month), 23, 59, 59, 59)
}

export function getFormattedValue(date: Date) {
    const year = date.getFullYear();
    const month = date.getMonth() < 10 ? '0' + String(date.getMonth()+1) : String(date.getMonth()+1);
    const day = date.getDate() < 10 ? '0' + String(date.getDate()) : String(date.getDate());
    return `${year}-${month}-${day}`;
}

const resolveLastDate = (year: number, month: number) => {
    const tempDate = new Date(year, month, 31, 23, 59, 59, 59);
    const resolvedLastDate = 31 === tempDate.getDate() ?
        31 :
        31 - tempDate.getDate();
    return resolvedLastDate;
};