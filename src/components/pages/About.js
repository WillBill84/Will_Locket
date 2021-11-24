import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './About.css';
import { motion } from "framer-motion";
import pageTransition from '../Animations/pageTransition';


export default function About() {

    return (
        <motion.div initial="out" animate="in" exit="out" variants={pageTransition} transition={pageTransition}>
            <section id="about">
                
                <Container fluid="xxl">
                    <h1 className="bigHeader">About</h1>
                   
                    <Row>
                        <Col>
                            <h2>Will Locket is a creative web developer from Melbourne, Australia that specialises in designing and developing for the web.</h2>
                            <h4>His passion for writing code combined with a background in graphic design enables him to build unique and engaging web apps.</h4>
                        </Col>
                        <Col sm={2}></Col>
                        <Col>
                            
                        </Col>
                       
                    </Row>
                    <Row>
                        <Col>
                            <h5>Education:</h5>
                            <ul className="list">
                                <li><p>Full Stack Coding Bootcamp</p><p>Monash University</p></li>
                                <li><p>Diploma of Arts (Graphic Design)</p><p>Chisholm TAFE</p></li>
                                <li><p>Certificate IV in Design</p><p>Brighton Bay Art, Design and Photography</p></li>
                            </ul>

                        </Col>
                        <Col sm={2}></Col>
                        <Col>
                            
                        </Col>
                    </Row>
                </Container>
                <Container fluid="xxl">

                    <Row>
                        <Col lg={true} className="skills">

                        </Col>
                        <Col sm={2}></Col>
                        <Col lg={true}></Col>
                    </Row>

                </Container>
            </section>
        </motion.div>
    );
}
