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
        <div className="flexRow">
          <Checkbox getCheckedBox={getAbvCheckedBox} />
          <label className="labelNav"> ABV higher than 6% </label>
        </div>
        <div className="flexRow">
          <Checkbox getCheckedBox={getClassicRangeCheckedBox} />
          <label className="labelNav"> Classic Range </label>
        </div>
        <div className="flexRow">
          <Checkbox getCheckedBox={getPhCheckedBox} />
          <label className="labelNav"> PH lower than 4 </label>
        </div>
      </div>
    </div>
  );
};

export default Nav;
