function RecipeBrief({ recipe, onClose }) {
    if (!recipe) return null;

    return (
        <div className="brief-backdrop" onClick={onClose}>
            <div className="brief-card" onClick={(e) => e.stopPropagation()}>
                <button className="brief-back" onClick={onClose} aria-label="Back to recipes">
                    ← Back
                </button>

                <img
                    src={recipe.imageUrl}
                    alt={recipe.title}
                    className="brief-img"
                />

                <div className="brief-body">
                    <div className="brief-tags">
                        <span className="brief-tag">{recipe.cuisine}</span>
                        <span className="brief-tag">{recipe.difficulty}</span>
                        <span className="brief-tag">{recipe.prepTime} mins</span>
                        <span className="brief-tag">{recipe.rating} / 5</span>
                    </div>

                    <h2>{recipe.title}</h2>
                    <p className="brief-author">
                        By <strong>{recipe.authorName}</strong>
                    </p>
                    <p className="brief-desc">{recipe.description}</p>

                    <div className="brief-ingredients">
                        <h3>Ingredients</h3>
                        <ul>
                            {recipe.ingredients.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RecipeBrief;