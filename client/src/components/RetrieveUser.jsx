import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Row, Col, Container, Card } from 'react-bootstrap';
import axios from 'axios';

const RetrieveUser = () => {
    const { userId } = useParams()
    const getUserUrl = `http://localhost:4000/v1/user/${userId}`;
    
    const [user, setUser] = useState({});

    const fetchUser = async () => {
        try {
            const { data: apiResponse } = await axios.get(`${getUserUrl}`);
            
            setUser(apiResponse);
        } catch (err) {
            setUser(null);
        }
    };

    useEffect(() => {
        fetchUser();
    }, [userId]);
    
    return (
        <Container className='mt-5 mb-5'>
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
        </Container>
    );
};

export default RetrieveUser;