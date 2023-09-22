import React, { useContext } from 'react';
import './fifth.css';
import { useTranslation } from 'react-i18next';
import DataContext from '../../context/Datacontext';
import useWindowSize from '../../hooks/useWindowSize';
import fifth from '../../images/fifth.svg';
const Fifth = () => {
    const {lang} = useContext(DataContext);
    const [t] = useTranslation("global");
    const {width} = useWindowSize();

  return (
    <div className='fifth_main' style={{
            // justifyContent:lang ? width > 600 ? 'flex-end' : 'center' : width > 600 ? 'flex-end' :  'center',
            flexDirection:lang ? width > 1000 ? 'row' : 'column' : width > 1000 ? 'row-reverse' :  'column',
            paddingTop:width < 1000 ? "100px":'0px',paddingBottom:width < 1000 ? "100px":'0px',
            height:width>1000 ? '100vh' : ''
            }}>
       <div className='fifth_container_box'
             style={{
                     marginBottom:width<1000 ?'50px':'0px',justifyContent:'center'
             }}
        >
            <img style={{width:width>1000 ? '75%':'90%'}} src={fifth} alt=''/>
        </div>
        <div className='fifth_container' 
             style={{
                // marginLeft:width > 600 && lang?'100px':'0px',marginRight:width > 600 && !lang?'100px':'0px',
                     justifyContent:lang?'flex-end':'flex-start',marginTop:width<1000 ? '50px' : '0px'}}>
            <div className='fifth_h1' style={{alignItems:lang?'flex-end':'flex-start'}}>
                <p className='fifth_para'>{t("fifth.save")}</p>
                <p className='fifth_para'>{t("fifth.save2")}</p>
            </div>
            <div className='fifth_h2' style={{alignItems:lang?'flex-end':'flex-start'}}>
                <p className='fifth_para'>{t("fifth.ifyou")}</p>
                <p className='fifth_para'>{t("fifth.ifyou1")}</p>
            </div>
            <div className='fifth_h3' style={{justifyContent:lang?'flex-end':'flex-start'}}>
                <button className='fifth_sign'>{t("fifth.call")}</button>
            </div>
        </div>
 
    </div>
  )
}

export default Fifth