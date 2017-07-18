import React, { Component } from 'react';
import styles from './Comments-styles.css';

export class Comments extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="panel panel-default widget">
                        <div className="panel-heading">
                            <span className="glyphicon glyphicon-comment"></span>
                            <h3 className="panel-title"> Recent Comments</h3>
                            <span className="label label-info">78</span>
                        </div>
                        <div className="panel-body">
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <div className="row">
                                        <div className="col-xs-2 col-md-1">
                                            <img src="http://placehold.it/80" className="img-circle img-responsive" alt="" />
                                        </div>
                                        <div className="col-xs-10 col-md-11">
                                            <div>
                                                <a>
                                                    Google Style Login Page Design Using Bootstrap</a>
                                                <div className="mic-info">
                                                    By: <a href="#">Bhaumik Patel</a> on 2 Aug 2013
                                                </div>
                                            </div>
                                            <div className="comment-text">
                                                Awesome design
                                            </div>
                                            <div className="action">
                                                <button type="button" className="btn btn-primary btn-sm" style={{ marginRight: '10px' }} title="Edit">
                                                    <span className="glyphicon glyphicon-pencil"></span>
                                                </button>
                                                <button type="button" className="btn btn-success btn-sm" style={{ marginRight: '10px' }} title="Approved">
                                                    <span className="glyphicon glyphicon-ok"></span>
                                                </button>
                                                <button type="button" className="btn btn-danger btn-sm margin-md" title="Delete">
                                                    <span className="glyphicon glyphicon-trash"></span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <a href="#" className="btn btn-primary btn-sm btn-block" role="button"><span className="glyphicon glyphicon-refresh"></span> More</a>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Comments;