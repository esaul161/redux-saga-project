import React, {Component} from 'react';
import {ListGroup, ListGroupItem, Button} from 'reactstrap';
class UserList extends Component {
    
    render(){
       let {users, onDeleteUser} = this.props
    return (
        <div>
        
        <ListGroup>
            {users.sort((a,b) => {
               return a.firstName > b.firstName ? 1 : 
               a.firstName < b.firstName ? -1 : 
               a.lastName > b.lastName ? 1 :
               a.lastName < b.lastName ? -1 : 0
            }).map((user) => {
                return <ListGroupItem key={user.id}>
                <section style={{display: 'flex'}}>
                    <div style={{flexGrow: 1, margin: 'auto 0'}}>
                        {user.firstName} {user.lastName}
                    </div>
                    <div>
                        <Button outline color={'danger'} onClick={() => onDeleteUser(user.id)}>
                            Delete
                        </Button>
                    </div>
                </section>
                </ListGroupItem>
            })}
        </ListGroup>
        </div>
    )
    }
}

export default UserList;