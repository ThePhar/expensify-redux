import { shallow }              from 'enzyme';
import moment                   from 'moment';
import React                    from 'react';
import { DateRangePicker }      from 'react-dates';
import { ExpenseListFilters }   from '../../components/ExpenseListFilters/ExpenseListFilters';
import { billFilters, filters } from '../fixtures/filters';

let setStartDate, setEndDate, setTextFilter, sortByDate, sortByAmount, wrapper;
beforeEach(() => {
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters
            filters={filters}
            setTextFilter={setTextFilter}
            sortByDate={sortByDate}
            sortByAmount={sortByAmount}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
        />
    );
});

test('Should render ExpenseListFilters correctly.', () => {
    expect(wrapper).toMatchSnapshot();
});

test('Should render ExpenseListFilters with alt filters correctly.', () => {
    wrapper.setProps({ filters: billFilters });
    expect(wrapper).toMatchSnapshot();
});

test('Should handle onDatesChange.', () => {
    const dates = { startDate: moment(0), endDate: moment(0).add(3, 'days') };
    wrapper.find(DateRangePicker).prop('onDatesChange')({ ...dates });
    expect(setStartDate).toHaveBeenLastCalledWith(dates.startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(dates.endDate);
});

test('Should handle onFocusChange.', () => {
    const value = null;
    wrapper.find(DateRangePicker).prop('onFocusChange')(value);
    expect(wrapper.state('calendarFocused')).toBe(value);
});

test('Should handle onTextChange.', () => {
    const value = 'Description';
    wrapper.find('input').simulate('change', { target: { value } });
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test('Should handle onSortByChange with value date.', () => {
    const value = 'date';
    wrapper.setProps({ filters: billFilters });
    wrapper.find('select').simulate('change', { target: { value } });
    expect(sortByDate).toHaveBeenCalled();
});

test('Should handle onSortByChange with value amount.', () => {
    const value = 'amount';
    wrapper.find('select').simulate('change', { target: { value } });
    expect(sortByAmount).toHaveBeenCalled();
});