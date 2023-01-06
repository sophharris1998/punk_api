import React from "react";
import SearchBox from "../../Components/SearchBox/SearchBox";
import Checkbox from "../../Components/CheckBox/CheckBox";
import "./Nav.scss";

const Nav = ({
  getSearchTerm,
  getAbvCheckedBox,
  getClassicRangeCheckedBox,
}) => {
  return (
    <div className="nav">
      <SearchBox getSearchTerm={getSearchTerm} />
      <label> abv higher than 6% </label>
      <Checkbox getCheckedBox={getAbvCheckedBox} />
      <label> Classic Range </label>
      <Checkbox getCheckedBox={getClassicRangeCheckedBox} />
    </div>
  );
};

export default Nav;
