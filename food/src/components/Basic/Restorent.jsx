import React from 'react'
import { Menu } from './menuApp';
import { useState } from 'react';
import MenuCard from './MenuCard';
import './Style.css';


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
          
                <button onClick={() => filterItem ("Noodle")}>sort by noodle</button>
                <button onClick={() => filterItem ("Maggie")}>sort by maggie</button>
                <button onClick={() => filterItem ("Pizza")}>sort by pizza</button>
                <form className='frm'>
            <h3>Add Items</h3>

                    <input placeholder='name of food'></input>
                    <input placeholder='Decription'></input>
                    <input placeholder='price'></input>
                    <input placeholder='image link'></input>
                    <button>Add</button>
                </form>
                
           
        </nav>
             <MenuCard menuData= {menuData}></MenuCard>

        </>
    )
}

export default Restorent
