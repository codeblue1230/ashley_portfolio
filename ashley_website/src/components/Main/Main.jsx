import React from "react"
import {
    Button,
    Container,
    Row,
    Col
} from "react-bootstrap";
import { Link } from "react-router-dom";


export const Main = () => {
    return (
        <section>
            <Row className="main_row">
                <Col className="text-center">
                    <div>
                        <hr/>
                    </div>
                    <h2>About Me</h2>
                    <p>
                        Falling into the world of public relations while a junior 
                        attending the University of Central Florida, I started my 
                        career as an intern for Publicity For Good, a communications 
                        firm that proved high level publicity and social media services 
                        for its wide array of purpose driven clients. I crafted PR 
                        plans, created media lists, sent pitches, nurtured media relations, 
                        produced reports and regularly obtained features for clients in 
                        publications including PEOPLE.com, Insider, Better Homes & Gardens, 
                        Well + Good, Reader's Digest, Cosmopolitan and more. I was then 
                        promoted to a part time account coordinator role my senior year 
                        where I continued these responsibilities as well as serving my 
                        own clients while still enrolled full time at the university.
                    </p>
                    <p>
                        I was a member of QUOTES, the AD/PR club at UCF my senior year 
                        of college. I was also a student member of the Florida Public Relations 
                        Association (FPRA) Orlando Chapter turned general member. Upon my move 
                        to New York, I joined the New York Chapter of Public Relations Society 
                        where I plan to continue furthering my knowledge in the world of 
                        public relations. I studied Business Communication and Mass Media at 
                        UCF and became proficient in journalism ethics, digital marketing, 
                        sales, public speaking and professional communications. 
                    </p>
                    <p>
                        Upon graduation, I was then hired by Max Borges Agency, a leading 
                        consumer technology public relations firm where I am now a full 
                        time account coordinator. I have 2 years of agency experience developing 
                        and implementing public relation campaigns, writing press releases, 
                        pitches, organizing media events, creating media lists, nurturing client
                         and media relations, working with influencers and assisting with product 
                         launches to engage new audiences and increase sales through year round 
                         national media attention for top consumer tech and lifestyle brands.
                    </p>
                </Col>
                <div>
                    <hr/>
                </div>
            </Row>
            <Row className="text-center">
                <Col>
                    <h3>Check Out My Portfolio</h3>
                    <Button href="/portfolio" variant="dark">Visit</Button>
                </Col>
            </Row>
    </section>
    )
}
       