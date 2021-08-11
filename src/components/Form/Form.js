import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';



export default function ContactForm() {
    return (

        <Form>
            <Form.Group className="mb-3" controlId="Form.ControlInput1">
                <Form.Label>Name:</Form.Label>
                <Form.Control required type="email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Form.ControlInput2">
                <Form.Label>Email:</Form.Label>
                <Form.Control required type="email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Form.ControlTextarea1">
                <Form.Label>Message:</Form.Label>
                <Form.Control required as="textarea" rows={5} />
            </Form.Group>
            <Button variant="dark" type="submit">
                Submit
            </Button>
        </Form>

    );
}