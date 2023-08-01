// External Imports
import React from "react"
import { Button,
    Container,
    Row,
    Col
} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { height } from "@mui/system";

// Internal Imports
import web_img from '../../assets/images/web_ss.png'
import well_img from '../../assets/images/well+good.png'
import yoga_img from '../../assets/images/yoga.png'
import eat_img from '../../assets/images/eat_this.png'



export const FinalPortfolio = () => {
    const back_image_style = {width: '100%', height: '100%'}
    const logo_style = {width: '90%'}

    return (
        <>
            <Container>
                <h1 className="text-center mt-3">Projects</h1>
                <Row className="justify-content-center text-center">
                    <Col md={5} className="portfolio_images p-0 mt-3">
                        <div>
                            <a href="https://www.wellandgood.com/exercises-prevent-muscle-loss/">
                                <img className="img_hover" src={web_img}  alt="Well + Good Img" style={back_image_style}/>
                            </a>
                            <img src={well_img} alt="Well + Good Logo" style={logo_style}/>
                            <p>This is a bunch of random text</p>
                        </div>
                    </Col>
                    <Col md={1}></Col>
                    <Col md={5} className="portfolio_images p-0 mt-3">
                        <div>
                            <a href="https://www.eatthis.com/best-restorative-yoga-poses-stress/">
                                <img className="img_hover" src={yoga_img}  alt="Ashley LinkedIn Img" style={back_image_style}/>
                            </a>
                            <img src={eat_img} alt="Eat This Not That" style={logo_style}/>
                            <p className="mb-0">This is a bunch of random text</p>
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-center text-center">
                    <Col md={5} className="portfolio_images p-0 mt-3">
                        <div>
                            <img src={web_img}  alt="Ashley LinkedIn Img" style={back_image_style}/>
                            <h2>Heading</h2>
                            <p>This is a bunch of random text</p>
                        </div>
                    </Col>
                    <Col md={1}></Col>
                    <Col md={5} className="portfolio_images p-0 mt-3">
                        <div>
                            <img src={web_img}  alt="Ashley LinkedIn Img" style={back_image_style}/>
                            <h2>Heading</h2>
                            <p>This is a bunch of random text</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}