import {takeEvery, takeLatest, take, call, fork, put} from 'redux-saga/effects';
import * as actions from '../actions/users';
import * as api from '../api/uses';

function* getUsers(){
    try {
        const result = yield call(api.getUsers);
        console.log(result);
        yield put(actions.getUsersSuccess({
            items: result.data.data
        }))
    } catch (error) {
        yield put(actions.usersError({
            error: 'An error ocurred when trying to get the users'
        }))
    }
}

function* watchGetUsersRequest(){
    yield takeEvery(actions.Types.GET_USERS_REQUEST, getUsers);
}

function* watchCreateUserRequest(){
    yield takeLatest(actions.Types.CREATE_USER_REQUEST, createUser)
}

function* watchDeleteUserRequest(){
    while(true){
        const action = yield take(actions.Types.REMOVE_USER_REQUEST)
        yield call(removeUser, {
            id: action.payload.id
        })
    }
    
}

function* createUser(action){
    console.log('action',action);
    try {
        yield call(api.createUser, {firstName: action.payload.firstName, lastName: action.payload.lastName})
        yield call(getUsers);
    } catch (error) {
        yield put(actions.usersError({
            error: 'An error ocurred when trying to create the user'
        }))
    }
}

function* removeUser(id){
    console.log('action',id);
    try {
        yield call(api.removeUser, id)
        yield call(getUsers);
    } catch (error) {
        yield put(actions.usersError({
            error: 'An error ocurred when trying to delete the user'
        }))
    }
}

const usersSagas = [
    fork(watchGetUsersRequest),
    fork(watchCreateUserRequest),
    fork(watchDeleteUserRequest)
]

export default usersSagas;