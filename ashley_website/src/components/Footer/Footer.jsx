import React from "react"
import { Button,
    Container,
    Row,
    Col
} from "react-bootstrap";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { fontSize, height } from "@mui/system";


export const Footer = () => {
    return (
        <>
            <footer className="mt-3">
                <Row className="text-center">
                    <Col>
                        <h1>Contact Me</h1>
                    </Col>
                </Row>
                <Row className="text-center">
                    <Col sm={4}>
                        <p>
                            LinkedIn: <a href="https://www.linkedin.com/in/ashleyannengle/" className="foot_links">
                            Ashley Engle<LinkedInIcon sx={{fontSize: '22px', position: 'absolute'}}/>
                            </a>
                        </p>
                    </Col>
                    <Col sm={4}>
                        <p>Email: aaengle22@yahoo.com</p>
                    </Col>
                    <Col sm={4}>
                        <p>Phone: (914)886-3522</p>
                    </Col>
                </Row>
            </footer>
        </>
    )
}