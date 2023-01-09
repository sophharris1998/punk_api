import React from "react";
import SearchBox from "../../Components/SearchBox/SearchBox";
import Checkbox from "../../Components/CheckBox/CheckBox";
import "./Nav.scss";

const Nav = ({
  getSearchTerm,
  getAbvCheckedBox,
  getClassicRangeCheckedBox,
  getPhCheckedBox,
}) => {
  return (
    <div className="nav">
      <img
        className="brewDogLogo"
        src="https://presshub.brewdog.com/images/cms/large/1440777209BREWDOGLOGO.jpg"
        alt=""
      />
      <div className="navContent">
        <SearchBox getSearchTerm={getSearchTerm} />
        <label> ABV higher than 6% </label>
        <Checkbox getCheckedBox={getAbvCheckedBox} />
        <label> Classic Range </label>
        <Checkbox getCheckedBox={getClassicRangeCheckedBox} />
        <label> PH lower than 4 </label>
        <Checkbox getCheckedBox={getPhCheckedBox} />
      </div>
    </div>
  );
};

export default Nav;
