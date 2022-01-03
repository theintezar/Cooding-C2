import React from 'react'
import './Style.css'

const MenuCard = ({menuData}) => {
   // console.log(menuData)
    return (

        <>
        { menuData.map((currEle) => {
                return (< >
                     <div className='a' key={currEle.id}>
                   <div className='b'>
                   <div className='c'>
                   <img src={currEle.image}></img>

                       <span className='sA'>{currEle.id}</span>
                       <span>{currEle.name}</span>
                       <span>{currEle.price}</span>
                       <span>{currEle.description}</span>
                      
                   </div>
               </div>
           </div>
           </>
           )
            })}
       
        </>
    )
}

export default MenuCard
