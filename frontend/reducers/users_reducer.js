import { merge } from 'lodash';

import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
// import { RECEIVE_USER } from '../actions/user_actions';

const UsersReducer = (state = {}, action) => {
  let newState = merge({}, state);
  Object.freeze(state);
  
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge(newState, {
        [action.currentUser.user.id]: action.currentUser.user
      });
    // case RECEIVE_USER:
    //   return merge(newState, { [action.user.id]: action.user });
    default:
      return state;
  }
};

export default UsersReducer;