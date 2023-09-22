import React, { useState } from 'react'
import {BiSolidChevronRightCircle} from 'react-icons/bi';
import {BiSolidChevronLeftCircle} from 'react-icons/bi';


const ImageSlider = ({slider}) => {
    const [ currentIndex,setCurrentIndex ] = useState(0);
    const goFor = () => {
        const isLastSlide = currentIndex === slider.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }
    const goPrev = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slider.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }
  return (
    <div className='ImageSlider_main'>
        <div className='slide' 
            //  style={{background:`url(${slider[currentIndex].srcIm})`}}
        >
            <img className='ImageSlider_img'  src={slider[currentIndex].srcIm} alt=''/>
            <div className='slide_content'>
                <p className='name'>{slider[currentIndex].name}</p>
                <p className='job'>{slider[currentIndex].job}</p>
                <p className='title'>{slider[currentIndex].title}</p>
            </div>
            <div className='toggler'>
                <div className='' onClick={goPrev}><BiSolidChevronLeftCircle size={25}/></div>
                <div className='indecis' style={{backgroundColor:currentIndex === 0 &&'rgb(20, 138, 117)'}} onClick={() => setCurrentIndex(0)}></div>
                <div className='indecis' style={{backgroundColor:currentIndex === 1 &&'rgb(20, 138, 117)'}} onClick={() => setCurrentIndex(1)}></div>
                <div className='indecis' style={{backgroundColor:currentIndex === 2 &&'rgb(20, 138, 117)'}} onClick={() => setCurrentIndex(2)}></div>
                <div className='indecis' style={{backgroundColor:currentIndex === 3 &&'rgb(20, 138, 117)'}} onClick={() => setCurrentIndex(3)}></div>
                <div className='' onClick={goFor}><BiSolidChevronRightCircle size={25}/></div>
            </div>
        </div>
    </div>
  )
}

export default ImageSlider