import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import selectExpenses from '../selectors/expenses';
import getExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

export class ExpensesSummary extends React.Component {
	render() {
		const expenseWord = this.props.expenseCount > 1 ? 'expenses' : 'expense';
		return (
			<div className="page-header">
				<div className="content-container">
					<h1 className="page-header__title">
						Viewing <span>{this.props.expenseCount}</span> {expenseWord} totalling{' '}
						<span>{numeral(this.props.expensesTotal / 100).format('$0,0.00')}</span>
                    </h1>
                    <div className="page-header__actions">
                        <Link className="button" to="/create">Add Expense</Link>
                    </div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	const expenses = selectExpenses(state.expenses, state.filters);
	return {
		expenseCount: expenses.length,
		expensesTotal: getExpensesTotal(expenses)
	};
};

export default connect(mapStateToProps)(ExpensesSummary);
