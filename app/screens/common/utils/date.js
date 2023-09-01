import moment from "moment";

export const DATE_FORMAT = 'YYYY-MM-DD';

export const getDateFormated = (date) => {
    if (!date)
        return moment(new Date()).format(DATE_FORMAT);
    return moment(date).format(DATE_FORMAT);
}

export const getPriorDate = (numberOfDays) => {
    var today = new Date();
    return minimumDate = new Date(new Date().setDate(today.getDate() - numberOfDays));
}