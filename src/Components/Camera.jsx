import React from 'react';
import { useEffect,useRef,useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Camera = ({ setRoutePath,setImageSrc,setActiveText,setImages }) => {

  const video = useRef(null);
  const canvas = useRef(null);
  const navigate = useNavigate();

  setRoutePath("camera");

    useEffect(() => {
      canvas.current.width = window.innerWidth;
      canvas.current.height = window.innerHeight;

      let isVideo = true;

      navigator.mediaDevices.getUserMedia({ video:{} })
        .then(stream => {
           video.current.srcObject = stream;
        })
        .catch(err => console.log(err));

    },[]);


    const takePhoto = () => {
      const ctx = canvas.current.getContext("2d");
      setTimeout(() => {
        setRoutePath("home");
        ctx.drawImage(video.current,0,0,canvas.current.width,canvas.current.height);
        const imageData = canvas.current.toDataURL("image/jpeg");
        setImageSrc(imageData);
        setImages(images => [imageData,...images]);
        setActiveText(true);
        navigate("/");
      },100);
    }

  return (
    <div className='camera-container'>
        <video ref={video} autoPlay muted className='video'></video>
        <canvas ref={canvas}></canvas>
        <i className='fas fa-camera' onClick={takePhoto}></i>
    </div>
  )
}


export default Camera;