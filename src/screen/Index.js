import React, { useState } from "react";
import TopLeft from "./TopLeft";
import TopSection from "./TopSection";
import Sidebar from "./Sidebar";
import Body from "./Body";
import TopBar from "./TopBar";
import "./layout.css";

const Index = () => {
  const [data, setData] = useState(null);
  return (
    <>
      <div className="wrapper">
        <div className="top_bar_container">
          <TopBar />
        </div>
        <div className="container">
          <div className="second_row">
            <div className="top_left_container">
              <TopLeft />
            </div>
            <div className="top_section_container">
              <TopSection setData={setData} />
            </div>
          </div>
          <div className="third_row">
            <div className="sidebar_container">
              <Sidebar />
            </div>
            <div className="body_container">
              <Body data={data} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
