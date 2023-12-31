"use client"
import React, { useEffect, useState } from 'react'
import Story from './Story'
import { generateFakeUsers } from '@/utils/GenerateFakeUsers'


export default function Stories() {

  const [suggestions, setSuggestions] = useState([])

  useEffect(() => {
    const suggestions = generateFakeUsers(20)
    setSuggestions(suggestions)
}, [])



  return (
      <div className='flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black' >
      {suggestions.map(profile => (
        <Story key={profile.id}
          img={profile.avatar}
          username = {profile.username}
        />
          ))}
    </div>
  )
}
