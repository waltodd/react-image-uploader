import React,{useState} from "react";
import { Wrapper,BtnCopy, Title,CopiedInput, Form, Image, ClipBoardContainer } from "./PreviewStyles";
import copy from "copy-to-clipboard";

import correct from "../../images/correct.png";

const Preview = (image) => {
  const { name, url } = image;

  const [copyText, setCopyText] = useState(url);
  const [isCopied, setIsCopied] = useState(false);

 const handleCopyText = (e) =>{
  setCopyText(e.target.value);
 }
 const handleCopyToClipboard = () =>{
  copyText.substring(0,3)
  copy(copyText);
  setIsCopied(true);
 }
const truncate= (str) =>{
  return str.length > 45 ? str.substring(0, 45) + "..." : str;
}

  return (
    <Wrapper>
      <Form>
      <img style={{width:'35px', paddingTop:'2rem'}} src={correct} alt={name} />
      <Title>Uploaded Successfully!</Title>
      <Image src={url} alt={name} />
      <ClipBoardContainer>
        <CopiedInput type='text' value={truncate(copyText)} onChange={handleCopyText} />
        <BtnCopy onClick={handleCopyToClipboard}>{isCopied ? 'Copied':'Copy'}</BtnCopy>
      </ClipBoardContainer>
      </Form>

    </Wrapper>
  );
};

export default Preview;
