// (expenses) => adds up each expense in array and returns sum.

export default (expenses) => (
    expenses.reduce((accumulator, expense) => (
        accumulator + expense.amount
    ), 0)
);