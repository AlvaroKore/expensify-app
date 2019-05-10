import React from 'react';
import { connect } from 'react-redux';
import { editExpense, startRemoveExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';

export class EditExpensePage extends React.Component {
	onSubmit = (expense) => {
		this.props.editExpense(this.props.expense.id, expense);
		this.props.history.push('/');
	};

	startRemoveExpense = (e) => {
		e.preventDefault();
		this.props.startRemoveExpense({id: this.props.expense.id});
		this.props.history.push('/');
	};

	render() {
		return (
			<div>
				<ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit} />
				<button onClick={this.startRemoveExpense}>Remove</button>
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
	startRemoveExpense: ({id}) => dispatch(startRemoveExpense({ id }))
});
export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
