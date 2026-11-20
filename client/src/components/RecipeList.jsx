import RecipeCard from './RecipeCard'
function RecipeList({recipes}) {
    if(!recipes || recipes.length === 0){
        return (
            <p style={{marginTop: '20px'}}>
                No matching recipes found. Try another search or filter.
                </p>
        )
    }
    return (
        <div
        style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '20px',
            marginTop: '20px',
        }}
        >
     {recipes.map((recipe) => (<RecipeCard key={recipe.id}recipe={recipe}/> ))}
     </div>
    )
}
export default RecipeList