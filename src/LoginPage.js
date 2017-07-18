
import React, { Component } from 'react';
//import { connect } from 'react-redux';
import img from './img_avatar2.png';

export class LoginPage extends Component {
    constructor() {
        super();
        var userName = '';
        var password = '';
    }
    userNameChange = (event) => {
        event.preventDefault();
        this.userName = event.target.value;
    }
    onLogin = (event) => {
        event.preventDefault();
    }
    render() {

        return (
            <form>
                <div className="imgcontainer">
                    <img src={img} alt="Avatar" className="avatar" />
                </div>
                <div className="container">
                    <label><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="uname" onChange={(e) => this.userName = e.target.value} />

                    <label><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" onChange={(e) => this.password = e.target.value} />

                    <button type="submit" onClick={(e) => this.onLogin(e)}>Login</button>
                    {this.status && <span>UserName and Password not matched..!</span>}
                </div>
            </form>
        );
    }
}

export default LoginPage;