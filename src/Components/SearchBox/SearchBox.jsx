import React from "react";
import "./SearchBox.scss";

const Searchbox = ({ getSearchTerm }) => {
  return (
    <div>
      <input onInput={getSearchTerm} type="text" placeholder="Search.." />
    </div>
  );
};

export default Searchbox;
