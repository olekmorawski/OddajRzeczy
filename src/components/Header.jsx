const Header = () => {
  return (
    <div className="text-and-buttons">
      <h1>
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
          <span>ODDAJ RZECZY</span>
        </button>
        <button>
          <span>ZORGANIZUJ ZBIÓRKĘ</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
