import React from "react";

const FilterButton = ({ filterByName, filterByNumber }) => {
  return (
    <div>
      <button onClick={filterByName}>Filter by Name</button>
      <button onClick={filterByNumber}>Filter by Number</button>
    </div>
  );
};

export default FilterButton;
