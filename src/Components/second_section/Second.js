import React from 'react';
import './second.css';
import { useTranslation } from 'react-i18next';
import trusted from '../../images/trusted.svg';
const Second = () => {
    const [t] = useTranslation("global");
  return (
    <div className='second_main'>
        <div className='second_container'>
            <div className='second_h1'>
                <p className='second_para'>{t("second.Trusted")}</p>
            </div>
            <div className='second_h2'>
                <p className='second_para'>{t("second.we")}</p>
                <p className='second_para'>{t("second.we2")}</p>
            </div>
            <div className='second_h3'>
                <img style={{width:'70%'}} src={trusted} alt=''/>
            </div>
        </div>
    </div>
  )
}

export default Second