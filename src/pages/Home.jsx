import Nav from "../components/Nav";
import Header from "../components/Header";
import Statistic from "../components/Statistic";
import StepIcon from "../components/StepIcon";
import { Element } from "react-scroll";
import CauseSection from "../components/CauseSection";

const Home = () => {
  return (
    <>
      <div className="bg">
        <Nav />
        <div className="header">
          <Header />
        </div>
      </div>
      <Element name="oCoChodziSection">
        <div className="stats">
          <div className="stats_box">
            <Statistic number="7" title="ZORGANIZOWANY ZBIÓREK" />
            <Statistic number="10" title="ODDANYCH WORKÓW" />
            <Statistic number="5" title="WSPARTYCH ORGANIZACJI" />
          </div>
        </div>
        <div className="steps">
          <div className="content-container">
            <h1 className="steps_header">Wystarczą 4 proste kroki</h1>
            <div className="decoration"></div>
          </div>
        </div>
        <div className="steps_icons_row">
          <StepIcon
            imgSrc="styles/images/Icon-1.svg"
            altText="Icon Description"
            header="Wybierz rzeczy"
            description="ubrania, zabawki, sprzęt i inne"
          />
          <StepIcon
            imgSrc="styles/images/Icon-2.svg"
            altText="Icon Description"
            header="Spakuj je"
            description="skorzystaj z worków na śmieci"
          />
          <StepIcon
            imgSrc="styles/images/Icon-3.svg"
            altText="Icon Description"
            header="Zdecyduj komu chcesz pomóc"
            description="wybierz zaufane miejsce"
          />
          <StepIcon
            imgSrc="styles/images/Icon-4.svg"
            altText="Icon Description"
            header="Zamów kuriera"
            description="kurier przyjedzie w dogodnym terminie"
          />
        </div>
        <div className="btn_center">
          <button>
            <span>ODDAJ RZECZY</span>
          </button>
        </div>
      </Element>
      <Element name="aboutSection">
        <div className="about">
          <div className="left">
            <h1>About</h1>
            <div className="decoration">
              <img src="styles\images\Decoration.svg" alt="" />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium minima, libero provident asperiores minus voluptate.
            </p>
          </div>
          <div className="right">
            <img src="styles/images/People.jpg" alt="About Image" />
          </div>
        </div>
      </Element>
      <Element name="organizacjeSection">
        <CauseSection />
      </Element>
      <Element name="contactSection">
        <div className="contact-section">
          <h2>Skontaktuj się z nami</h2>
          <div className="contact-decoration">
            <img src="styles/images/Decoration.svg" alt="" />
          </div>
          <div className="contact-form">
            <label>
              Name
              <input type="text" name="name" />
            </label>
            <label>
              Email
              <input type="email" name="email" />
            </label>
            <textarea name="message" placeholder="Your message..."></textarea>
            <button>Contact Me</button>
          </div>
        </div>
      </Element>
    </>
  );
};

export default Home;
