import React from 'react'
import Nav from '../Layout/Nav'
import Footer from '../Layout/Footer'
import './LayoutCSS/Layout.css'

export default function Layout(props) {
  return (
    <>
      <Nav props={props}/>
      <main className="home-main">
        {props.children}
      </main>
      <Footer />
    </>
  )
}