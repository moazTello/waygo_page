import React, { useContext } from 'react';
import './first.css';
import { useTranslation } from 'react-i18next';
import DataContext from '../../context/Datacontext';
import useWindowSize from '../../hooks/useWindowSize';

const First = () => {
    const {lang} = useContext(DataContext);
    const [t] = useTranslation("global");
    const {width} = useWindowSize();

  return (
    <div className='First_main' style={{justifyContent:lang ? width > 600 ? 'flex-end' : 'center' : width > 600 ? 'flex-start' :  'center'}}>
        <div className='First_container' 
             style={{marginLeft:width > 600 && !lang?'100px':'0px',marginRight:width > 600 && lang?'100px':'0px',justifyContent:lang?'flex-end':'flex-start'}}>
            <div className='first_h1' style={{alignItems:lang?'flex-end':'flex-start'}}>
                <p className='para'>{t("first.h1")}</p>
                <p className='para'>{t("first.h12")}</p>
                <p className='para'>{t("first.h13")}</p>
            </div>
            <div className='first_h2' style={{alignItems:lang?'flex-end':'flex-start'}}>
                <p className='para'>{t("first.h2")}</p>
                <p className='para'>{t("first.h21")}</p>
            </div>
            <div className='first_h3'>
                <button className='first_download'>{t("first.Download")}</button>
                <button className='first_sign'>{t("first.Sign")}</button>
            </div>
        </div>
    </div>
  )
}

export default First