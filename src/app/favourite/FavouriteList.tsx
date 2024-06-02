"use client"
import { useEffect, useState } from "react"
import View from "./View"
import { MyImage } from "./page"


const FavouriteList = ({resources}:{resources:MyImage[]}) => {
    const [initialState , setInitialState] = useState(resources);
    useEffect(()=>{
        setInitialState(resources)   
    },[resources]);
  return (
    <div className='columns-4 gap-4 space-y-4 mx-auto p-5'>
            {initialState.map((item, i)=>{
                return <div key={i} className='break-inside-avoid'>
                    <View src={item.public_id} tag={item.tags} fun={(publicId:string)=>{
                        setInitialState((current)=>current.filter((val)=>val.public_id !==publicId))
                    }}/>
                </div>
            })}

        </div>
  )
}

export default FavouriteList