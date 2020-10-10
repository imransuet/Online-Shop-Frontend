import React, { Component } from 'react';
import {Button, Alert, Breadcrumb, Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

class Test extends Component{
    render()
    {
        return(

            <div>
                <Card className="mb-3" style={{color:"#000"}}>
                    <Card.Img src="https://picsum.photos/200/300"/>
                    <Card.Body>
                    
                    </Card.Body>
                    <Card.Title>New Card</Card.Title>
                    <Card.Text>hello Card guys</Card.Text>
                </Card>
                <Breadcrumb.Item>Test</Breadcrumb.Item>
                <Breadcrumb.Item>Test 2</Breadcrumb.Item>
                <Breadcrumb.Item>Test 3</Breadcrumb.Item>
                <Alert variant="primary">This is me</Alert>
            <Button>New Button</Button>
            </div>
        );
    }



}
export default Test