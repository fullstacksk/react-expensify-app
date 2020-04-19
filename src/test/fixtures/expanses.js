import moment from 'moment'
export default [
    {
        id: '123',
        description: 'Gas bill',
        note: '',
        amount: 3000,
        createdAt: 0
    }, {
        id: '1234',
        description: 'Rent bill',
        note: '',
        amount: 1000,
        createdAt: moment(0).subtract(4, "days").valueOf()
    }, {
        id: '12345',
        description: 'Water bill',
        note: '',
        amount: 2000,
        createdAt: moment(0).add(4, "days").valueOf()
    }
]