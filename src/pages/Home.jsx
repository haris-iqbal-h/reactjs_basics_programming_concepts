import React, { useState } from 'react'
import Hello from '../components/Hello'
import Card from '../components/Card'
import Button from '../components/Button'
import ModeToggler from '../components/ModeToggler'

const Home = () => {

    const [inputText, setText] = useState('hello'); 

    const [form,setForm]=useState({
        firstName:"",
        lastName:"",
        email:""
    })

    function handleChange(e) { 
        setText(e.target.value); 
    }

    return (
        <>
            <Hello title='This is header components'/>
            <div>   
                <h1>Task: Add three Card elements</h1>
                <Card h2="First card's h2" h3="First card's h3" />
                <Card h2="Second card's h2" h3="Second card's h3" />
                <Card h2="Third card's h2" h3="Third card's h3" />
            </div>
            <div>
                <Button title="Click Me"/>
            </div>
            <br />
            <ModeToggler />
            <br /><br />
            <input value={inputText} onChange={handleChange} /> 
            <p>You typed: {inputText}</p> 
            <button onClick={() => setText('hello')}> 
                Reset 
            </button>

            <hr />
            <div>
                <label>
                    First Name : 
                    <input
                        value={form.firstName}
                        onChange={e=>{
                            setForm({
                                ...form,
                                firstName:e.target.value
                            })
                        }}
                    />
                </label>
                <br />
                <label>
                    Last Name : 
                    <input 
                        value={form.lastName}
                        onChange={e=>{
                            setForm({
                                ...form,
                                lastName:e.target.value
                            })
                        }}
                    />
                </label>
                <br />
                <label>
                    Email : 
                    <input 
                        value={form.email}
                        onChange={e=>{
                            setForm({
                                ...form,
                                email:e.target.value
                            })
                        }}
                    />
                </label>

                <div>
                    <p>{form.firstName}{' '} {form.lastName}{' '} {form.email}</p>
                </div>
            </div>
        </>
    )
}

export default Home