import React from 'react'
import { useMealsListContext } from './MealsProvider'

const Counter = () => {
    const {meals}=useMealsListContext()
    return (
        <div>No of meals today : {meals.length}</div>
    )
}

export default Counter