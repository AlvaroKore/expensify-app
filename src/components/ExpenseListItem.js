import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = (props) => (
	<div>
		<h3>
			<Link to={`/edit/${props.id}`}>{props.description}</Link>
		</h3>
		<p>amount: {props.amount}</p>
		<p>note: {props.note}</p>
		<p>createdAt: {props.createdAt}</p>
		<hr />
	</div>
);

export default ExpenseListItem;
