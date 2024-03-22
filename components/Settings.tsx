import Link from 'next/link'
import React from 'react'

export default function Settings() {
  return (
    <div className='px-10 '>
        <p>Our website stores cookies on your device and discloses information in accordance with our Cookie Statement. Choose "Customize Settings" to control cookies. We may collect certain aggregate and anonymized data from your browser independent of your cookie preferences. Cookie Statement</p>
        <div className="">
          <Link  href={''}>Customise Settings</Link>
          <h1 className='text-3xl'>X</h1>
        </div>
    </div>
  )
}
