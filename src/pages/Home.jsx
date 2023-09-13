import Nav from "../components/Nav";
import Header from "../components/Header";
import Statistic from "../components/Statistic";

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
    </>
  );
};

export default Home;
