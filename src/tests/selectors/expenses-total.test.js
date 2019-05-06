import getExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

const singleExpense = [ expenses[0] ];

test('should return 0 if no expenses', () => {
	const total = getExpensesTotal([]);
	expect(total).toBe(0);
});

test('should correctly add up a single expense', () => {
	const total = getExpensesTotal(singleExpense);
	expect(total).toBe(singleExpense[0].amount);
});

test('should add up multiple expenses', () => {
	const total = getExpensesTotal(expenses);
	expect(total).toBe(4803);
});
