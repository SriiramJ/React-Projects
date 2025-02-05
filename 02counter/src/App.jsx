import { useState } from 'react'

import './App.css'

function App() {
    // let counter = 10;

    const [counter, setCounter] = useState(0)

  const addCounter = () => {
    // counter += 1;
    // console.log(counter);
    setCounter(counter + 1)
    
  };

  const removeValue = () => [
    setCounter(counter - 1)
  ]

  return (
    <>
      <h1>React Project </h1>
      <h4>Counter Value: {counter}</h4>
      <button
      onClick={addCounter}
      >Add Value </button> {"  "}
     <button
     onClick={removeValue}
     >Remove Value </button>
      <p>Footer: {counter}</p>
    </>
  );
}

export default App
