import React from 'react'
import First from '../Components/first_section/First';
import Second from '../Components/second_section/Second';
import Third from '../Components/third_section/Third';
import Fourth from '../Components/fourth_section/Fourth';
import Fifth from '../Components/fifth_section/Fifth';
import Sixth from '../Components/sixth_section/Sixth';

const HomePage = () => {
  return (
    <div className='main_container_login'>
      <First/>
      <Second/>
      <Third/>
      <Fourth/>
      <Fifth/>
      <Sixth/>
    </div>
  )
}

export default HomePage