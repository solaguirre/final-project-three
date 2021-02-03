
import './home.css';
import waffle from '../assets/burntwaffle.jpeg';
import sol from '../assets/sol.jpeg';
import lilli from '../assets/lilli.jpeg';
import rhiley from '../assets/rhiley.jpeg';
// import Jumbotron from 'react-bootstrap/Jumbotron';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
// import { Container } from 'react-bootstrap';
import Figure from 'react-bootstrap/Figure';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
// import Row from 'react-bootstrap/Row';

function About() {
    return (
        <>
            <Container fluid>
                <Container>
                    <img className="pics2" src={waffle} alt="A round Waffle."></img>
                    <h1>Need Help?</h1>
                    <h3>Contact Us</h3>
                    < a href="mailto:help@weffle.me">help@weffle.me</a>
                    <p>
                        We're happy to assist. Contact us contributors below.
                    </p>
                </Container>

                <CardDeck className="cards">
                    <Card className="card">
                        <Col xs={6} md={4}>
                            <Figure>
                                <Col>
                                    <img className="pics" src={sol} alt="headshot of sol"></img>
                                </Col>
                                <Figure.Caption>
                                    Junior Full-Stack Developer
                                </Figure.Caption>
                            </Figure>
                        </Col>
                        <Card.Title>Marisol Aguirre</Card.Title>
                        <Card.Text>
                            Contact me at the links below.
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
                                <Col>
                                    <img className="pics" src={lilli} alt="headshot of Lilli"></img>
                                </Col>
                                <Figure.Caption>
                                    Junior Full-Stack Developer
                                </Figure.Caption>
                            </Figure>
                        </Col>
                        <Card.Title>Lillian Paris</Card.Title>
                        <Card.Text>
                            Contact me at the links below.
                        </Card.Text>
                        <Card.Body>
                            <Card.Link href="https://github.com/lillianparis">Github</Card.Link>
                            <Card.Link href="https://www.linkedin.com/in/lillian-paris-7340401b4/">LinkedIn</Card.Link>
                            <Card.Link href="mailto:lillian.paris529@gmail.com">Email</Card.Link>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Col xs={6} md={4}>
                            <Figure>
                                <Col>
                                    <img className="pics" src={rhiley} alt="headshot of Rhiley"></img>
                                </Col>
                                <Figure.Caption>
                                    Junior Full-Stack Developer
                                </Figure.Caption>
                            </Figure>
                        </Col>
                        <Card.Title>Rhiley Southam</Card.Title>
                        <Card.Text>
                            Contact me at the links below.
                        </Card.Text>
                        <Card.Body>
                            <Card.Link href="https://github.com/orhiley90">Github</Card.Link>
                            <Card.Link href="https://www.linkedin.com/in/rhiley-southam-444518b8/">LinkedIn</Card.Link>
                            <Card.Link href="mailto:orhiley90@yahoo.com">Email</Card.Link>
                        </Card.Body>
                    </Card>
                </CardDeck >
            </Container>

        </>
    );
}

export default About;