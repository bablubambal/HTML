import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Gallerview from './components/Gallerview'
import MyCard from './components/MyCard'

import Card from './components/Card'


function App() {


  return (
    <>
    <Header/>
    <Card/>
    <Gallerview/>
    <MyCard/>
   
    </>
  )
}

export default App
