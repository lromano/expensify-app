import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, startRemoveExpense} from './../actions/expenses';

export class EditExpensePage extends React.Component {
    onEditExpense = (expense) => {
        this.props.editExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    }

    onRemoveExpense = () => {
        this.props.startRemoveExpense(this.props.expense.id);
        this.props.history.push('/');
    }
    
    render() {
        return (
            <div>
                <ExpenseForm
                    expense={this.props.expense}
                    onSubmit={this.onEditExpense}
                />

                <button onClick={this.onRemoveExpense}>Remove</button>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    }
};

const mapDispatchToProps = (dispatch) => ({
    editExpense: (expenseId, expense) => dispatch(editExpense(expenseId, expense)),
    startRemoveExpense: expenseId => dispatch(startRemoveExpense({ id: expenseId }))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);