import React, { useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { User, credentials } from "../../test/credentials";
import { useNavigate } from "react-router-dom";

const UserList = () => {
    const [users, setUsers] = useState(
        JSON.parse(localStorage.getItem("credentials")) as User[] || credentials
    );
    const navigate = useNavigate();
    return (
        <Container>
            <h1 className="mt-4 mb-4 text-center">User List</h1>
            <Container className="w-75">
                <Button
                    className="mb-4"
                    onClick={() => {
                        navigate("/admin/users/add");
                    }}
                >
                    Create a new user
                </Button>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Username</th>
                            <th>Role</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{user.username}</td>
                                    <td>{user.role}</td>
                                    <td
                                        className={
                                            user.status == null ||
                                            user.status == "Active"
                                                ? "text-success"
                                                : "text-danger"
                                        }
                                    >
                                        {user.status || "Active"}
                                    </td>
                                    <td className="d-flex gap-2">
                                        <Button
                                            variant="warning"
                                            onClick={() => {
                                                setUsers((prev) => {
                                                    const results = prev.filter(
                                                        (userFound) =>
                                                            userFound != user
                                                    );
                                                    localStorage.setItem(
                                                        "credentials",
                                                        JSON.stringify(results)
                                                    );
                                                    return results;
                                                });
                                            }}
                                        >
                                            Remove
                                        </Button>
                                        <Button
                                            variant="success"
                                            onClick={() => {
                                                setUsers((prev) => {
                                                    return prev.map(
                                                        (userFound) => {
                                                            if (
                                                                user ==
                                                                userFound
                                                            ) {
                                                                userFound.status =
                                                                    "Active";
                                                            }
                                                            return userFound;
                                                        }
                                                    );
                                                });
                                            }}
                                        >
                                            Activate
                                        </Button>
                                        <Button
                                            variant="danger"
                                            onClick={() => {
                                                setUsers((prev) => {
                                                    return prev.map(
                                                        (userFound) => {
                                                            if (
                                                                user ==
                                                                userFound
                                                            ) {
                                                                userFound.status =
                                                                    "Suspended";
                                                            }
                                                            return userFound;
                                                        }
                                                    );
                                                });
                                            }}
                                        >
                                            Suspend
                                        </Button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </Container>
        </Container>
    );
};

export default UserList;
