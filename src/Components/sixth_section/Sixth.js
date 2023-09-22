import React from 'react';
import './sixth.css';
import { useTranslation } from 'react-i18next';
import moaz from '../../images/moaz.svg';
import wassem from '../../images/wassem.svg';
import yasser from '../../images/yasser.svg';
import ahmad from '../../images/ahmad.svg';



import ImageSlider from './ImageSlider';
const Sixth = () => {
    const [t] = useTranslation("global");
    const slider = [
      {srcIm:`${yasser}`,name:`${t("sixth.yasser_name")}`,title:`${t("sixth.yasser_title")}`,job:`${t("sixth.yasser_job")}`},
      {srcIm:`${ahmad}`,name:`${t("sixth.ahmad_name")}`,title:`${t("sixth.ahmad_title")}`,job:`${t("sixth.ahmad_job")}`},
      {srcIm:`${wassem}`,name:`${t("sixth.wassem_name")}`,title:`${t("sixth.wassem_title")}`,job:`${t("sixth.wassem_job")}`},
      {srcIm:`${moaz}`,name:`${t("sixth.moaz_name")}`,title:`${t("sixth.moaz_title")}`,job:`${t("sixth.moaz_job")}`},
    ]
  return (
    <div className='sixth_main'>
    <div className='sixth_container'>
        <div className='sixth_h1'>
            <p className='sixth_para'>{t("sixth.check")}</p>
            <p className='sixth_para'>{t("sixth.check2")}</p>
        </div>
        <div className=''>
          <ImageSlider slider={slider}/>
        </div>
    </div>
</div>
  )
}

export default Sixth