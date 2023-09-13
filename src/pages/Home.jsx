import Nav from "../components/Nav";
import Header from "../components/Header";
import Statistic from "../components/Statistic";
import StepIcon from "../components/StepIcon";

const Home = () => {
  return (
    <>
      <div className="bg">
        <div className="bg_image"></div>
        <Nav />
        <div className="header">
          <Header />
        </div>
      </div>
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
      <div className="about">
        <div className="left">
          <h1>About</h1>
          <div className="decoration">
            <img src="styles\images\Decoration.svg" alt="" />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            lacinia odio vitae vestibulum.
          </p>
        </div>
        <div className="right">
          <img src="styles/images/People.jpg" alt="About Image" />
        </div>
      </div>
    </>
  );
};

export default Home;
