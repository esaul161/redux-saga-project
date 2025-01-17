import axios from 'axios';

export const getUsers = () => {
    return axios.get('/users', {
        params: {
            limit: 1000
        }
    });
}

export const createUser = ({firstName, lastName}) => {
    return axios.post('/users', {
        firstName,lastName
    });
}

export const removeUser = id => {
    return axios.delete(`/users/${id.id}`);
}