import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Finances from '../Components/Finances'
import AskMore from '../Components/AskMore'
import BankAccount from '../Components/BankAccount'
import OneApp from '../Components/OneApp'
import AboutUs from '../Components/AboutUs'
import Spend from '../Components/Spend'
import SpendMoney from '../Components/SpendMoney'
import PortableVault from '../Components/PortalVault'
import Banner from '../Components/Banner'
import BuildWealth from '../Components/BuildWealth'
import Faq from '../Components/Faq'
import OfferingCards from '../Components/OfferingCards'




export default function Home() {
  return (
    <div>
      <Hero/>
      <Finances/>
      <AskMore/>
      <BankAccount/>
      <OneApp/>
      <AboutUs/>
      <Spend/>
      <SpendMoney/>
      <PortableVault/>
      <Banner/>
      <BuildWealth/>
      <Faq/>
      <OfferingCards/>
    </div>
  )
}
