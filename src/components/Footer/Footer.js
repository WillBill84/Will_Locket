import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Github from '../Icons/Github.js';
import LinkedIn from '../Icons/LinkedIn.js';
import './footer.css';


export default function Footer() {

    return (
        
            <div className="footer">
                <Container fluid="xxl">
                    <Row>
                        <Col><div className="contactDetails"><Col sm={4}><h5>P:</h5><a href="tel:+61-400-173-787"><p>0400 173 787</p></a></Col><Col sm={4}><h5>E:</h5><a href="mailto:info@willlocket.com"><p>info@willlocket.com</p></a></Col></div></Col><Col><div className="socials"><LinkedIn /><Github /></div></Col>
                    </Row>

                   {/*  <Row>
                        <Col lg={true}><div className="socials"><LinkedIn /><Github /></div></Col>
                    </Row> */}
                 
                </Container>
            </div>
    );
}
