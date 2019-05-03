import filtersReducer from '../../reducers/filters';
import moment from 'moment';
import filterReducer from '../../reducers/filters';

test('should setup default filters values', () => {
	const state = filtersReducer(undefined, { type: '@@INIT' });
	expect(state).toEqual({
		text: '',
		sortBy: 'date',
		startDate: moment().startOf('month'),
		endDate: moment().endOf('month')
	});
});

test('should set sortBy to amount', () => {
	const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
	expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
	const currentState = {
		text: '',
		startDate: undefined,
		endDate: undefined,
		sortBy: 'amount'
	};

	const action = { type: 'SORT_BY_DATE' };

	const state = filtersReducer(currentState, action);
	expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
	const state = filterReducer(undefined, { type: 'SET_TEXT_FILTER', text: 'hola' });
	expect(state.text).toBe('hola');
});

test('should set startDate filter', () => {
	const state = filterReducer(undefined, { type: 'SET_START_DATE', startDate: moment(0) });
	expect(state.startDate).toEqual(moment(0));
});

test('should set endDate filter', () => {
	const state = filterReducer(undefined, { type: 'SET_END_DATE', endDate: moment(0) });
	expect(state.endDate).toEqual(moment(0));
});


