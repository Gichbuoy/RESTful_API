import React, { useEffect, useState } from 'react';
import { Row, Col, Container, Card } from 'react-bootstrap';
import axios from "axios"

const UserList = () => {
    const getAllUsersUrl = "http://localhost:4000/v1/user/all";
    const [users, setUsers] = useState({});

    const fetchUsers = async () => {
        const res = await axios.get(`${getAllUsersUrl}`);
        console.log(res.data)
        setUsers(res.data)
    }

    useEffect(() => {
        fetchUsers();
    }, [])
    const renderedUsers = Object.values(users).map(user => {
        return (
            <>
            </>
        )
    });
    //Return results for rendered users

    return (
        <Container className='mt-5 mb-5'>
            <h3 className='text-center mb-3'>Users</h3>
            {Object.values(users).map(user => (
                <Row className='justify-content-center'>
                    <Col lg={4}>
                        <Card>
                            <Card.Body>
                                <h4>{user.name}</h4>
                                <p>{user.email}</p>
                                {user.city && user.country && (
                                    <p>{user.city} - {user.country}</p>
                                )}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            ))}
        </Container>
    )
}
export default UserList;