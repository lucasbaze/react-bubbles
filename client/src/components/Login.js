import React, { useState, useEffect } from 'react';

import { useForm } from '../hooks/useForm';

import { Form, Container } from 'semantic-ui-react';

const Login = () => {
    // make a post request to retrieve a token from the api
    // when you have handled the token, navigate to the BubblePage route

    const [formValues, handleChange, handleSubmit, setFormValues] = useForm(
        null,
        console.log
    );

    useEffect(() => {}, []);

    return (
        <Container>
            <h1>Welcome to the Bubble App!</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Field>
                    <input
                        name="username"
                        placeholder="Username"
                        value={formValues.username}
                        onChange={handleChange}
                    />
                </Form.Field>
                <Form.Field>
                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={formValues.password}
                        onChange={handleChange}
                    />
                </Form.Field>
                <Form.Button type="submit" content="Login!" />
            </Form>
        </Container>
    );
};

export default Login;
