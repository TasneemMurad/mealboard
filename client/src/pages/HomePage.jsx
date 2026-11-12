import {useState} from 'react'
import {mockData} from '../mockData'
import FilterControls from '../components/FilterControls'
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
    <FilterControls
    searchText={searchText}
    onSearchChange={setSearchText}
    selectedCuisine={selectedCuisine}
    onCuisineChange={setSelectedCuisine}
    sortOrder={sortOrder}
    onSortChange={setSortOrder}
    />
    <ul>
        {sortedRecipes.map((recipe) => (
            <li key={recipe.id}>{recipe.title} ({recipe.prepTime}min)</li>
        ))}
        </ul>
    </div>)
}
export default HomePage