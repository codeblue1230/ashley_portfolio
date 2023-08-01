// External Imports
import React from "react";
import { Button,
    Container,
    Row,
    Col,
} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'

// Internal Imports
import ashley_img from '../../assets/images/ashley_img.jpg'


export const Background = () => {
    return (
        <> 
            <Row className="mt-2 mb-2">
                <Col className="bg_image text-center">
                    <div id="bg_image_text">
                        <h1>Ashley Engle</h1>
                        <h1>Public Relations Account Coordinator</h1>
                        <img src={ashley_img}  alt="Ashley LinkedIn Img" id="main_profile_pic"/>
                    </div>
                </Col>
            </Row>
        </>
    )
}