"use client"
import { CldImage } from 'next-cloudinary';
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { AddTags } from './Action';
import { useState } from 'react';

import { BiEditAlt} from "react-icons/bi";
import Link from 'next/link';


const View = ({src, tag}:{src:string , tag:string[] }) => {
  const [fav, setfav]= useState(tag.includes("favourite"))
  return (
    <div className='relative'>
    <CldImage
    className='rounded-sm'
        width="400"
        height="400"
        src={src}
        sizes="100vw"
        alt="Description of my image"
      />
{/* Heart icon for favourite */}
      <div className='absolute top-1 right-1'
      onClick={()=>{
        setfav(!fav);
        AddTags(src, fav);
      }}
      >
        {
          fav ? (<AiFillHeart className='w-8 h-8 cursor-pointer text-red-500'/>
         ) : (<AiOutlineHeart className='w-8 h-8 cursor-pointer text-white hover:text-red-500 duration-300' />
        )
        }
      
      
      </div>
      {/* edit icon for editing page */}
      <div className='absolute top-1 left-1'>
      <Link href={`/edit?publicId=${src}`}>
      <BiEditAlt className='w-8 h-8 cursor-pointer text-white hover:text-red-500 duration-300' />
      </Link>
      </div>
      
      </div>
      
  )
}

export default View