import React, { useState, useEffect } from "react";
import ElementContainer from "../components/ElementContainer";
import InitialPage from "../components/IntialPage";
const Body = ({ data }) => {
  const [res, setRes] = useState(data);
  if (res == null) {
    return <InitialPage />;
  }

  return <div className="body">{}</div>;
};

export default Body;
