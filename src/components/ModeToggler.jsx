import React, { useState } from 'react'

const ModeToggler = () => {
    let [mode,setMode]=useState(true);
    const hanldeChange=()=>{
        setMode(!mode)
    }
    return (
        <>
            <div>
                {mode?"Dark Mode is On":"Light Mode is On"}
            </div>
            <button onClick={hanldeChange}>Toggle Mode</button>
        </>
        
    )
}

export default ModeToggler