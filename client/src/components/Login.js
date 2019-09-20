import React, { useState, useEffect } from 'react';

//Actions
import { axiosWithAuth } from '../actions';

//Hooks
import { useForm } from '../hooks/useForm';

//Components
import { Form, Container } from 'semantic-ui-react';

const Login = ({ history }) => {
    // make a post request to retrieve a token from the api
    // when you have handled the token, navigate to the BubblePage route
    const submitHandler = formValues => {
        let credentials = { ...formValues };
        console.log(credentials);
        axiosWithAuth()
            .post('/login', credentials)
            .then(res => {
                if (res.status == 200) {
                    localStorage.setItem('token', res.data.payload);
                }
                history.push('/bubbles');
            })
            .catch(err => console.log(err));
    };

    const [formValues, handleChange, handleSubmit, setFormValues] = useForm(
        { username: '', password: '' },
        submitHandler
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
                <Form.Button type="submit" color="teal" content="Login!" />
            </Form>
        </Container>
    );
};

export default Login;
