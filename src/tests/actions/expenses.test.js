import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
	startAddExpense,
	addExpense,
	editExpense,
	removeExpense,
	setExpenses,
	startSetExpenses,
	startRemoveExpense
} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([ thunk ]);

beforeEach((done) => {
	const expenseData = {};
	expenses.forEach(({ id, description, amount, note, createdAt }) => {
		expenseData[id] = { description, amount, note, createdAt };
	});
	database.ref('expenses').set(expenseData).then(() => {
		done();
	});
});

test('shout setup remove expense action object', () => {
	const action = removeExpense({ id: '123abc' });
	expect(action).toEqual({
		type: 'REMOVE_EXPENSE',
		id: '123abc'
	});
});

test('should setup editExpense action object', () => {
	const action = editExpense('123abc', { note: 'new note' });
	expect(action).toEqual({
		type: 'EDIT_EXPENSE',
		id: '123abc',
		updates: {
			note: 'new note'
		}
	});
});

test('should setup addExpense action object with provided values', () => {
	const action = addExpense(expenses[2]);
	expect(action).toEqual({
		type: 'ADD_EXPENSE',
		expense: expenses[2]
	});
});

test('should add expense to database and store', (done) => {
	const store = createMockStore({});
	const expenseData = {
		description: 'Mouse',
		amount: 3000,
		note: 'This one is better',
		createdAt: 1000
	};
	store
		.dispatch(startAddExpense(expenseData))
		.then(() => {
			const actions = store.getActions();
			expect(actions[0]).toEqual({
				type: 'ADD_EXPENSE',
				expense: {
					id: expect.any(String),
					...expenseData
				}
			});
			return database.ref(`expenses/${actions[0].expense.id}`).once('value');
		})
		.then((snapshot) => {
			expect(snapshot.val()).toEqual(expenseData);
			done();
		});
});

test('should add expense with defaults to database and store', (done) => {
	const store = createMockStore({});
	const expenseData = {};
	store
		.dispatch(startAddExpense(expenseData))
		.then(() => {
			const actions = store.getActions();
			expect(actions[0]).toEqual({
				type: 'ADD_EXPENSE',
				expense: {
					id: expect.any(String),
					description: '',
					note: '',
					amount: 0,
					createdAt: 0
				}
			});
			return database.ref(`expenses/${actions[0].expense.id}`).once('value');
		})
		.then((snapshot) => {
			expect(snapshot.val()).toEqual({
				description: '',
				note: '',
				amount: 0,
				createdAt: 0
			});
			done();
		});
});

test('should setup set expense action object with data', () => {
	const action = setExpenses(expenses);
	expect(action).toEqual({
		type: 'SET_EXPENSES',
		expenses
	});
});

test('should fetch the expenses from firebase', (done) => {
	const store = createMockStore({});
	store.dispatch(startSetExpenses()).then(() => {
		const actions = store.getActions();
		expect(actions[0]).toEqual({
			type: 'SET_EXPENSES',
			expenses
		});
		done();
	});
});

test('should remove expense from firebase', (done) => {
	const store = createMockStore({});
	store.dispatch(startRemoveExpense({
		id: expenses[0].id
	})).then(() => {
		const action = store.getActions();
		expect(action[0]).toEqual({
			type:'REMOVE_EXPENSE',
			id: expenses[0].id
		})
		done();
	})
})
