import { useState } from 'react';
import { useRef } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const Home = ({ routePath,setRoutePath,imageSrc,setImageSrc,activeText,setActiveText,setImages }) => {

  const fileRef = useRef(null);
  const navigate = useNavigate();

  setRoutePath("home");

  const changePhoto = () => {
    const file = fileRef.current.files[0];

    const reader = new FileReader();

    reader.addEventListener("load",() => {
      setImageSrc(reader.result);
      setImages(images => [reader.result,...images]);
      setActiveText(true);
    })

    reader.readAsDataURL(file);
  }

  return (
    <div className='container'>
        <img src={imageSrc} className="image" alt=""/>
      <button></button>
      <div className="inputs">
        <div className="file">
          <input type="file" ref={fileRef} onChange={changePhoto} className='file'/>
          <button className='file-btn'>Fotoğraf seç</button>
        </div>
        <button className='open-cam' onClick={() => {
          navigate("/camera");
          setRoutePath("camera");
          }}>Camerayı aç</button>

      </div>
    </div>
  )
}

export default Home;