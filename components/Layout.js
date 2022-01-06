import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import Link from 'next/link'
export default function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar/>
      <div className="page-content">
        { children }
      </div>
      <Footer/>
    </div>
  )
}