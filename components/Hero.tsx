import React from 'react'
import Button from './Button'

export default function Hero() {
  return (
    <div className='text-center flex items-center justify-center h-[500px] text-black bg-white' >
        <h1 className="text-3xl">
            Turn Emails into Revenue
        </h1>
        <p>Win Neww customers with #1 email marketing  and automation that recommeds wats to get more open sales  </p>
        <Button title='Sign Up' className=' border-[#241c14]'/>
    </div>
  )
}
