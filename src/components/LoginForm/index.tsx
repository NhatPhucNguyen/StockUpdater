import React, { ChangeEvent, FormEvent, useRef } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { credentials } from "../../test/credentials";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const [role, setRole] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        for (const user of credentials) {
            if (
                user.username === usernameRef.current?.value &&
                user.password === passwordRef.current?.value
            ) {
                if (user.role == "admin") {
                    navigate("/admin");
                } else {
                    navigate("/dashboard");
                }
            }
        }
    };
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setRole(event.target.id);
    };
    return (
        <Form
            className="border border-primary p-4 w-50"
            onSubmit={handleSubmit}
        >
            <h1 className="fs-1 text-center">Login</h1>
            <Container className="d-flex justify-content-center align-items-center mt-3">
                {["radio"].map((type) => (
                    <div key={`inline-${type}`} className="mb-3">
                        <Form.Check
                            inline
                            label="Admin"
                            name="role"
                            type="radio"
                            id="admin"
                            checked={role == "admin"}
                            onChange={handleChange}
                        />
                        <Form.Check
                            inline
                            label="User"
                            name="role"
                            type="radio"
                            id="user"
                            checked={role == "user"}
                            onChange={handleChange}
                        />
                    </div>
                ))}
            </Container>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter username"
                    ref={usernameRef}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Password"
                    ref={passwordRef}
                />
            </Form.Group>
            <Container className="d-flex justify-content-center">
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Container>
        </Form>
    );
};

export default LoginForm;
