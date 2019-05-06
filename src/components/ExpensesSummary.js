import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import getExpensesTotal from '../selectors/expenses-total';


export class ExpensesSummary extends React.Component {
    render () {
        return (
            <div>
                <h3>ExpensesSummary</h3>
                <p>
                    Viewing {this.props.expenseCount} expenses totalling {this.props.expensesTotal}
                </p>
            </div>
        )
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
