import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HookC from './components/HookC'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <HookC/>
       </div>
    </>
  )
}

export default App
