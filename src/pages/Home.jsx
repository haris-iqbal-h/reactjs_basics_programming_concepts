import React, { useReducer, useState } from 'react'
import Hello from '../components/Hello'
import Card from '../components/Card'
import Button from '../components/Button'
import ModeToggler from '../components/ModeToggler'
import MealList from '../components/MealList'
import Counter from '../components/Counter'
import MealsProvider from '../components/MealsProvider'


const reducer=(state,action)=>{
    if(action.type==='ride') return {money:state.money+10}
    if(action.type==='fuel') return {money:state.money-5}
    return new Error()
}
const Home = () => {

    const initialState={money:100}
    const [state,dispatch]=useReducer(reducer,initialState)


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
            {/* Structure and Components */}
            {/* Props handling */}
            {/* <div>
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
            </div> */}
            
            {/* State Management */}
            {/* <div>
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


            </div> */}

            {/* Props drilling problem solve */}
            {/* Context API  */}
            {/* <div>
                <MealsProvider>
                    <MealList/>
                    <Counter />
                </MealsProvider>
            </div> */}

            {/* Reducer Hooks */}
            <div>
                <h2>Wallet :{state.money}</h2>
                <button onClick={()=>dispatch({type:'ride'})}>A New Customer</button>
                <button onClick={()=>dispatch({type:'fuel'})}>Refill the tank</button>
            </div>
        </>
    )
}

export default Home