'use client'
import React, { FC } from 'react';
interface SidebarProps{
    width: string;
    height: string;
}
const Sidebar: FC <SidebarProps>= ({width,height }) => {
    return (
        <div style={{ width, height, border: '1px solid black'}}>   
        </div>
    );
};

export default Sidebar;