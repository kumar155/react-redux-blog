import React, { Component } from 'react';
import styles from './styles-membersList.css';

export class MembersList extends Component {
    render() {
        return (
            <div className="container" style={{marginTop:'35px'}}>
                <div className="row">
                    <div className="[ col-xs-12 col-sm-offset-2 col-sm-8 ]">
                        <ul className="event-list">
                            <li>
                                <time dateTime="2014-07-20">
                                    <span className="day">4</span>
                                    <span className="month">Jul</span>
                                    <span className="year">2014</span>
                                    <span className="time">ALL DAY</span>
                                </time>
                                <img alt="Independence Day" src="https://farm4.staticflickr.com/3100/2693171833_3545fb852c_q.jpg" />
                                <div className="info">
                                    <h2 className="title">Independence Day</h2>
                                    <p className="desc">United States Holiday</p>
                                </div>                               
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        );
    }
}
export default MembersList;