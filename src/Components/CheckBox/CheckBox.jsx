import React from "react";

const CheckBox = ({ getCheckedBox }) => {
  return (
    <div>
      <input onInput={getCheckedBox} type="checkbox" />
    </div>
  );
};

export default CheckBox;
