import React from 'react'
import Logo from '../images/Logo.svg';
const HomePage = () => {
  return (
    <div className='main_container'>
      <div className='login_page'>
        <img src={Logo} alt='logo' className='Login_logo' style={{marginTop:'20px'}}/>
        <div style={{padding:'20px',backgroundColor:'rgba(199, 199, 199,80%)',display:'flex',flexDirection:'column',alignItems:'center',borderRadius:'20px',width:'80%'}}>
          <h2 className='home_label' style={{color:'rgb(64,91,131)'}}>
            انت الآن في موقع الآدمن
          </h2>
        </div>
      </div>
    </div>
  )
}

export default HomePage