import React from "react";

const DropdownCreator = ({ data, select }) => {
  return (
    <select onChange={(e) => select(e.target.value)}>
      {data.map((item) => (
        <option value={item}> {item} </option>
      ))}
    </select>
  );
};

DropdownCreator.defaultProps = {
  data: ["drop1", "drop2"]
};

export default DropdownCreator;
