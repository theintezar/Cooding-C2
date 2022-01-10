import React from 'react'
import './Style.css'

const MenuCard = ({menuData}) => {
   // console.log(menuData)
    return (

        <>
        { menuData.map((currEle) => {
                return (< >
                     <div className='c' key={currEle.id}>
                   <div className='a'>
                   <div className='b'>
                   <img src={currEle.image}></img>

                       <span className='sA'>{currEle.id}</span>
                       <span className='m'>{currEle.name}</span>
                       <span>{currEle.price}</span>
                      <div className='topm'><span>{currEle.description}</span></div> 
                      
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
