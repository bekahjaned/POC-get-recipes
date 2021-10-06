import React from 'react'

function Recipe({ image, title, ingredients, stepsList }) {
    const getIngredients = ingredients.map((ingredient) => {
        return (
            <li key={ingredient.original}>{ingredient.original}</li>
        )
    })

    const getSteps = stepsList.map((stepList) => {
        const steps = stepList.steps.map((step) => {
            return (
                <li key={step.step}>{step.step}</li>
            )
        })
        return steps
    })

    return (
        <div>
            <img alt="" src={image} />
            <h4>{title}</h4>
            <ul>
                {getIngredients}
            </ul>
            <ol>
                {getSteps}
            </ol>
        </div>
    )
}

export default Recipe
