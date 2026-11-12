import {useState} from 'react'
import {mockData} from '../mockData'
function HomePage() {
    const [recipes , setRecipes]= useState(mockData);
   return( <div> 
    <h1>Home</h1> 
    <p>{recipes.length} recipes</p>
    <ul>
        {recipes.map((recipe) => (
            <li key={recipe.id}>{recipe.title}</li>
        ))}
        </ul>
    </div>)
}
export default HomePage