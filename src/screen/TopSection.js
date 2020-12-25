import React, { useState } from "react";
import DropdownCreator from "../DropdownCreator";
import { language, subject, standard, chapter, topic } from "../resource";
import { baseUrl } from "../../src/baseurl";
const TopSection = ({ setData }) => {
  const [lang, setLang] = useState("Hindi");
  const [sub, setSub] = useState("Math");
  const [stand, setStand] = useState("1");
  const [chap, setChap] = useState("chap1");
  const [top, setTop] = useState("topic1");

  const fetchData = async () => {
    const obj = {
      language: lang,
      subject: sub,
      class: stand,
      chapter: chap,
      topic: top
    };
    try {
      const response = await fetch(`${baseUrl}/`, {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      });
      const resJson = response.json();
      setData(resJson);
    } catch (er) {
      console.log("error from server", er);
    }
  };

  return (
    <div>
      <div className="top_section">
        <h2> Select Content </h2>
      </div>
      <div className="dropdown_container">
        <div className="drop_wrapper">
          <span> language </span>
          <DropdownCreator data={language} select={setLang} />
        </div>

        <div className="drop_wrapper">
          <span> Subject </span>
          <DropdownCreator data={subject} select={setSub} />
        </div>

        <div className="drop_wrapper">
          <span> Class </span>
          <DropdownCreator data={standard} select={setStand} />
        </div>

        <div className="drop_wrapper">
          <span> Chapter </span>
          <DropdownCreator data={chapter} select={setChap} />
        </div>

        <div className="drop_wrapper">
          <span> Topic </span>
          <DropdownCreator data={topic} select={setTop} />
        </div>
      </div>
      <div>
        <button className="button" onClick={fetchData}>
          Go
        </button>
      </div>
    </div>
  );
};

export default TopSection;
