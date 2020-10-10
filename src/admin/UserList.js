import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { Button, Form, FormControl, Nav, Navbar, Table } from "react-bootstrap";
import UsersService from "../service/UsersService";




class UserList extends Component {


    constructor(props) {
        super(props)
        this.state = {

            users: []

        }
    }
    componentDidMount() {
        UsersService.getUsers().then((res) => {

            this.setState({ users: res.data });
        });

    }

    render() {
        return (


            <div>


                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    {
                        this.state.users.map(


                            user =>
                                <tr key={user.userId}>
                                    <td>{user.userId}</td>
                                    <td>{user.fullName}</td>
                                    <td>{user.email}</td>
                                    <td>edit</td>

                                </tr>
                        )
                    }
                </Table>


            </div>

        );

    }

}


export default UserList;