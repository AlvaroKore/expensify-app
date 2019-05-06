const getExpensesTotal = (expenses) => {
	return expenses.map((expense) => expense.amount).reduce((anterior, actual) => anterior + actual, 0);
};

export default getExpensesTotal;
