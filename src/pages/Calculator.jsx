import React, { useRef, useState } from 'react'

const Calculator = () => {
    const inputRef=useRef(null)
    const resultRef=useRef(null)

    const [result,setResult]=useState(0)

    const add=(e)=>{
        e.preventDefault()
        setResult((res)=>res+Number(inputRef.current.value))
    }
    const sub=(e)=>{
        e.preventDefault()
        setResult((res)=>res-Number(inputRef.current.value))
    }
    const mul=(e)=>{
        e.preventDefault()
        setResult((res)=>res*Number(inputRef.current.value))
    }
    const divid=(e)=>{
        e.preventDefault()
        setResult((res)=>res/Number(inputRef.current.value))
    }
    const resetInp=(e)=>{
        e.preventDefault()
        inputRef.current.value=0
    }
    const resetRes=(e)=>{
        e.preventDefault()
        setResult(0)
    }

    return (
        <>
            <h1>Simple Working Calculator</h1>
            <label ref={resultRef}>Result : {result}</label>
            <div>
                <input type="number" ref={inputRef}/>
            </div>
            <div>
                <button className='card' onClick={add}>Add</button>
                <button className='card' onClick={sub}>Subtract</button>
                <button className='card' onClick={mul}>Multiply</button>
                <button className='card' onClick={divid}>Divide</button>
                <button className='card' onClick={resetInp} style={{backgroundColor:"red"}}>Reset Input</button>
                <button className='card' onClick={resetRes} style={{backgroundColor:"red"}}>Reset Result</button>

            </div>
        </>
        
    )
}

export default Calculator