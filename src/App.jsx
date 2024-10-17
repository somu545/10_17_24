import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidepanel from './components/Sidepanel/Sidepanel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Sidepanel />
    </>

  )
}

export default App
