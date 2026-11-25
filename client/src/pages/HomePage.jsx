import { useState, useEffect, useRef } from 'react';
import { mockData } from '../mockData';
import RecipeList from '../components/RecipeList';
import RecipeBrief from '../components/RecipeBrief';
import '../App.css';

function HomePage({ searchText, selectedCuisine, sortOrder, onResetFilters }) {
  const [recipes] = useState(mockData);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const resultsRef = useRef(null);

  const isFiltering =
    searchText.trim() !== '' || selectedCuisine.length > 0 || sortOrder !== 'none';

  useEffect(() => {
    if (isFiltering && resultsRef.current && window.scrollY < 250) {
      const yOffset = window.innerWidth <= 768 ? -115 : -85;
      const y = resultsRef.current.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }, [searchText, selectedCuisine, sortOrder, isFiltering]);

  const filteredRecipes = recipes.filter((recipe) => {
    const matchesSearch = recipe.title.toLowerCase().includes(searchText.toLowerCase());
    const matchesCuisine =
      selectedCuisine.length === 0 || selectedCuisine.includes(recipe.cuisine);
    return matchesSearch && matchesCuisine;
  });

  const sortedRecipes = [...filteredRecipes];

  if (sortOrder === 'fast') {
    sortedRecipes.sort((a, b) => a.prepTime - b.prepTime);
  } else if (sortOrder === 'slow') {
    sortedRecipes.sort((a, b) => b.prepTime - a.prepTime);
  }

  return (
    <div ref={resultsRef} className="recipes-section">
      <div className="recipes-section-header">
        {isFiltering ? (
          <p className="results-status">
            Showing <strong>{sortedRecipes.length}</strong>{' '}
            {sortedRecipes.length === 1 ? 'recipe' : 'recipes'}
          </p>
        ) : (
          <h2 className="section-title">Explore All Recipes</h2>
        )}
      </div>

      {sortedRecipes.length === 0 ? (
        <div className="empty-state-box">
          <div className="empty-state-icon">🍽️</div>
          <h3>No matching recipes found</h3>
          <p>Try adjusting your search or clearing the active filters.</p>
          {isFiltering && (
            <button type="button" className="empty-reset-btn" onClick={onResetFilters}>
              Clear all filters
            </button>
          )}
        </div>
      ) : (
        <RecipeList
          recipes={sortedRecipes}
          onSelectRecipe={setSelectedRecipe}
        />
      )}

      <RecipeBrief
        recipe={selectedRecipe}
        onClose={() => setSelectedRecipe(null)}
      />
    </div>
  );
}

export default HomePage;