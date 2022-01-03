import React from 'react'
import { Menu } from './menuApp';
import { useState } from 'react';
import MenuCard from './MenuCard';

const Restorent = () => {
    const [menuData, setMenuData] = useState(Menu);
    //console.log(menuData);
    return (
        <>
        <nav>
            <div>
                <button>add</button>
            </div>
        </nav>
   <MenuCard menuData= {menuData}></MenuCard>
        </>
    )
}

export default Restorent
