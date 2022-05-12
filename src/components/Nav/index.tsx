import * as React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar } from 'react-bootstrap';

export default function NavBar() {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">
                <img
                    alt=""
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Font_C.svg/1920px-Font_C.svg.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />
                {' '}
                Jagoan FC
            </Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
            </Nav>
        </Navbar>
    )
}