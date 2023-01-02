import React from "react";
import SearchBox from "../../Components/SearchBox/SearchBox";
import "./Nav.scss";

const Nav = ({ getSearchTerm }) => {
  return (
    <div className="nav">
      <SearchBox getSearchTerm={getSearchTerm} />
    </div>
  );
};

export default Nav;
