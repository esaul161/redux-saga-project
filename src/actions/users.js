export const Types = {
    GET_USERS_REQUEST: 'users/get_users_request',
    GET_USERS_SUCCESS: 'users/get_users_success',
    CREATE_USER_REQUEST: 'users/create_user_request',
    REMOVE_USER_REQUEST: 'users/remove_users_request',
    USERS_ERROR: 'users/users_error'
}

export const getUsersRequest = () => ({
    type: Types.GET_USERS_REQUEST
})

export const getUsersSuccess = ({items}) => ({
    type: Types.GET_USERS_SUCCESS,
    payload: {
        items
    }
})

export const createUserRequest = ({firstName, lastName}) => ({
    type: Types.CREATE_USER_REQUEST,
    payload: {
        firstName,
        lastName
    }
})

export const removeUserRequest = (id) => ({
    type: Types.REMOVE_USER_REQUEST,
    payload: {
        id
    }
})

export const usersError = ({error}) => ({
    type: Types.USERS_ERROR,
    payload: {
        error
    }
})