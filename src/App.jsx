import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  function Header(props) {
    return (<h1 style={{color: props.color}}>{props.text}</h1>);
  }
  
  function Content(props) {
    return (<p style={{color: props.color}}>{props.text}</p>);
  }
  
  function Footer() {
    return (<h1>Created by Me, Mr. Yerrrr.</h1>);
  }
  

  return (
    <>
           <Header color="red" text="YERRRRR"/>
      <Content color="blue" text="This is my first react application" />
      <Content color="red" text="Wish me luck..." />
      <Content color="green" text="I think I've got it!" />
      <Footer />
    </>
  )
}

export default App
