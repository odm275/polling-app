import React from 'react';

const Login = () => (
    <div>
        <div className="row">
            <form className="col s12">
                <div className="row">
                    <div className="input-field col s12">
                        <input placeholder="username" id="user_name" type="text" className="validate"/>
                        <label for="user_name">Username</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input placeholder="password" id="password" type="text" className="validate"/>
                        <label for="password">Password</label>
                    </div>
                </div>
            </form>
        </div>
    </div>
)

export default Login;
