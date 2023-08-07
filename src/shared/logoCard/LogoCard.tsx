'use client';

import Image, { StaticImageData } from 'next/image';
import React, { FC } from 'react';

interface LogoCardProps {
  logo: StaticImageData;
  title: string;
  width: number;
  height: number;
}

const LogoCard: FC<LogoCardProps> = ({ logo, title, width, height }) => {
  return (
    <div>
      <Image width={width} height={height} src={logo} alt={title} />
    </div>
  );
};

export default LogoCard;
