import React, { useState, useRef, useEffect } from "react";
import { AiFillWarning } from "react-icons/ai";
import {
  Form,
  Wrapper,
  Title,
  SubtitleType,
  DropCard,
  Img,
  Text,
  Button,
  ErrorContainer,
} from "./DragAndDropStyles";
import bg from "../../images/picture.png";
import { Loading, Preview } from "../index";
import axios from "axios";

const baseURL = "http://localhost:8080";

const DragAndDrop = () => {
  const [files, setFiles] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSelected, setIsSelected] = useState(false);
  const [error, setError] = useState("");
  const inputRef = useRef();
  const [image, setImage] = useState(null);

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    let data = e.dataTransfer.files;

    //    let {name[0]} = data;

    const formData = new FormData();
    Array.from(data).map((elem) => {
      formData.append("file", elem);
      //name = elem
    });

    const { name } = data[0];
   // console.log(name);

    //Make the post request
    axios
      .post(`${baseURL}/upload/`, formData)
      .then((response) => {
        if (response.status === 200) {
          console.log("Image uploaded successfully");
          setFiles(data);
          //setGetImage(true);
        }
      })
      .catch((error) => {
        const { message } = error.response.data;
        setError(message);
        //console.log("error response", message);
      });

    //Get image data
    const interval = setInterval(() => {
      axios
        .get(`${baseURL}/file/${name}`)
        .then((response) => {
          if (response.status === 200) {
            const result = response.data[0];
            setImage(result);
            setIsLoading(false);
          }
        })
        .catch((error) => {
          const { message } = error.response.data;
          setError(message);
        });

      return clearInterval(interval);
    }, 3000);
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

      //console.log(files)
       setIsLoading(true);
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
          //const { message } = error.response.data;
          setFiles('')
          setError(error.response.data.message);
          //console.log(error.response.data.message);
        });

      console.log(name);
      const interval = setInterval(() => {
        //Get image data
        axios
          .get(`${baseURL}/file/${name}`)
          .then((response) => {
            if (response.status === 200) {
              const result = response.data[0];
              //console.log(result);
              setImage(result);
              setIsSelected(false);
              setIsLoading(false);
            }
          })
          .catch((error) => {
            const { message } = error.response.data;
            setError(message);
          });

        return clearInterval(interval);
      }, 3000);
    }
  }, [files, image]);

  useEffect(() => {
    const interval = setInterval(() => {
      setError("");
      return clearInterval(interval);
    }, 3000);
  }, [error]);

  if (files)
    return (
      <Wrapper> {isLoading ? <Loading /> : <Preview {...image} />}</Wrapper>
    );
  return (
    <>
      {!files && (
        <Wrapper>
          {error && (
            <ErrorContainer>
              <AiFillWarning size="2rem" /> {error}
            </ErrorContainer>
          )}

          <Form>
            <Title>Upload your image</Title>
            <SubtitleType>File should be Jpeg, Png,...</SubtitleType>
            <DropCard onDragOver={handleDragOver} onDrop={handleDrop}>
              <Img src={bg} />
              <Text>Drag & Drop your image here</Text>
            </DropCard>
            <Text>Or</Text>
            <input
             accept="image/png, image/jpeg, image/jpg"
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
