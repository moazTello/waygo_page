import React, { useContext } from 'react';
import './Fourth.css';
import { useTranslation } from 'react-i18next';
import DataContext from '../../context/Datacontext';
import useWindowSize from '../../hooks/useWindowSize';
import fourth from '../../images/fourth.svg';
const Fourth = () => {
    const {lang} = useContext(DataContext);
    const [t] = useTranslation("global");
    const {width} = useWindowSize();

  return (
    <div className='fourth_main' style={{
            // justifyContent:lang ? width > 600 ? 'flex-end' : 'center' : width > 600 ? 'flex-end' :  'center',
            flexDirection:lang ? width > 1000 ? 'row' : 'column-reverse' : width > 1000 ? 'row-reverse' :  'column-reverse',
            paddingTop:width < 1000 ? "100px":'0px',paddingBottom:width < 1000 ? "100px":'0px',
            height:width>1000 ? '100vh' : ''
            }}>
        <div className='fourth_container' 
             style={{
                // marginLeft:width > 600 && lang?'100px':'0px',marginRight:width > 600 && !lang?'100px':'0px',
                     justifyContent:lang?'flex-end':'flex-start',marginTop:width<1000 ? '50px' : '0px'}}>
            <div className='fourth_h1' style={{alignItems:lang?'flex-end':'flex-start'}}>
                <p className='fourth_para'>{t("fourth.make")}</p>
                <p className='fourth_para'>{t("fourth.make1")}</p>
            </div>
            <div className='fourth_h2' style={{alignItems:lang?'flex-end':'flex-start'}}>
                <p className='fourth_para'>{t("fourth.facility")}</p>
                <p className='fourth_para'>{t("fourth.facility1")}</p>
            </div>
            <div className='fourth_h3' style={{justifyContent:lang?'flex-end':'flex-start'}}>
                <button className='fourth_sign'>{t("third.getsterted")}</button>
            </div>
        </div>
        <div className='fourth_container_box'
             style={{
                     marginTop:width<1000 ?'50px':'0px',justifyContent:'center'
             }}
        >
            <img style={{width:width>1000 ? '75%':'90%'}} src={fourth} alt=''/>
        </div>
    </div>
  )
}

export default Fourth