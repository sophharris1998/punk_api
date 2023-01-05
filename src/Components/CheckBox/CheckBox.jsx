import React from "react";

const CheckBox = ({ getCheckedBox }) => {
  return (
    <div>
      <input onInput={getCheckedBox} type="checkbox" id="ABV" />
    </div>
  );
};

export default CheckBox;
