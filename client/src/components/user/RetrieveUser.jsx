import Layout from '../layout/Layout';
import * as userService from '../../services/user.service';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Row, Col, Card } from 'react-bootstrap';

const RetrieveUser = () => {
    const { userId } = useParams()
    
    const [user, setUser] = useState({});

    const fetchUser = async () => {
        try {
            const user = await userService.retrieveUser(userId);
            setUser(user);
        } catch (err) {
            setUser(null);
        }
    };

    useEffect(() => {
        fetchUser();
    }, [userId]);
    
    return (
        <Layout>
            {user ? (
            <Row className='justify-content-center'>
                <Col lg={6}>
                    <h3 className='text-center mb-3'>{user.name}</h3>
                    <Card>
                        <Card.Body className='text-center'>
                            <p>{user.email}</p>
                            {user.city && user.country && (
                                <p>{user.city} - {user.country}</p>
                            )}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            ) : (
                <div className='text-center text-danger fw-bold'>
                    No Users found.
                </div>
            )}
        </Layout>
    );
};

export default RetrieveUser;