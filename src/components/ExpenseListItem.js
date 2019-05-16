import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = (props) => (
	<Link to={`/edit/${props.id}`} className="list-item">
		<div>
			<h3>{props.description}</h3>
			<span>{moment(props.createdAt).format('MMMM Do, YYYY')}</span>
		</div>
		<h3>{numeral(props.amount / 100).format('$0,0.00')}</h3>
	</Link>
);

export default ExpenseListItem;
