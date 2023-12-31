const Header = () => {
  return (
    <div className="header_container">
      <div className="landing_img"></div>
      <div className="content_container">
        <div className="text-and-buttons">
          <h1 className="title">
            <span>Zacznij pomagać!</span>
            <br />
            <span>Oddaj niechciane rzeczy w zaufane ręce.</span>
          </h1>
          <img
            src="../../styles/images/Decoration.svg"
            alt="Decoration"
            className="decoration-img"
          />
          <div className="buttons">
            <button>
              <span>
                ODDAJ
                <br />
                RZECZY
              </span>
            </button>
            <button>
              <span>ZORGANIZUJ ZBIÓRKĘ</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
