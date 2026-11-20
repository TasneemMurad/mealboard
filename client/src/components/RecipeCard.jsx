function RecipeCard({ recipe }) {
    return (
        <div className="recipe-card">
            <img src={recipe.imageUrl} alt={recipe.title} />
            <h2>{recipe.title}</h2>
            <p>{recipe.description}</p>
            <div className="recipe-meta">
                <span><strong>Cuisine:</strong> {recipe.cuisine}</span>
                <span>•</span>
                <span><strong>Difficulty:</strong> {recipe.difficulty}</span>
                <span>•</span>
                <span><strong>Prep Time:</strong> {recipe.prepTime} mins</span>
            </div>
            <span> <strong> Rating:</strong> {recipe.rating} / 5 • <strong>By {recipe.authorName}</strong></span>
        </div>
    )
}

export default RecipeCard;