import { useState } from 'react'
import './App.css'

import Navbar from "./components/Navbar"
import RoutePage from "./routes/RoutePage"

function App() {

  return (
    <>
      <Navbar />
      <RoutePage />
    </>
  )
}

export default App
