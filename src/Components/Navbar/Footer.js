import React from 'react'
import './Navstyle.css';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const [t] = useTranslation("global");

  return (
    <div className='footer'>
        © 2023 {t("footer.footer")}
    </div>
  )
}

export default Footer