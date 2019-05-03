import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper ;

beforeEach(() => {
	setTextFilter = jest.fn();
	sortByDate = jest.fn();
	sortByAmount = jest.fn();
	setStartDate = jest.fn();
	setEndDate = jest.fn();
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

test('should render ExpenseListFilter correctly', () => {
	expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilter with alt correctly', () => {
	wrapper.setProps({
		filters: altFilters
	});
	expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
	const value = 'rent';
	wrapper.find('input').simulate('change', {
		target: {
			value
		}
	});
	expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test('should sort by date', () => {
	wrapper.find('select').simulate('change', {
		target: {
			value: 'date'
		}
	});
	expect(sortByDate).toHaveBeenCalled();
});

test('should sort by amount', () => {
	wrapper.find('select').simulate('change', {
		target: {
			value: 'amount'
		}
	});

	expect(sortByAmount).toHaveBeenCalled();
});

test('should handle date changes', () => {
	wrapper.setProps({
		filters: altFilters
	});
	wrapper.find('DateRangePicker').prop('onDatesChange')({
		startDate: altFilters.startDate,
		endDate: altFilters.endDate
	});
	expect(setStartDate).toHaveBeenLastCalledWith(altFilters.startDate);
	expect(setEndDate).toHaveBeenLastCalledWith(altFilters.endDate);
});

test('should handle date focused change', () => {
    wrapper.find('DateRangePicker').prop('onFocusChange')(null)
    expect(wrapper.state('calendarFocused')).toBe(null)
})
