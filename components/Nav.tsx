import Image from 'next/image'
import React from 'react'
import Button from './Button'

export default function Nav() {
  return (
    <div className='flex justify-between px-10 bg-white'>
        <div className="left-nav">
            <Image src={'/tin.png'} alt='' height={100} width={100 }/>
        </div>
        <div className="right-nav flex gap-4">
            <Button title='Start text-black Free py-2 px-3 Trial' className='bg-yellow-400'/>
            <Button title='Start Free Trial' className=' py-2 px-4 bg-yellow-400 text-black'/>
        </div>
    </div>
  )
}
