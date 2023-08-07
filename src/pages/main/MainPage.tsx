'use client';
import AboutSchool from '@/widgets/aboutSchool/AboutSchool';
import Sidebar from '@/widgets/sidebar/Sidebar';
import React, { FC } from 'react';
import style from './MainPage.module.scss';

const MainPage: FC = () => {
  return (
    <div className={style.mainPage}>
      <Sidebar width='305px' height='1024px' />
      <AboutSchool />
    </div>
  );
};

export default MainPage;
