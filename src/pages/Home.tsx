import { Container } from "react-bootstrap";
import LoginForm from "../components/LoginForm";
import Navbar from "../components/Navbar";
import { credentials } from "../test/credentials";
import { useEffect } from "react";

const Home = () => {
    useEffect(() => {
        localStorage.setItem("credentials", JSON.stringify(credentials));
    }, []);

    return (
        <>
            <Navbar isAuthenticated={false} />
            <Container className="d-flex justify-content-center mt-4">
                <LoginForm />
            </Container>
        </>
    );
};

export default Home;
