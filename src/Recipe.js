import React from 'react'
import TabPractice from './TabPractice'

function Recipe({ image, title, diets, time, servings, summary, ingredients, stepsList }) {
    const displayDiets = diets.map((diet) => {
        return (
            <li>{diet}</li>
        )
    })

    return (
        <div>
            
            <img alt="" src={image} />
            <h4>{title}</h4>
            <ul>
                {displayDiets}
            </ul>
            <h5>Total time: {time} minutes</h5>
            <h5>Servings: {servings}</h5>
            <TabPractice summary={summary} ingredients={ingredients} stepsList={stepsList} />
            
        </div>
    )
}

export default Recipe
