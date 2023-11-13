import Layout from '../layout/Layout';
import * as userService from '../../services/user.service';
import React, { useEffect, useState } from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { List } from 'react-content-loader';

const UserList = () => {
    const [users, setUsers] = useState({});
    const [errorMessage, setErrorMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const fetchUsers = async () => {
        try {
            setIsLoading(true);
            const users = await userService.retrieveAllUsers();
            setUsers(users);
        } catch (error) {
            const retrieveErrorMessage = () => {
                const apiErrorMessage = error?.response?.data?.message;
        
                // Null Coalescing Operator
                return apiErrorMessage ?? 'Error while connecting to the server';
              };
              setErrorMessage(retrieveErrorMessage());
            } finally {
              setIsLoading(false); // At this stage, we can stop the loader
            }
    };

    useEffect(() => {
        fetchUsers();
    }, []);
    
//Return results for users

    return (
        <Layout>
               {isLoading ? (
        <div className='text-center'>
          <List />
        </div>
      ) : errorMessage ? (
        <h3 className='text-center text-danger fw-bold'>{errorMessage}</h3>
      ) : (
      <>
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
            </>
      )}
        </Layout>
    )
}
export default UserList;