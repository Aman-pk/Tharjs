import React from 'react'
import { Link } from "react-router-dom";
import bag from "./Images/bike1.jpg"
import copy from "./Images/bike2.jpg"
import pen from "./Images/bike3.jpg"
import stand from "./Images/bike4.jpg"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img from './banner01.jpg';
// import Img1 from './prodct1.jpg';
// import Img2 from './prodct2.jpg';
import './Home.css';
import Footer from './Footer/Footer';
import UpdatedComponent from './Counter';

const Home = (props) => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div>
            <div style={{marginBottom: 20}}>            
                <Slider {...settings}>
                <div style={{width:"100%", position: "relative", height: "max-content"}}>
                    <img
                        src={Img}
                        style={{ width:"100%" }}
                        alt="no img"
                    />
                </div>
                <div style={{width: "100%", position: "relative", height: "max-content"}}>
                    <img
                        src={Img}
                        style={{ width:"100%" }}
                        alt="no img"
                    />
                </div>
            </Slider>
            </div>


            <div className="productContainer">
                <Link to="/product/bag"><img src={bag} height="200px" />
                <h5>Skybags</h5>
                <label>Rs.500</label>
                
                </Link>
                <div>
                    <button onClick={props.decrementCount}>-</button>
                    <label>{props.count}</label>
                    <button onClick={props.incrementCount}>+</button>
                </div>
                <Link to="/product/copy"><img src={copy} height="200px" />
                <h5>Classmate Notebook</h5>
                <p>Pack of 7</p>
                <label>Rs.1200</label>
                <div>
                    <button>-</button>
                    <label>0</label>
                    <button>+</button>
                </div>
                </Link>
                <Link to="/product/stand"><img src={stand} height="200px" />
                <h5>Stationary Stand</h5>
                <label>Rs.200</label>
                <div>
                    <button>-</button>
                    <label>0</label>
                    <button>+</button>
                </div>
                </Link>
                <Link to="/product/pen"><img src={pen} height="200px" />
                <h5>Cello Pen</h5>
                <label>Rs.10</label>
                <div>
                    <button>-</button>
                    <label>0</label>
                    <button>+</button>
                </div>
                </Link>
            </div>
            <Footer />


        </div>

    )
}

export default UpdatedComponent(Home)