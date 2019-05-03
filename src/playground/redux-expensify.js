import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// Expenses Reducer




//Store creation



store.subscribe(() => {
	const state = store.getState();
	const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
	console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({ description: 'rent', amount: 1000, createdAt: -21000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'coffee', amount: 200, createdAt: -1000 }));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 600 }));
//store.dispatch(setTextFilter('ren'));
store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

//store.dispatch(setStartDate(-5000));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(30005));

const demoState = {
	expenses: [
		{
			id: 1,
			description: 'January Rent',
			note: 'This was the final pay for that address',
			amount: 54500,
			createdAt: 0,
			filters: {
				text: 'rent',
				sortBy: 'amount',
				startDate: undefined,
				endDate: undefined
			}
		}
	]
};
