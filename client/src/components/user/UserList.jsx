import Layout from '../layout/Layout';
import * as userService from '../../services/user.service';
import React, { useEffect, useState } from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const UserList = () => {
    const [users, setUsers] = useState({});

    const fetchUsers = async () => {
        const users = await userService.retrieveAllUsers();
        
        setUsers(users);
    };

    useEffect(() => {
        fetchUsers();
    }, []);
    
//Return results for users

    return (
        <Layout>
            <h3 className='text-center mb-3'>Users</h3>
            {Object.values(users).map(user => (
                <Row key={user.id} className='justify-content-center'>
                    <Col lg={4}>
                        <Card>
                            <Card.Body>
                                <h4>{user.name}</h4>
                                <p>{user.email}</p>
                                {user.city && user.country && (
                                    <p>{user.city} - {user.country}</p>
                                )}
                                <Button variant = "primary" as = {NavLink} to = {`/edit/${user.id}`}>
                                    Edit User </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            ))}
        </Layout>
    )
}
export default UserList;