// Higher Order Component (HOC) : the component which renders another component.
//reuse code
//render hijacking
//prop manipulation
// Abstract State

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>Info is : {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            <p>This is the private info. Please dont share it.</p>
            <WrappedComponent {...props} />
        </div>
    );
}
const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? <p>Yes! You are authenticated!</p> : <p>please login yourself!</p>}
            {props.isAuthenticated && <WrappedComponent {...props} />}
        </div>
    )
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo info="Shailendra Kumar" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="Shailendra Kumar" />, document.getElementById('app'));