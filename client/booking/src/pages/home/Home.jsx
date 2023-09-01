// import React from 'react'
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties"
import Footer from "../../components/footer/Footer"
import MailList from "../../components/mailList/MailList"
import Navbar from "../../components/navbar/Navbar"
import { Featured } from "../../components/navbar/featured/Featured"
import Header from "../../components/navbar/header/Header"
import PropertyList from "../../components/propertyList/PropertyList"
import "./home.css"


const home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className="homeConatiner">
        <Featured/>
        <h1 className="homeTitle">Browser by Property type</h1>
        <PropertyList/> 
        <h1 className="homeTitle">Home Guest Love</h1>
        <FeaturedProperties/>
        <MailList/>
        <Footer/>
      </div>
    </div>
  )
}

export default home
