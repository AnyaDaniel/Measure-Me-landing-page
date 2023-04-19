import { useState } from "react";
import React from "react";
import './testimonial.scss'
import { Avatar, backdropClasses } from '@mui/material'
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';





const Log_carousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? isLastSlide : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  

  return (
    <div className='sliderStyles'>
      
      <div className='dotsContainerStyles'>
        {slides.map((slide, slideIndex) => (
          <Avatar
            alt="Profile picture"
            key={slideIndex} 
            src={slides[slideIndex].url}
            sx={{ width: 64, height: 64 }}
            
            onClick={() => goToSlide(slideIndex)}
            className={currentIndex === slideIndex? "dot active" : "dot"}
          />
        ))}
      </div>
      <div className='slideStylesWidthBackground'>
        {/* <div className="imgcar">{slides[currentIndex].url}</div> */}
        <Avatar
            alt="Profile picture"
            src={slides[currentIndex].url}
            sx={{ width: 64, height: 64 }}
            
            className="dot visible active"
          />
        <h3 className="title">{slides[currentIndex].title}</h3><br />
        <p className='msg' >{slides[currentIndex].message}</p>
        <div className="df" style={{justifyContent: 'flex-start'}} >
          <StarRateRoundedIcon className="star"/>
          <StarRateRoundedIcon className="star"/>
          <StarRateRoundedIcon className="star"/>
          <StarRateRoundedIcon className="star"/>
          <StarBorderRoundedIcon className='star'/>
        </div><br />
        <div className="authnext df">
          <h4 className="author">{slides[currentIndex].author}</h4>
          <div className="df arrows">
            {currentIndex === 0 ? 
              <div className="blank">
                  {/* ❱ */}
                  ❰
              </div>
            :
              <div onClick={goToPrevious} className='skipArrowStyle'>
                  {/* ❱ */}
                  ❰
              </div>
            }
            {currentIndex === 5 ? 
              <div className='blank' style={{marginLeft: '150%'}} >
                  ❱
              </div>
            :
              <div onClick={goToNext} className='rightArrowStyles'>
                  ❱
              </div>
            }
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Log_carousel;