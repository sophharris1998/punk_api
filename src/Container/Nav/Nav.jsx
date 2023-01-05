import React from "react";
import SearchBox from "../../Components/SearchBox/SearchBox";
import Checkbox from "../../Components/CheckBox/CheckBox";
import "./Nav.scss";

const Nav = ({ getSearchTerm, getCheckedBox }) => {
  return (
    <div className="nav">
      <SearchBox getSearchTerm={getSearchTerm} />
      <label> Abv bigger than 6% </label>
      <Checkbox getCheckedBox={getCheckedBox} />
      <label> </label>
    </div>
  );
};

export default Nav;
