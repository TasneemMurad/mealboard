import {useState} from 'react'
import {mockData} from '../mockData'
function HomePage() {
    const [recipes , setRecipes]= useState(mockData);
    const [searchText , setSearchText] = useState('');
    const [selectedCuisine , setSelectedCuisine] = useState('All');
    const [sortOrder , setSortOrder] = useState('none');
    const filteredRecipes = recipes.filter((recipe) => {const matchesSearch = recipe.title.toLowerCase().includes(searchText.toLowerCase())
    const matchesCuisine = selectedCuisine === 'All' || recipe.cuisine === selectedCuisine
      return matchesSearch && matchesCuisine
          })
    const sortedRecipes = [...filteredRecipes]
    if (sortOrder === 'fast') {
        sortedRecipes.sort((a,b) => a.prepTime - b.prepTime)
    } else if (sortOrder === 'slow') {
        sortedRecipes.sort((a,b) => b.prepTime - a.prepTime)
    }
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
    <select
    value={sortOrder}
    onChange={(e) => setSortOrder(e.target.value)}
    >
        <option value="none">No sorting</option>
        <option value="fast">Prep time: shortest first</option>
        <option value="slow">Prep time: longest first</option>
        </select>
    <ul>
        {sortedRecipes.map((recipe) => (
            <li key={recipe.id}>{recipe.title} ({recipe.prepTime}min)</li>
        ))}
        </ul>
    </div>)
}
export default HomePage