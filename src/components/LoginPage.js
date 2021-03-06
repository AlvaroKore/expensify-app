import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

const LoginPage = ({ startLogin }) => (
	<div className="box-layout">
		<div className="box-layout__box">
			<h1 className="layout__title">Expensify</h1>
			<p>It's time to get your expenses under control</p>
			<button className="button" onClick={startLogin} type="submit">
				Login with Google
			</button>
		</div>
	</div>
);

const mapDispatchToProps = (dispatch) => {
	return {
		startLogin: () => dispatch(startLogin())
	};
};

export default connect(undefined, mapDispatchToProps)(LoginPage);
