import RecipeCard from './RecipeCard'
function RecipeList({ recipes, onSelectRecipe }) {
    if (!recipes || recipes.length === 0) {
        return (
            <p style={{ marginTop: '20px' }}>
                No matching recipes found. Try another search or filter.
            </p>
        )
    }
    return (
        <div className="recipes-grid">
            {recipes.map((recipe) => (
                <RecipeCard
                    key={recipe.id}
                    recipe={recipe}
                    onSelect={onSelectRecipe}
                />
            ))}
        </div>
    )
}
export default RecipeList