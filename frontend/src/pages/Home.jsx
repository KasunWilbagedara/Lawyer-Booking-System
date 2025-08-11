import React from 'react'
import Header from '../components/Header'
import SpecialityMenu from '../components/SpecialityMenu'
import TopLawyer from '../components/TopLawyer'
import Banner from '../components/Banner'
import TopLawyersComponent from '../components/TopLawyer'

const Home = () => {
  return (
    <div>
      <Header />
      <SpecialityMenu />
      <TopLawyer/>
      <Banner />
    </div>
  )
}

export default Home