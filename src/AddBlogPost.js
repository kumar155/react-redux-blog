
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

export class AddBlogPost extends Component {
    constructor(state) {
        super();       
    }
    postMessage =()=>{
        this.props.postMessage();
    }
    render() {
        return (
            <form>
                <div className="imgcontainer">
                </div>
                <div className="container">
                    <label><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="uname" onChange={(e) => this.userName = e.target.value} />
                    <label><b>Subject</b></label>
                    <input type="text" placeholder="Enter Subject" name="sub" onChange={(e) => this.subject = e.target.value} />
                    <label><b>Comment/Message</b></label>
                    <input type="text" placeholder="Enter Message" name="msg" onChange={(e) => this.message = e.target.value} />
                    <button type="submit" onClick={(event) => { event.preventDefault(); this.postMessage() }}>Post Message</button>
                    <button type="button" className="cancelbtn" style={{ float: 'right' }}>Cancel</button>
                </div>
            </form>
        );
    }
}

AddBlogPost.PropTypes = {   
    postMessage: PropTypes.func.isRequired
}

export const mapDispatchToProps = (dispatch) => {
    postMessage: () => dispatch({ type: 'ADD_POST' })
};

export const mapStateToProps = (state) => {
    return {
        state: state
    }
}

AddBlogPost = connect(mapStateToProps, mapDispatchToProps)(AddBlogPost);

export default AddBlogPost;
