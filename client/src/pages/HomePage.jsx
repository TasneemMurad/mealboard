import {useState} from 'react'
import {mockData} from '../mockData'
function HomePage() {
    const [recipes , setRecipes]= useState(mockData);
    const [searchText , setSearchText] = useState('');
    const filteredRecipes = recipes.filter((recipe) => recipe.title.toLowerCase().includes(searchText.toLowerCase()))
   return( <div> 
    <h1>Home</h1> 
    <p>{filteredRecipes.length} recipes</p>
    <input
    type="text"
    placeholder="Search recipes..."
    value={searchText}
    onChange={(e) => setSearchText(e.target.value)}/>
    <ul>
        {filteredRecipes.map((recipe) => (
            <li key={recipe.id}>{recipe.title}</li>
        ))}
        </ul>
    </div>)
}
export default HomePage