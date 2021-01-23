
// import Navbar from 'react-bootstrap/Navbar';
import Menu from '../components/Menu'
import Carousel from 'react-bootstrap/Carousel'

function Home() {

    return (

        <div>

            {/* <h2>
                Weffle
            </h2> */}
            <p>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="tickets.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Welcome to weffle</h3>
                            <p>NLogin or Sign up, to host raffles or participate in live raffles.</p>
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
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="holder.js/800x400?text=Third slide&bg=20232a"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Winners</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </p>

