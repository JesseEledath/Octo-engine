import React from 'react'
import Nav from '../Layout/Nav'
import Footer from '../Layout/Footer'

export default function Layout(props) {
  return (
    <>
      <Nav />
      <main className="home-main">
        {props.children}
      </main>
      <Footer />
    </>
  )
}