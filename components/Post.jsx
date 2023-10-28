import React from 'react'
import { BsBookmark, BsChat } from "react-icons/bs"
import { HiOutlinePaperAirplane,HiOutlineEmojiHappy, HiOutlineDotsHorizontal } from 'react-icons/hi'
import { AiOutlineHeart} from 'react-icons/ai'

export default function Post({id,username,userImg, img, caption}) {
  return (
    <div className='bg-white my-7 border rounded-sm'>
          {/* Header */}
          <div className='flex items-center p-5'>
        <img src={userImg} className='rounded-full h-12 w-12 object-contain border p-1 mr-3' alt="" />
        <p className='flex-1 font-bold'>{username}</p>
        <HiOutlineDotsHorizontal className='h-5'/>
          </div>
      {/* image  */}
      <img src={img} className='object-cover w-full' alt="" />
      {/* button */}
      <div>
        
      </div>
          {/* captions */}
          {/* comments */}
          {/* input */}
    </div>
  )
}
