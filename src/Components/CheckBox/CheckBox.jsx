import React from "react";

const CheckBox = ({ getCheckedBox }) => {
  return (
    <div>
      <input onInput={getCheckedBox} type="checkbox" id="ABV" />
      <input onInput={getCheckedBox} type="checkbox" id="classicRange" />
    </div>
  );
};

export default CheckBox;
