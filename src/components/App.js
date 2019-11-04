import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getUsersRequest, createUserRequest, removeUserRequest} from '../actions/users';
import UserList from './UserList';
import {Button, Alert} from 'reactstrap';
import NewUserForm from './NewUserForm';

class App extends Component{
  constructor(props){
    super(props);
    this.props.getUsersRequest();
  }

  state = {
    showForm: false,
    showError: false
}

showForm = () => {
    this.setState(prevState => {return {showForm: !prevState.showForm}})
}

handleSubmit = ({firstName, lastName}) => {
console.log(firstName,lastName);
this.props.createUserRequest({firstName,lastName});
}

onDeleteUser = (id) => {
  console.log(id);
  this.props.removeUserRequest(id);
}

onDismiss = () => {
  this.setState(prevState => {return {showError: !prevState.showError}})
}

  render(){
    const users = this.props.users;
    const error = users.error;
    return (
    <div className='' style={{margin: '0 auto', padding: '20px', maxWidth: '600px'}}>
      {
      error !== '' ? <Alert color="danger" isOpen={!this.state.showError} toggle={this.onDismiss}>
      {error}
    </Alert> :
    <div>
      <Button outline style={{marginBottom: '10px'}} onClick={this.showForm}>{!this.state.showForm ? 'Add New User' : 'Remove New User'}</Button>
        {
            this.state.showForm ? <NewUserForm showForm={this.showForm} onSubmit={this.handleSubmit} /> : ''
        }
      <UserList users={users.items} onDeleteUser={this.onDeleteUser}></UserList>
      </div>
      }
      </div>
  );
}
}

export default connect(({users}) => ({users}), {
  getUsersRequest,
  createUserRequest,
  removeUserRequest
})(App);
