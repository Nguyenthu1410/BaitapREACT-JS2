import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BookingForm from './Components/BookingForm'
import Seat from './Components/Seat'

function App() {

  return (
   <div>
    <BookingForm />
    <Seat />
   </div>
  )
}

export default App
