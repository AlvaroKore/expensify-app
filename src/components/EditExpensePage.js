import React from 'react';
import { connect } from 'react-redux';
import { editExpense, removeExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';

export class EditExpensePage extends React.Component {
	onSubmit = (expense) => {
		this.props.editExpense(this.props.expense.id, expense);
		this.props.history.push('/');
	};

	removeExpense = (e) => {
		e.preventDefault();
		this.props.removeExpense(this.props.expense.id);
		this.props.history.push('/');
	};

	render() {
		return (
			<div>
				<ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit} />
				<button onClick={this.removeExpense}>Remove</button>
			</div>
		);
	}
}

const mapStateToProps = (state, props) => {
	return {
		expense: state.expenses.find((expense) => props.match.params.id === expense.id)
	};
};

const mapDispatchToProps = (dispatch) => ({
	editExpense: (id, expense) => dispatch(editExpense(id, expense)),
	removeExpense: (id) => dispatch(removeExpense({ id }))
});
export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
