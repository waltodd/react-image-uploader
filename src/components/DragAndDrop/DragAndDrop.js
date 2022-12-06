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
  const [getImage, setGetImage] = useState(false);
  const inputRef = useRef();
  const [image, setImage] = useState(null);

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    let data = e.dataTransfer.files;
    setFiles(data);

    //    let {name[0]} = data;

    const formData = new FormData();
    Array.from(data).map((elem) => {
      formData.append("file", elem);
      //name = elem
    });

    const { name } = data[0];
    console.log(name);

    //Make the post request
    axios
      .post(`${baseURL}/upload/`, formData)
      .then((response) => {
        if (response.status === 200) {
          console.log("Image uploaded successfully");

          setGetImage(true);
        }
      })
      .catch((error) => {
        console.log(error.message);
      });

    //Get image data
    axios
      .get(`${baseURL}/file/${name}`)
      .then((response) => {
        if (response.status === 200) {
          const result = response.data[0];

          const interval = setInterval(() => {
            setImage(result);
            setIsLoading(false);
            return clearInterval(interval);
          }, 3000);
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
    if (isSelected) {
      let name = "";
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
            //setIsLoading(false);
            console.log("Image uploaded successfully");
          }
        })
        .catch((error) => {
          console.log(error.message);
        });

      console.log(name);
      //Get image data
      axios
        .get(`${baseURL}/file/${name}`)
        .then((response) => {
          if (response.status === 200) {
            const result = response.data[0];
            
            const interval = setInterval(() => {
              console.log(result);
            setImage(result);
              setIsSelected(false);
              setIsLoading(false);

              return clearInterval(interval);
            }, 3000);
          }
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  }, [files, image]);

  if (files)
    return (
      <Wrapper>{isLoading ? <Loading /> : <Preview {...image} />}</Wrapper>
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
