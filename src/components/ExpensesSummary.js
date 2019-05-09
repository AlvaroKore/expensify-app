import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import getExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';


export class ExpensesSummary extends React.Component {
    render () {
        const expenseWord = this.props.expenseCount > 1 ? 'expenses': 'expense'
        return (
            <div>
                <h3>ExpensesSummary</h3>
                <p>
                    Viewing {this.props.expenseCount} {expenseWord} totalling {numeral(this.props.expensesTotal/ 100).format('$0,0.00')}
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
