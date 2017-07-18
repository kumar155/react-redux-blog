

import React, { Component } from 'react';
import logo from './logo.svg';
import { Route, Link } from 'react-router-dom'
import GamesPage from './GamesPage';
import LoginPage from './LoginPage';
import './App.css';
import AddBlogPost from './AddBlogPost';
import MembersList from './MembersList';
import Comments from './Comments';


export class HomePage extends Component {
    render() {
        return (
            <div className="col-md-12" style={{ paddingLeft: 'unSet' }}>
                <div className="col-md-3" style={{ paddingLeft: 'unSet' }}>
                    <div className="sidebar-nav">
                        <div className="well" style={{ width: '300px', padding: '8px 0px' }}>
                            <ul className="nav nav-list" style={{ height: '950px' }}>
                                <li className="nav-header" style={{ marginLeft: '45px', marginBottom: '50px' }}><img src={logo} className="App-logo" alt="logo" /></li>
                                <li className="active"><a href="index"><i className="fa fa-home"></i> Dashboard</a></li>
                                <li><a href="#"><i className="fa fa-edit"></i> <Link to="/AddBlog">Add Blog Post</Link></a></li>
                                <li><a href="#"><i className="fa fa-sign-in"></i> <Link to="/login">Login</Link></a></li>
                                <li><a href="#"><i className="fa fa-user"></i> <Link to="/members">Members</Link></a></li>
                                <li><a href="#"><i className="fa fa-comment"></i><Link to="/comments">Comments</Link> </a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <Route exact path="/games" component={GamesPage} />
                    <Route path="/login" component={LoginPage} />
                    <Route path="/AddBlog" component={AddBlogPost} />
                    <Route path="/members" component={MembersList} />
                    <Route path="/comments" component={Comments} />
                    
                </div>
            </div>
        );
    }
}

export default HomePage;