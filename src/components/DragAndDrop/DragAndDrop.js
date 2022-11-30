import React, {useState, useRef, useEffect} from 'react'
import {Form, Wrapper, Title, SubtitleType, DropCard, Img,Text, Button} from './DragAndDropStyles'
import bg from '../../images/dnd.png'
import {Loading} from '../index'




const DragAndDrop = () => {
  const [file, setFile] = useState(null);
  const inputRef = useRef();

  const handleDrop = (e) =>{
    e.preventDefault();
    setFile(e.dataTransfer.files)
  }

  const handleDragOver = (e) =>{
    e.preventDefault();
  }

  if(file) return (
    <Wrapper>
      <Loading />
    </Wrapper>
  )
  return (
    <>
    {
      !file && (
        <Wrapper>
      <Form>
        <Title>
        Upload your image    
        </Title>
        <SubtitleType>
        File should be Jpeg, Png,...
        </SubtitleType>
        <DropCard
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        >
         <Img src={bg} />
         <Text>Drag & Drop your image here</Text>
        </DropCard>
        <Text>Or</Text>
        <input ref={inputRef} hidden type='file' onChange={(e)=>setFile(e.target.files)} />
        <Button 
        onClick={()=> inputRef.current.click()}
        >Choose a file
        </Button>
      </Form>
    </Wrapper>
      )
    }</>
  )
}

export default DragAndDrop