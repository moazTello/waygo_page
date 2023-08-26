import React,{ useContext, useState } from 'react'
import './Navstyle.css';
import {
     AiOutlineClose} from 'react-icons/ai';
import { BiMenu } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import useWindowSize from '../../hooks/useWindowSize';
import DataContext from '../../context/Datacontext';

const Navbar = () => {
    const { logout } = useContext(DataContext);
    const { width } = useWindowSize();
    const [ clicked , setClicked ] = useState(false);
    const handleClick = () => {
        if(width<=900){
            setClicked(!clicked);
        }
    }

    
  return (
    <div className='nav_main'>
       <nav className='nav_2'>
            <div className='menu-icon' onClick={handleClick}>
                    <i className='bar'>
                        {clicked ? <AiOutlineClose/> : <BiMenu/>}
                    </i>
            </div>
        <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
            <Link to='/'  className='nav-links' onClick={() => {handleClick(); logout();}}>
                <p>تسجيل الخروج</p> 
            </Link>
            <Link to='/employmentorders'  className='nav-links' onClick={() => {handleClick();}}>
                <p>طلبات التوظيف</p> 
            </Link>
            <Link to='/financial'  className='nav-links' onClick={() => {handleClick();}}>
                <p>مالية</p>
            </Link>
            <Link to='/addnewoffer'className='nav-links' onClick={() => {handleClick();}}>
                <p>اضافة عروض</p> 
            </Link>
            <Link to='/currentoffers'  className='nav-links' onClick={() => {handleClick();}}>
                <p>العروض الحالية</p> 
            </Link>
            <Link to='/showallcom'  className='nav-links' onClick={() => {handleClick();}}>
                <p>الشركات المشتركة</p>
            </Link>
            <Link to='/addnewcom'className='nav-links' onClick={() => {handleClick();}}>
                <p>اضافة شركة سفر</p> 
            </Link>






        </ul>
       </nav> 
    </div>
  )
}

export default Navbar