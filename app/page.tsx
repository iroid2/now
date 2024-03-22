import Banner from '@/components/Banner'
import Hero from '@/components/Hero'
import Nav from '@/components/Nav'
import Settings from '@/components/Settings'
import React from 'react'

export default function page() {
  return (
    <div>
      <Banner/>
      <Nav/>
      <Hero/>
    
      <Settings/>
    </div>
  )
}
