import React, { useState, useRef, useEffect } from "react";
import {
  Form,
  Wrapper,
  Title,
  SubtitleType,
  DropCard,
  Img,
  Text,
  Button,
} from "./DragAndDropStyles";
import bg from "../../images/picture.png";
import { Loading, Preview } from "../index";
import axios from "axios";

const baseURL = "http://localhost:8080";

const DragAndDrop = () => {
  const [files, setFiles] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSelected, setIsSelected] = useState(false);
  const inputRef = useRef();
  const [image, setImage] = useState();

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    let data = e.dataTransfer.files;
    setFiles(data);

    const formData = new FormData();
    Array.from(e.dataTransfer.files).map((elem) => {
      formData.append("file", elem);
    });

    //Make the post request
    axios
      .post(`${baseURL}/upload/`, formData)
      .then((response) => {
        if (response.status === 200) {
          const interval = setInterval(() => {
            setIsLoading(false);
            return clearInterval(interval);
          }, 5000);

          console.log("Image uploaded successfully");
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleClick = (e) => {
    
    if (!isSelected) {
      
      setIsSelected(true);
    }
    inputRef.current.click();
  };
  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  useEffect(() => {
    if (isSelected === true) {

      let name ='';
      const formData = new FormData();
      Array.from(files).map((elem) => {
        formData.append("file", elem);
        name = elem.name;

      });

      //Make the post request
      axios
        .post(`${baseURL}/upload/`, formData)
        .then((response) => {
          if (response.status === 200) {
            const interval = setInterval(() => {
              setIsLoading(false);
              return clearInterval(interval);
            }, 1000);

            console.log("Image uploaded successfully");
          }
        })
        .catch((error) => {
          console.log(error.message);
        });

      const interval = setInterval(() => {
        console.log(name)
        //Get image data
        axios
          .get(`${baseURL}/file/${name}`)
          .then((response) => {
            if (response.status === 200) {
              console.log(response.data);
            }
          })
          .catch((error) => {
            console.log(error.message);
          });
          return clearInterval(interval);
      }, 5000);
    }
  }, [files]);

  if (files)
    return (
      <Wrapper>
        {isLoading ? <Loading /> : <Preview />}
        {/* {Array.from(files).map((file, idx) => (
          <h1 key={idx}>{file.name}</h1>
        ))} */}
      </Wrapper>
    );
  return (
    <>
      {!files && (
        <Wrapper>
          <Form>
            <Title>Upload your image</Title>
            <SubtitleType>File should be Jpeg, Png,...</SubtitleType>
            <DropCard onDragOver={handleDragOver} onDrop={handleDrop}>
              <Img src={bg} />
              <Text>Drag & Drop your image here</Text>
            </DropCard>
            <Text>Or</Text>
            <input
              ref={inputRef}
              hidden
              type="file"
              onChange={(e) => setFiles(e.target.files)}
            />
            <Button onClick={handleClick}>Choose a file</Button>
          </Form>
        </Wrapper>
      )}
    </>
  );
};

export default DragAndDrop;
