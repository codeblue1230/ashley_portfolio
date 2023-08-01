// External Imports
import React from "react"
import { Button,
    Container,
    Row,
    Col
} from "react-bootstrap";

// Internal Imports
import { Background } from "../Background"
import { Main } from "../Main"
import { Footer } from "../Footer";


export const Portfolio = () => {
    return (
        <Container>
            <Background/>
            <Main/>
            <Footer/>
        </Container>
    )
}