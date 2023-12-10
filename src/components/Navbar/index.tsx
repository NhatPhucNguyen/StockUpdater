import {
    Button,
    Container,
    Nav,
    Navbar as NavContainer,
} from "react-bootstrap";

type Props = {
    isAuthenticated?: boolean;
};

const Navbar = ({isAuthenticated}:Props) => {
    return (
        <NavContainer
            bg="dark"
            data-bs-theme="dark"
            className="justify-content-between"
        >
            <Container>
                <NavContainer.Brand href="/">StockUpdater</NavContainer.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">About</Nav.Link>
                    <Nav.Link href="#features">Contact</Nav.Link>
                </Nav>
            </Container>
            {isAuthenticated && <Container className="justify-content-end">
                <Button variant="warning" as="a" href="/">
                    Logout
                </Button>
            </Container>}
        </NavContainer>
    );
};

export default Navbar;
