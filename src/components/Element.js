// this will get the dat to create individual block
import React from "react";

const Element = ({ img, content, file }) => {
  return (
    <div className="individual_element">
      <div className="img_block">image block</div>
      <div className="content_block">content block</div>
      <div className="file_folder">file folder block</div>
    </div>
  );
};

export default Element;
