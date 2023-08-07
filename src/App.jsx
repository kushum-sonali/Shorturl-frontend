import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputUrl from './components/inputurl'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <InputUrl />
    </>
  )
}

export default App
