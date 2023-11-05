import React, {useEffect, useState} from 'react';
import { Row, Col, Container, Card} from 'react-bootstrap';
import axios from "axios"

const readUsers = () =>  {
    getAllUsersUrl = "http://localhost:4000/v1/user/all";
    const [users, setUsers] = useState();

    const fetchUsers = async () => {
     const res = await axios .get(`${getAllUsersUrl}`);
     console.log(res.data)
     setUsers(res.data)  
    } 

useEffect(() => {
    fetchUsers();
},[])
 const renderedUsers = Object.values(users).map(user => {
    return(
        <>
        <Row className='justify-content-center'>
            <Col lg = {4}>
                <Card>
                    <Card.Body>
                        <h4>{user.name}</h4>
                        <p>{user.email}</p>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        </>
    )
 });
 //Return results for rendered users

    return(
        <Container>
             <h3 className='text-center'>Users</h3>
            <Row className='d-flex flex-row flex-wrap justify-content-between'>{renderedUsers}</Row>
        </Container>
    )
    }
    export default readUsers;