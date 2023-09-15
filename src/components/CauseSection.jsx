import React, { useState } from "react";
import data from "../services/data";

const CauseSection = () => {
  const [currentSelection, setCurrentSelection] = useState("fundacje");
  const [currentPage, setCurrentPage] = useState(0);
  const maxItemsPerPage = 3;

  const handleClick = (selection) => {
    setCurrentSelection(selection);
    setCurrentPage(0);
  };

  const renderColumns = () => {
    const startIndex = currentPage * maxItemsPerPage;
    const endIndex = startIndex + maxItemsPerPage;
    return data[0][currentSelection]
      .slice(startIndex, endIndex)
      .map((item, index) => (
        <div key={index} className="cause-segment">
          <div className="cause-left">
            <h3>{item.title}</h3>
            <p>{item.subtitle}</p>
          </div>
          <div className="cause-right">
            <p>{item.desc}</p>
          </div>
        </div>
      ));
  };

  const numberOfPages = Math.ceil(
    data[0][currentSelection].length / maxItemsPerPage
  );

  return (
    <div className="cause">
      <h2>Komu pomagamy?</h2>
      <div className="decoration">
        <img src="styles\images\Decoration.svg" alt="" />
      </div>
      <div className="buttons">
        <button onClick={() => handleClick("fundacje")}>Fundacjom</button>
        <button onClick={() => handleClick("organizacje")}>
          Organizacjom pozarządowym
        </button>
        <button onClick={() => handleClick("lokalne")}>
          Lokalnym zbiórkom
        </button>
      </div>
      <p>
        W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi
        współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego
        potrzebują.
      </p>
      <div className="cause-columns">{renderColumns()}</div>
      <div className="cause-button-group">
        {Array.from({ length: numberOfPages }).map((entry, index) => (
          <button key={index} onClick={() => setCurrentPage(index)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CauseSection;
