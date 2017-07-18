
import { BlogPostReducer } from './BlogPostReducer';
import { CommentsReducer } from './CommentsReducer';
import { LoginReducer } from './LoginReducer';
import { MembersReducer } from './MembersReducer';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({ BlogPostReducer, CommentsReducer, LoginReducer, MembersReducer });

export default rootReducer;