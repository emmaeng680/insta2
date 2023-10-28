import Image from 'next/image'
import React from 'react'
import { AiOutlineSearch, AiOutlinePlusCircle, AiOutlineHeart,AiFillHome, AiOutlineMenu} from 'react-icons/ai'
import { HiOutlineUserGroup } from 'react-icons/hi2'
import { HiOutlinePaperAirplane } from 'react-icons/hi'




export default function Header() {
  return (
    <div className='shadow-sm border-b bg-white sticky top-0 z-50'>
      <div className='flex justify-between max-w-6xl mx-5 xl:mx-auto'>
      {/* left */}
      <div className='relative hidden lg:inline-grid w-24'>
      <Image src ="https://links.papareact.com/ocw" alt='instagram pic' layout='fill' className='object-contain'/>
        </div>
        
      <div className='relative w-10 lg:hidden flex-shrink-0 cursor-pointer '>
      <Image src="https://links.papareact.com/jjm" alt='instagram icon' layout='fill'  className='object-contain'/>
      </div>
   
        {/* middle - search input field*/}
        <div className='max-w-xs'>
        <div className='relative mt-1 p-3 rounded-md '>
          <div className='absolute inset-y-0 pl-3 flex items-center pointer-events-none '>
           <AiOutlineSearch className='h-5 w-5 text-gray-500' />
          </div>
          <input className='bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md' type="text" placeholder='Search'/>
        </div>
        </div>
        {/* right */}
        <div className='flex items-center justify-end space-x-4'>
          <AiFillHome className='navBtn' />
          <AiOutlineMenu className='h-6 md:hidden cursor-pointer' />

          <div className='relative navBtn'>
            <HiOutlinePaperAirplane className='navBtn rotate-45' />
            <div className='absolute -top-1 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white'>3</div>
          </div>
          <AiOutlinePlusCircle className='navBtn' />
          <HiOutlineUserGroup className='navBtn' />
          <AiOutlineHeart className='navBtn' />
          
          <img src="https://business.columbia.edu/sites/default/files-efs/styles/default_content_image_mobile/public/person/photos/image.jpg?h=826c2742&itok=wHyUYUyZ" alt="proile pic" className='h-10 rounded-full cursor-pointer'/>
        </div>
      </div>

    </div>
  )
}
