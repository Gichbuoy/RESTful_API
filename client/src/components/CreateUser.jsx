import React, { useState } from "react";
import { Button, Col, Form, Row ,Container} from "react-bootstrap";
import { toast } from "react-toastify";

import axios from "axios";

const CreateUser = () => {
    const createUsersEndpoint = "http://localhost:4000/v1/user/";

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");

    //submit form 
    const submitForm = async (event) => {
        event.preventDefault();

        const payload = {
            name,
            email,
            city,
            country,
        };
        try {
            const res = await axios.post(`${createUsersEndpoint}`, payload);
            //optional chaining operation
            if (res.data?.status) {

                toast.success("User successfully created!");
                // Clear states
                setName("");
                setEmail("");
                setCity("");
                setCountry("");


            } else {
                //give error message
                toast.warn("Failed to load data ")
            }

        } catch (error) {
            //something is wrong  
            const getErrorMessage = () => {
                const {
                    data: {
                      errors: { body },
                    },
                  } = error.response;
          
                  const message = body[0]?.message;
          
                // Uppercase the first letter of the message
                  return message[0].toUpperCase() + message.substring(1)
            };
      
            toast.error(getErrorMessage());
        }
    };
    return (
        <Container className="mb-5">
            <Row className="justify-content-center">
                <Col lg={6}>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Name"
                                onChange={(fieldElement) => setName(fieldElement.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Email"
                                onChange={(fieldElement) => setEmail(fieldElement.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>City</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="City"
                                onChange={(fieldElement) => setCity(fieldElement.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Country</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Country"
                                onChange={(fieldElement) =>
                                    setCountry(fieldElement.target.value)
                                }
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={submitForm}>
                            Add User
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default CreateUser