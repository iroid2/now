import Image from 'next/image'
import React from 'react'
import Button from './Button'

export default function Nav() {
  return (
    <div className='flex justify-between py-2 px-2 md:px-10 bg-white'>
        <div className="left-nav">
            <Image src={'/tin.png'} alt='' height={100} width={100 }/>
        </div>
        <div className="right-nav inline-flex gap-4">
            <Button title=' Free Trial' className=' bg-yellow-400 text-black py-2 px-4 border-2 border-black '/>
            <Button title='Start Free Trial' className=' py-2 px-3 border-2 border-black text-black '/>
        </div>
    </div>
  )
}
