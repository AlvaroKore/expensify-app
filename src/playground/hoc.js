import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
	<div>
		<h1>Info</h1>
		<p>The info is {props.info}</p>
	</div>
);

const withAdminInfo = (WrappedComponent) => {
	return (props) => (
		<div>
			{props.isAdmin && <p>This is private info, please dont share</p>}
			<WrappedComponent {...props} />
		</div>
	);
};

const requireAuthentication = (WrappedComponent) => {
	return (props) => <div>{props.isAuthenticated ? <WrappedComponent {...props} /> : <p>please be login</p>}</div>;
};

const AdminInfo = withAdminInfo(Info);

const AuthInfo = requireAuthentication(Info);

//ReactDOM.render(<AdminInfo isAdmin={true} info="my new info" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info="my new info" />, document.getElementById('app'));
