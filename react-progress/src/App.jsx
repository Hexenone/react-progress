import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App(props) {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>{props.greeting} {props.subject}!</h1>
        <button type="button" classNane="primary">Click me!</button>
      </div>
    </>
  )
}

export default App
