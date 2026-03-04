import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MovieHeader from './Components/MovieHeader'
import MovieSeatSelection from './Components/MovieSeatSelection'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <MovieHeader />
    <MovieSeatSelection />
   </div>
  )
}

export default App
