import React, { useState, useEffect } from "react";
import { Wrapper, Title } from "./PreviewStyles";

const Preview = (image) => {
  //  const [preview, setPreview] = useState(true);

  //  const interval = setInterval(() => {
  //     if(image){
  //       setPreview(false)
  //     }
  //     return clearInterval(interval);

  //  }, 5000)
  const { name, url } = image;

  return (
    <Wrapper>
      
      <img src={url} alt={name} />

    </Wrapper>
  );
};

export default Preview;
