import React, { useContext } from 'react';
import './third.css';
import { useTranslation } from 'react-i18next';
import DataContext from '../../context/Datacontext';
import useWindowSize from '../../hooks/useWindowSize';
import clock from '../../images/Oclock.svg';
import anywhare from '../../images/Anywhere.svg';
import gear from '../../images/gear.svg';
import flexabilit from '../../images/flexability.svg';

const Third = () => {
    const {lang} = useContext(DataContext);
    const [t] = useTranslation("global");
    const {width} = useWindowSize();

  return (
    <div className='third_main' style={{
            // justifyContent:lang ? width > 600 ? 'flex-end' : 'center' : width > 600 ? 'flex-end' :  'center',
            flexDirection:lang ? width > 1000 ? 'row' : 'column-reverse' : width > 1000 ? 'row-reverse' :  'column-reverse',
            paddingTop:width < 1000 ? "100px":'0px',paddingBottom:width < 1000 ? "100px":'0px'
            }}>
        <div className='third_container_box'
             style={{
                // marginLeft:!lang && width > 1000 ? '50px' : '0px',marginRight:lang && width > 1000 ? '70px' : '0px',
                     marginTop:width<1000 ?'50px':'0px',flexDirection:width<425?'column':'row',
                     marginLeft:width > 1000 && !lang?'0px':'50px',marginRight:width > 1000 && lang?'0px':'50px',
             }}
        >
            <div className='third_box_1'>
                <div className='box'>
                    <img src={clock} alt=''/>
                    <p className='box_title'>{t("third.Time")}</p>
                    <p className='box_text' style={{textAlign:lang?'right':'left'}}>{t("third.Time1")}</p>
                </div>
                <div className='box'>
                    <img src={anywhare} alt=''/>
                    <p className='box_title'>{t("third.anywhare")}</p>
                    <p className='box_text' style={{textAlign:lang?'right':'left'}}>{t("third.anywhare1")}</p>
                </div>
            </div>
            <div className='third_box_2' style={{
                marginLeft:width<425?'0px':'20px',marginTop:width<425?'0px':'40px'
            }}>
                <div className='box'>
                    <img src={gear} alt=''/>
                    <p className='box_title'>{t("third.Efficiency")}</p>
                    <p className='box_text' style={{textAlign:lang?'right':'left'}}>{t("third.Efficiency1")}</p>
                </div>
                <div className='box'>
                    <img src={flexabilit} alt=''/>
                    <p className='box_title'>{t("third.flexibility")}</p>
                    <p className='box_text' style={{textAlign:lang?'right':'left'}}>{t("third.flexibility1")}</p>
                </div>
            </div>
        </div>
        <div className='third_container' 
             style={{marginLeft:width > 600 && !lang?'100px':'0px',marginRight:width > 600 && lang?'100px':'0px',
                     justifyContent:lang?'flex-end':'flex-start'}}>
            <div className='third_h1' style={{alignItems:lang?'flex-end':'flex-start'}}>
                <p className='third_para'>{t("third.our")}</p>
            </div>
            <div className='third_h2' style={{alignItems:lang?'flex-end':'flex-start'}}>
                <p className='third_para'>{t("third.our2")}</p>
                <p className='third_para'>{t("third.our21")}</p>
                <p className='third_para'>{t("third.our22")}</p>
            </div>
            <div className='third_h3' style={{justifyContent:lang?'flex-end':'flex-start'}}>
                <button className='third_sign'>{t("third.getsterted")}</button>
            </div>
        </div>
    </div>
  )
}

export default Third