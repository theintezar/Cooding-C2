import React from 'react'
import { Menu } from './menuApp';
import { useState } from 'react';
import MenuCard from './MenuCard';

const Restorent = () => {
    const [menuData, setMenuData] = useState(Menu);
    //console.log(menuData);
    const filterItem = (catogery) =>{
const updateList = Menu.filter((curEle) =>{
     return curEle.name === catogery;
    

});
setMenuData(updateList)
 }


   
    return (
        <>
       <nav>
            <div>
                <button onClick={() => filterItem ("noodle")}>sort by noodle</button>
                <button onClick={() => filterItem ("maggie")}>sort by maggie</button>
                <button onClick={() => filterItem ("pizza")}>sort by pizza</button>
                
            </div>
        </nav>
             <MenuCard menuData= {menuData}></MenuCard>
        </>
    )
}

export default Restorent
