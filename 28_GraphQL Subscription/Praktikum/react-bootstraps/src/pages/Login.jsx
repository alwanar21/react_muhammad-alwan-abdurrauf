import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handle = (event) => {
        event.preventDefault();
        console.log(username, password);
    }
    // useEffect(() => {
    //     const dummyUser = { username: 'admin', password: 'password123' };
    //     localStorage.setItem('user', JSON.stringify(dummyUser));
    // }, [])


    const handleLogin = (event) => {
        event.preventDefault();
        const adminUser = { username: 'admin', password: 'password123' };

        const user = JSON.parse(localStorage.getItem('user'));
        if (user && user.username === username && user.password === password) {

            localStorage.setItem('isLoggedIn', true);
            window.location.reload();
            swal("Good job!", `Anda telah login sebagai ${user.username}`, "success")
        } else if (username === adminUser.username && password === adminUser.password) {
            localStorage.setItem('user', JSON.stringify(adminUser));
            localStorage.setItem('isLoggedIn', true);
            window.location.reload();
            swal("Good job!", "Anda telah login sebagai admin", "success")
        } else {
            setErrorMessage('Invalid username or password');
        }
    };


    return (
        <div className="container mt-5 mb-5">
            <Form >
                <Form.Group className="mb-3 w-50" controlId="formBasicEmail">
                    <Form.Label>username</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="username"
                        onChange={(e) => setUsername(e.target.value)}
                    />

                </Form.Group>
                <Form.Group className="mb-3 w-50" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={handleLogin}>
                    Submit
                </Button>
            </Form>
        </div>
    )
}
