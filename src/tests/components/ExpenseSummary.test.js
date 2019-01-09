import React from 'react';
import { shallow } from 'enzyme';

import { ExpensesSummary} from '../../components/ExpenseSummary';

test('should render one expense correctly', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={1000} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render more than one expense correctly', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={2} expensesTotal={1000} />);
    expect(wrapper).toMatchSnapshot();
});