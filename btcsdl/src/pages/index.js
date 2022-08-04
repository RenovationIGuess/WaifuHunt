import React, {useState} from 'react'
import Sidebar from '../components/sidebar'
import Navbar from '../components/navbar'
import HeroSection from '../components/herosection'
import InfoSection from '../components/infosection'
import { 
  homeObjectOne,
  homeObjectTwo,
  homeObjectThree 
} from '../components/infosection/data'
import Services from '../components/services'
import Footer from '../components/footer'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
      setIsOpen(!isOpen)
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjectOne}/>
      <InfoSection {...homeObjectTwo}/>
      <Services />
      <InfoSection {...homeObjectThree}/>
      <Footer />
    </> 
  )
}

export default Home