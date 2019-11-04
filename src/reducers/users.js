import {Types} from '../actions/users';

const INITIAL_STATE = {
    items: [],
    error: ''
}

export default function users(state = INITIAL_STATE, action){
   console.log(action.payload);
    switch(action.type){
        case Types.GET_USERS_SUCCESS: {
            console.log('payload', action.payload);
            return {
                ...state,
                items: action.payload.items
            }
        }
        case Types.USERS_ERROR: {
            console.log(action.payload.error);
            return {
                ...state,
                error: action.payload.error
            }
        }
        default: {
            return state;
        }
    }
}