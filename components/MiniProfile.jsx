import React from 'react'

export default function MiniProfile() {
  return (
      <div className='flex items-center justify-between mt-14 ml-10'>
          <img className='w-16 h-16 rounded-full border p-[2px]' src="https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg?w=2210&quality=70" alt="" />

          <div className='flex-1 mx-4'>
              <h2 className='font-bold'>nature_nurture</h2>
              <h3 className='text-sm text-gray-400'>Welcome to Instagram</h3>
          </div>

          <button className='text-blue-400 text-small font-semibold'>Sign Out</button>
    </div>
  )
}
