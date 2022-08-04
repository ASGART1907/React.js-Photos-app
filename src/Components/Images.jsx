import React from 'react';

const Images = ({ images,setImages }) => {
  return (
    <div className="wrapper">
      {
         images.length <= 0 ? <div className='null'>Şimdilik Boş...</div> :
      <div className='images-container'>
        {
         images?.map((item,index) => (
             <div className='image-container' key={index}>
              <img src={item} alt={item} />
             </div>
          ))
        }
      </div>
     }
    </div>
    
  )
}

export default Images;