'use client';
import React, {  FC, useState } from 'react';
import defBack from 'public/images/DSC_0451.png'
import htpBack from 'public/images/htp 1.png'
import kssdaBack from 'public/images/kssda_back 1.png'
import logoHTP from 'public/images/logo 1.png';
import logoKssda from 'public/images/kssda 1.png';
import style from './AboutSchool.module.scss'
import LogoCard from '@/shared/logoCard/LogoCard';
import Image, { StaticImageData } from 'next/image';


const AboutSchool:FC = () => {
    const [backgroundImage, setBackgroundImage] = useState<StaticImageData>(defBack); 
  
    const handleBackgroundChange = (chosenLogo: string): void => {
    switch (chosenLogo) {
        case 'DEFAULT':
          setBackgroundImage(defBack);
          break;
        case 'HTP':
            setBackgroundImage(htpBack);
          break;
        case 'KSSDA':
            setBackgroundImage(kssdaBack);
          break;
        default:
          break;
      }
}
    return (
        <div className={style.aboutSchool} >
        <Image className={style.backgroundImage} src={backgroundImage} alt={'backgroundImage'} />
        <div>
          <div className={style.aboutHTP} onMouseEnter={() => handleBackgroundChange('HTP')} onMouseLeave={() => handleBackgroundChange('DEFAULT')}>
            <LogoCard logo={logoHTP} title={'logoHTP'} width={220} height={138}/>
          </div>
          <div className={style.aboutKSSDA}onMouseEnter={() => handleBackgroundChange('KSSDA')} onMouseLeave={() => handleBackgroundChange('DEFAULT')}>
            <LogoCard logo={logoKssda} title={'logoKSSDA'} width={300} height={300}/>
          </div>
        </div>
      </div>
    );
};

export default AboutSchool;