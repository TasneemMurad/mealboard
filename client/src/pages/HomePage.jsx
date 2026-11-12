import {useState} from 'react'
import {mockData} from '../mockData'
function HomePage() {
    const [recipes , setRecipes]= useState(mockData);
    const [searchText , setSearchText] = useState('');
    const [selectedCuisine , setSelectedCuisine] = useState('All');
    const filteredRecipes = recipes.filter((recipe) => {const matchesSearch = recipe.title.toLowerCase().includes(searchText.toLowerCase())
    const matchesCuisine = selectedCuisine === 'All' || recipe.cuisine === selectedCuisine
      return matchesSearch && matchesCuisine
          })
    
   return( <div> 
    <h1>Home</h1> 
    <p>{filteredRecipes.length} recipes</p>
    <input
    type="text"
    placeholder="Search recipes..."
    value={searchText}
    onChange={(e) => setSearchText(e.target.value)}/>
    <select
    value={selectedCuisine}
    onChange={(e) => setSelectedCuisine(e.target.value)}
    >
    <option value="All">All cuisines</option>
    <option value="Italian">Italian</option>
    <option value="Japanese">Japanese</option>
    <option value="Russian">Russian</option>
    <option value="Indian">Indian</option>
    <option value="Mexican">Mexican</option>
    <option value="French">French</option>
    <option value="Middle Eastern">Middle Eastern</option>
    <option value="Palestinian">Palestinian</option>
    </select>
    <ul>
        {filteredRecipes.map((recipe) => (
            <li key={recipe.id}>{recipe.title}</li>
        ))}
        </ul>
    </div>)
}
export default HomePage