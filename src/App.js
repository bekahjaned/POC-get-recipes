import React, { useState } from 'react'
import DietOption from './DietOption';
import AllergyOption from './AllergyOption';
import Button from '@mui/material/Button';
import RecipeList from './RecipeList'
import { dietOptions } from "./utils/dietOptions";
import { allergyOptions } from "./utils/allergyOptions";

import './App.css';


const apiKey = `${process.env.REACT_APP_RECIPE_API_KEY}`

function App() {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("")
  const [diet, setDiet] = useState("")
  const [allergies, setAllergies] = useState('')
  const [checkedState, setCheckedState] = useState(
    new Array(allergyOptions.length).fill(false)
  );

  const handleChange = (e) => {
    setQuery(e.target.value);
  }

  const handleDiet = (e) => {
    setDiet(e.target.value)
  }

  const handleAllergies = (position) => {
    const updatedCheckedState = checkedState.map((item, index) => 
      index === position ? !item : item
    )

    setCheckedState(updatedCheckedState)

    const chosenAllergies = []

    for(let i = 0; i < updatedCheckedState.length; i++) {
      if(updatedCheckedState[i]) {
        chosenAllergies.push(allergyOptions[i].id)
      }
    }

    const allergyQuery = chosenAllergies.join()

    setAllergies(allergyQuery)
    
  }


  const getRecipes = () => {

    fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&number=10&addRecipeInformation=true&ignorePantry=false&query=${query}&instructionsRequired=true&fillIngredients=true&diet=${diet}&intolerances=${allergies}`
    )
      .then((response) => response.json())
      .then((data) => {
        setRecipes(data.results);
      })
      .catch(() => {
        console.log("error")
      }) 
  }

  return (
    <div className="App">
      <h1>Find something new to eat!</h1>
      <h2>Put in your preferences (optional)</h2>
      <h3>Diet</h3> 
        {dietOptions.map((eachDiet) => {
          return (
            <DietOption key={eachDiet.id} id={eachDiet.id} title={eachDiet.title} dietState={diet} onChange={handleDiet} />
          )
        })}
      <h3>Intolerances:</h3>
        {allergyOptions.map((allergy, index) => {
          return (
            <AllergyOption key={allergy.id} id={allergy.id} title={allergy.title} onChange={() => handleAllergies(index)} checked={checkedState[index]} />
          )
        })}
      
      <input 
        type="text"
        placeholder="type in an ingredient you have"
        onChange={handleChange}
      /> 
      <Button variant="contained" onClick={getRecipes}>Get recipes</Button>
      <RecipeList recipeData={recipes}/>
    </div>
  );
}

export default App;
