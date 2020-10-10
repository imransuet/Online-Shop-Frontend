import React, { Component } from "react";
import a from "../images/shop.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { Button, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import UserList from "./UserList";



class HeaderAdmin extends Component {

    render() {
        return (


            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">Home</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="#users">Users</Nav.Link>
                        <Nav.Link href="#categories">Categories</Nav.Link>
                        <Nav.Link href="#users">Products</Nav.Link>
                        <Nav.Link href="#categories">Customers</Nav.Link>
                        <Nav.Link href="#users">Reviews</Nav.Link>
                        <Nav.Link href="#categories">Orders</Nav.Link>

                    </Nav>
                    
                    <Nav className="top-nav">
                        <Nav.Link href="#categories">Login</Nav.Link>

                    </Nav>
                </Navbar>
                <Navbar bg="light" variant="light">
                <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-info">Search</Button>
                    </Form>
                </Navbar>
                
                <br />

              <UserList/>
            </div>

        );

    }

}


export default HeaderAdmin;