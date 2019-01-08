export default (expenses = []) => {
    return expenses
       .map((expense) => expense.amount)
       .reduce((sum, currentAmount) => sum + currentAmount, 0);
};