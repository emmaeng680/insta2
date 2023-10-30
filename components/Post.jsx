import React from 'react'
import { BsBookmark, BsChat } from "react-icons/bs"
import { HiOutlinePaperAirplane,HiOutlineEmojiHappy, HiOutlineDotsHorizontal } from 'react-icons/hi'
import { AiOutlineHeart } from 'react-icons/ai'
import {AiFillHeart as HeartIconFilled} from 'react-icons/ai'

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
      <div className='flex justify-between px-4 pt-4'>
      <div className='flex space-x-4'>
        
        <AiOutlineHeart className='btn'/>
        <BsChat className='btn'/>
        <HiOutlinePaperAirplane className='btn'/>
        </div>
        
        <BsBookmark  className='btn'/>
      </div>
      {/* captions */}
      <p className='p-5 truncate'>
        <span className='font-bold mr-1'>{username} </span>{caption}
      </p>
      {/* comments */}
      
      {/* input */}
      <form className='flex items-center p-4'>
        <HiOutlineEmojiHappy className='h-7' />
        <input type="text"
          placeholder='Add a comment...'
          className='border-none flex-1 focus:ring-0 outline-none' />
        <button className='font-semibold text-blue-400'>Post</button>
      </form>
    </div>
  )
}
