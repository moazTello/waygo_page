import React,{ useContext, useState } from 'react'
import './Navstyle.css';
import { AiOutlineClose,AiOutlineGlobal} from 'react-icons/ai';
import { BiMenu } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import useWindowSize from '../../hooks/useWindowSize';
import DataContext from '../../context/Datacontext';
import { useTranslation } from 'react-i18next';
import logo from '../../images/Nav_logo.svg';
const Navbar = () => {
    const {lang,setLang} = useContext(DataContext);
    
    const [t,i18n] = useTranslation("global");
    const langchange = () => {
        if(lang){
            i18n.changeLanguage('en')
        }
        else{
            i18n.changeLanguage('ar')
        }
    }
    const { width } = useWindowSize();
    const [ clicked , setClicked ] = useState(false);
    const handleClick = () => {
        if(width<=1050){
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
            {width > 1050 &&  <img src={logo} style={{height:'80px',marginLeft:'80px'}} alt=''/>}
        <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
            <Link to='/waygo_page'  className='nav-links' onClick={() => {handleClick();}}>
                <p>{t("header.Products")}</p> 
            </Link>
            <Link to='/waygo_page'  className='nav-links' onClick={() => {handleClick();}}>
                <p>{t("header.Solutions")}</p> 
            </Link>
            <Link to='/waygo_page'  className='nav-links' onClick={() => {handleClick();}}>
                <p>{t("header.Resources")}</p>
            </Link>
            <Link to='/waygo_page'  className='nav-links' onClick={() => {handleClick();}}>
                <p>{t("header.Enterprise")}</p>
            </Link>
            <Link to='/waygo_page'className='nav-links' onClick={() => {handleClick();}}>
                <p>{t("header.Pricing")}</p> 
            </Link>
            
            <Link to='/waygo_page'  className='nav-links' onClick={() => {handleClick();}}>
                <p>{t("header.Contact")}</p>
            </Link>
            <button onClick={() => {setLang(!lang);langchange();handleClick();}} className='nav-links' style={{border:'none',display:'flex',alignItems:'center',justifyContent:'center'}}>
                <AiOutlineGlobal size={24}/>
            </button>
            <button className='nav-links' onClick={() => {setLang(!lang);langchange();handleClick();}} style={{backgroundColor:'rgb(35,56,98)',border:'none',color:'white'}}>
                <p>{t("header.Download")}</p>
            </button>
        </ul>
       </nav> 
    </div>
  )
}

export default Navbar
