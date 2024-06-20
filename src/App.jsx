import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CurrentlyCount from '../CurrentlyCount'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Döviz Hesaplama</h1>
      <CurrentlyCount/>
      </div>

    </>
  )
}

export default App
