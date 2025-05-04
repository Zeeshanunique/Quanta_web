import React from 'react'
import Hero from './Component/Hero'
import Solutions from './Component/Solutions'
import Advantages from './Component/Advantages'
import Markets from './Component/Markets'
import Client from './Component/Client'
import ContactForm from './Component/Contact'

const Wraper = () => {
  return (
    <>
        <Hero/>
        <Solutions/>
        <Advantages/>
        <Markets/>
        <Client/>
        <ContactForm/>
    </>
  )
}

export default Wraper