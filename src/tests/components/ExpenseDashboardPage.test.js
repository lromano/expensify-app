import React from 'react';
import { shallow } from 'enzyme';

import ExpenseDashboardPage from  '../../components/ExpenseDashboardPage';

test('should render ExpenseDashboardPge', () => {
    const wrapper = shallow(<ExpenseDashboardPage />);
    expect(wrapper).toMatchSnapshot();
});
