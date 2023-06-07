import React from 'react'

const Button = (props) => {
    const clickHandler=(e)=>{
        e.preventDefault()
        console.log("clicked");
    }
    const overHandler=(e)=>{
        e.preventDefault()
        console.log("mouse over");
    } 
    return (
        <button onClick={clickHandler} onMouseOver={overHandler}>{props.title}</button>
    )
}

export default Button