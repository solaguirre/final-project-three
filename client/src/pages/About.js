
import './home.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import { Container } from 'react-bootstrap';
import Figure from 'react-bootstrap/Figure';
import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';

function About() {
    return (
        <>
            <Jumbotron fluid>
                <Container>
                    <h1>Need Help?</h1>
                    <h3>Contact Us</h3>
                    <p>
                        We're happy to assist. Contact us contributors below. 
                    </p>
                </Container>
            </Jumbotron>
            <CardDeck className="cards">
                <Card className="card">
                    <Col xs={6} md={4}>
                        <Figure>
                            <Figure.Image
                                width={171}
                                height={180}
                                alt="Headshot of Marisol."
                                src="././public/sol.jpeg" roundedCircle />
                            <Figure.Caption>
                                Junior Full-Stack Developer
                            </Figure.Caption>
                        </Figure>
                    </Col>
                    <Card.Title>Marisol Aguirre</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This card has even longer content than the first to
                        show that equal height action.
                    </Card.Text>
                    <Card.Body>
                        <Card.Link href="https://github.com/solaguirre">Github</Card.Link>
                        <Card.Link href="https://www.linkedin.com/in/marisol-aguirre-ma-93688296/">LinkedIn</Card.Link>
                        <Card.Link href="mailto:soulaguirre@gmail.com">Email</Card.Link>
                    </Card.Body>
                </Card>
                <Card>
                    <Col xs={6} md={4}>
                        <Figure>
                            <Figure.Image
                                width={171}
                                height={180}
                                alt="Headshot of Lilli."
                                src="././public/lilli.png" roundedCircle />
                            <Figure.Caption>
                                Junior Full-Stack Developer
                            </Figure.Caption>
                        </Figure>
                    </Col>
                    <Card.Body>
                        <Card.Title>Lillian Paris</Card.Title>
                        <Card.Text>
                            This card has supporting text below as a natural lead-in to additional content.{' '}
                        </Card.Text>
                    </Card.Body>
                    <Card.Body>
                        <Card.Link href="https://github.com/lillianparis">Github</Card.Link>
                        <Card.Link href="https://www.linkedin.com/in/lillian-paris-7340401b4/">LinkedIn</Card.Link>
                        <Card.Link href="mailto:lillian.paris529@gmail.com">Email</Card.Link>
                    </Card.Body>
                </Card>
                <Card>
                    <Col xs={6} md={4}>
                        <Figure>
                            <Figure.Image
                                width={171}
                                height={180}
                                alt="Headshot of Rhiley."
                                src="././public/rhiley.jpeg" roundedCircle />
                            <Figure.Caption>
                                Junior Full-Stack Developer
                            </Figure.Caption>
                        </Figure>
                    </Col>
                    <Card.Title>Rhiley Southam</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This card has even longer content than the first to
                        show that equal height action.
                    </Card.Text>
                    <Card.Body>
                        <Card.Link href="https://github.com/orhiley90">Github</Card.Link>
                        <Card.Link href="https://www.linkedin.com/in/rhiley-southam-444518b8/">LinkedIn</Card.Link>
                        <Card.Link href="mailto:orhiley90@yahoo.com">Email</Card.Link>
                    </Card.Body>
                </Card>
            </CardDeck >

        </>
    );
}

export default About;