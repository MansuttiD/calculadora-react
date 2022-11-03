import { useEffect, useState } from 'react'
import './App.css'
import Buttons from "./components/Buttons"
import Clear from './components/Clear'
import Pantalla from './components/Pantalla'
import { evaluate } from "mathjs";
import Del from './components/Del'
import Loading from './components/Loading'


function App() {
  
  const [input, setInput] = useState(0)

  const [isLoading, setIsLoading] = useState(true)


  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 3000);
  
 
  }, [])
  

  const handleInput = val => {
    
    if (input === 0) {
      setInput (val)
    } else {
      setInput(input + val)
    }

  }

  const handleClear = () => setInput(0)

  const calcularResultado = () => {
    setInput(evaluate(input));
  }

  const handleDel = () => {
    setInput(input.slice(0, -1));
  }

  return (
    <div className='App'>
      {
              
                isLoading ?
                  <Loading />
                  :

<div className="contenedor__calculadora">

  <Pantalla input={input} />

    <div className='contenedor__fila'>
    <Buttons handleInput={handleInput}>1</Buttons>
    <Buttons handleInput={handleInput}>2</Buttons>
    <Buttons handleInput={handleInput}>3</Buttons>
    <Buttons handleInput={handleInput}>+</Buttons>
    </div>

    <div className='contenedor__fila'>
    <Buttons handleInput={handleInput}>4</Buttons>
    <Buttons handleInput={handleInput}>5</Buttons>
    <Buttons handleInput={handleInput}>6</Buttons>
    <Buttons handleInput={handleInput}>-</Buttons>

    </div>
    <div className='contenedor__fila'>
    <Buttons handleInput={handleInput}>7</Buttons>
    <Buttons handleInput={handleInput}>8</Buttons>
    <Buttons handleInput={handleInput}>9</Buttons>
    <Buttons handleInput={handleInput}>*</Buttons>
    </div>

    <div className='contenedor__fila'>
    <Buttons handleInput={calcularResultado}>=</Buttons>
    <Buttons handleInput={handleInput}>0</Buttons>
    <Buttons handleInput={handleInput}>.</Buttons>
    <Buttons handleInput={handleInput}>/</Buttons>
    </div>

    <div className='contenedor__fila'>
    <Clear handleClear={handleClear}>Clear</Clear>
    <Del handleDel={handleDel}>Del</Del>
    </div>
    
</div>
      }
    </div>
  )
}

export default App
