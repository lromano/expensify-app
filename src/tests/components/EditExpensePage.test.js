import React from 'React';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let editExpense, startRemoveExpense, expense, history, wrapper;

beforeEach(() => {
    expense = expenses[0];
    history = { push: jest.fn() };
    editExpense = jest.fn();
    startRemoveExpense = jest.fn();

    wrapper = shallow(
        <EditExpensePage 
           expense={expense} 
           editExpense={editExpense} 
           startRemoveExpense={startRemoveExpense} 
           history={history} 
        />
    );
});
test('should render EditExpensePage', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle editExpense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expense);
    expect(editExpense).toHaveBeenLastCalledWith(expense.id, expense);
    expect(history.push).toHaveBeenLastCalledWith('/');
});

test('should handle startRemoveExpense', () => {
    wrapper.find('button').simulate('click');

    expect(startRemoveExpense).toHaveBeenLastCalledWith(expense.id);
    expect(history.push).toHaveBeenLastCalledWith('/');
});