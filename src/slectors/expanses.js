import moment from 'moment';
//get visible expanses
export default (expanses, { text, sortBy, startDate, endDate }) => {
    return expanses.filter((expanse) => {
        const craetedAtMoment = moment(expanse.createdAt);
        const startDateMatch = startDate ? startDate.isSameOrBefore(craetedAtMoment, 'day') : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(craetedAtMoment, 'day') : true;
        const textMatch = expanse.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            // console.log(a, b);
            return a.createdAt < b.createdAt ? 1 : -1;
        }
        else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    })
}
