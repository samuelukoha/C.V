import "./Home.css";
import { SliderData } from './SliderData';
import { useState } from "react";
import Footer from '../Footer/Footer';
import {Link} from 'react-router-dom';

// IMAGES
import frame1 from "./Images/01.svg";
import frame2 from "./Images/02.svg";
import frame3 from "./Images/03.svg";
import frame4 from "./Images/04.svg";

// ICONS
import { FaRegComments, FaWallet } from 'react-icons/fa';
import { BiVideo } from 'react-icons/bi';  
import { ImQuotesLeft } from 'react-icons/im';
import { IoIosArrowDropright } from 'react-icons/io';
// import Navbar from '../Navbar/Navbar';


const Home = ({ slides }) => {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  console.log(current)
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className="home">
      <header>
        <nav>
          <h2>SWAPPED!</h2>
        
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Features</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">How it works</a>
            </li>

            <button> Sign In </button>
          </ul>
        </nav>
        <div className="hamburger" onClick={() => setOpen(!open)}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
        </div>
        <div className="header-texts">
          <h1>Give items away, Get Item you want</h1>
          <p>
            Whatever it is, it can get <span>swapped!</span>
          </p>
          <button> Start Swapping </button>
        </div>
      </header>
      <div className="about-container">



        <div className="feature-container">
          <div className="title">
            <h3>features</h3>
          </div>

          <div className="feature-boxes">
            <div className="box">
              <div className="left">
                <i><FaRegComments /></i>  
                <p>In-App Chat System</p>
              </div>
              <div className="right">
                <div className="center-text">
                  <p>
                    Have a chat with other users to show interest in a product, 
                    schedule or plan delivery of items, bargain price; all for FREE!
                  </p>
                </div>
              </div>
            </div>

            <div className="box">
              <div className="left">
                <i><BiVideo /></i>
                <p>In-App Video Call</p>
              </div>
              <div className="right">
                <div className="center-text">
                  <p>
                    Not sure of the quality or authencity product? 
                    Make a video call to see the product; also for FREE!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="works-container">
        <div className="title">
         <h2>how it works</h2>
        </div>
        <div className="works-bag">
          <div className="item-img-right">
            <h2>01</h2>
            <div className="content">
              <p> Sign up on the website to begin this journey</p>

              <img src={frame1} alt="xyz" />
            </div>
          </div>
          <div className="item-img-left">
            <h2>02</h2>
            <div className="content">
              <img src={frame2} alt="xyz" />
              <p>
                Upload photos of the item you want to swap, giving description
                about the item, the item you need in return and cash equivalent of
                the item.
              </p>
            </div>
          </div>
          <div className="item-img-right">
            <h2>03</h2>
            <div className="content">
              <p>
                Search for items you like or need, show interest for a swap and
                trade by contacting the owner of the item by reaching an
                agreement.
              </p>

              <img src={frame3} alt="xyz" />
            </div>
          </div>
          <div className="item-img-left">
            <h2>04</h2>
            <div className="content">
              <img src={frame4} alt="xyz" />

              <p>
                Based on your agreement, you both meet at a preferred location to
                exchange items or get it delivered to you.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="testimonials-container">
        <div className="top-box"></div>
        <div className="icon-box">
          <i><ImQuotesLeft /></i> 
        </div>
        <div className="left-box"></div>
        <div className="heading">
          <h2>What Our Users Are Saying</h2>
        </div>
        <section className="slider">
          <i><IoIosArrowDropright onClick={nextSlide}/></i>
          { SliderData.map((slide, index) => {
            return (
              <div className={ index === current ? 'slide active' : 'slide'} key={index}>
                {index === current && (<img src={slide.image} alt="items for sale" className="image"/>)}
              </div>
            )
          })}
        </section>
        < Footer />
      </div>
    </div>
  );
};

export default Home;
