import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ContactForm from '../Form/Form.js';
import Drawing from '../../assets/images/pine_2.jpeg';
import './Contact.css';
import Github from '../Icons/Github.js';
import LinkedIn from '../Icons/LinkedIn.js';
import { motion } from "framer-motion";
import pageTransition from '../Animations/pageTransition';



export default function Contact() {

    return (
        <motion.div initial="out" animate="in" exit="out" variants={pageTransition} transition={pageTransition}>
            <section>
                <Container fluid="xxl">
                    <Row>
                        <Col>
                            <h2>If you would like to get in touch and discuss working on a project or just to say Hello?</h2><h2>Contact me via the links below or by using the contact form provided.</h2>
                        </Col>
                        <Col sm={2}></Col>
                        <Col><img src={Drawing} className="drawing"></img></Col>
                    </Row>
                </Container>
                <Container fluid="xxl">
                    <Row>
                        <Col lg={true}><h5>Email:</h5><a href="mailto:info@willlocket.com"><p>info@willlocket.com</p></a><h5>Phone:</h5><a href="tel:+61-400-173-787"><p>0400 173 787</p></a><div className="socials"><LinkedIn /><Github /></div></Col>
                        <Col lg={true}></Col>
                        <Col sm={true}></Col>
                    </Row>
                </Container>
            </section>
        </motion.div>
    );
}


