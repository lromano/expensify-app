import React from 'react';
import { connect } from 'react-redux';
import selectExpensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';
import numeral from 'numeral';

export const ExpensesSummary = ({expensesCount, expensesTotal}) => {
    const expenseWord = expensesCount > 1 ? 'expenses' : 'expense';
    const totalAmount = numeral(expensesTotal / 100).format('$0,0.00');

    return (
        <div>
            <h1>Viewing { expensesCount } { expenseWord } totalling { totalAmount }</h1>
        </div>
    );
};

const mapStateToProps = (state) => {
    const filteredExpenses = selectExpenses(state.expenses, state.filters);

    return {
        expensesCount: filteredExpenses.length,
        expensesTotal: selectExpensesTotal(filteredExpenses)
    };
};
export default connect(mapStateToProps)(ExpensesSummary);