import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0);
  const addValue = () => {
    setCounter((prevState) => prevState+1);
    setCounter((prevState) => prevState+1);
  }
  const removeValue = () => {
    setCounter((prevState) => prevState-1)
    setCounter((prevState) => prevState-1)
  }

  return (
    <>
      <h1>React course with hitesh</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
