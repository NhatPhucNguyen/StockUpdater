import React, { ChangeEvent } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useState } from "react";
import { User, credentials } from "../../test/credentials";
import { useNavigate } from "react-router-dom";

const UserForm = () => {
    const [user, setUser] = useState<User>({} as User);
    const navigate = useNavigate();
    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
    return (
        <Container className="d-flex justify-content-center mt-4">
            <Form
                className="w-50 border border-primary p-4"
                onSubmit={(e) => {
                    e.preventDefault();
                    credentials.push(user);
                    localStorage.setItem("credentials", JSON.stringify(credentials));
                    navigate("/admin");
                }}
            >
                <h1 className="text-center">Add a new user</h1>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter username"
                        name="username"
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        name="password"
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Role</Form.Label>
                    <Form.Select
                        aria-label="Default select example"
                        name="role"
                        onChange={handleChange}
                    >
                        <option>Please select a role</option>
                        <option value="admin">Admin</option>
                        <option value="Store Manager">Store Manager</option>
                        <option value="Sale Associate">Sale Associate</option>
                        <option value="Customer Support">
                            Customer Support
                        </option>
                        <option value="Marketing Manager">
                            Marketing Manager
                        </option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="d-flex justify-content-center">
                    <Button type="submit">Submit</Button>
                </Form.Group>
            </Form>
        </Container>
    );
};

export default UserForm;
