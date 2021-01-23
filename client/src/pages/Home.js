
// import Navbar from 'react-bootstrap/Navbar';
// import Menu from '../components/Menu';
import Carousel from 'react-bootstrap/Carousel';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

import './home.css';

function Home() {

    return (
        <div>
            <div className="container">
                <div className="Section-1">
                    <div className="ticket">
                        <div className="ticket__content">
                            <Form inline>
                                <h5>
                                    Search for Game Codes Here
                                </h5>
                                <FormControl type="text" placeholder="Search Raffles" className="mr-sm-2" />
                                <Button variant="outline-dark">Search</Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
            {/* <h2>
                Weffle
            </h2> */}
            <p>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="home.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Welcome to weffle</h3>
                            <p>Login or Sign up, to host raffles or participate in live raffles.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="about2.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>About Information</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </p>
        </div >
    );
}

export default Home;
