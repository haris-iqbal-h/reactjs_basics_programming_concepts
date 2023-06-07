import React from 'react'
import { useMealsListContext } from './MealsProvider'

const MealList = () => {
    
    const {meals}=useMealsListContext()

    return (
        <>
        <h2>Meal List</h2>
        {meals.map((meal,index)=>(
            <div className="card" key={index}>
                <h2>{meal}</h2>
            </div>
        ))}
        </>
    )
}

export default MealList