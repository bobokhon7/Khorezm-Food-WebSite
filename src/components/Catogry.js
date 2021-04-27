import React from "react";

const Catogry = ({ filterItems }) => {
  return (
    <div className="btn-container">
      <button className="filter-btn" onClick={() => filterItems("all")}>
        All
      </button>
      <button className="filter-btn" onClick={() => filterItems("breakfast")}>
        BreakFast
      </button>
      <button className="filter-btn" onClick={() => filterItems("lunch")}>
        Lunch
      </button>
      <button className="filter-btn" onClick={() => filterItems("shakes")}>
        Drinks
      </button>
    </div>
  );
};

export default Catogry;
