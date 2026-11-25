function RecipeCard({ recipe, onSelect }) {
  return (
    <div className="recipe-card" onClick={() => onSelect(recipe)}>
      <img src={recipe.imageUrl} alt={recipe.title} />

      <div className="recipe-card-body">
        <h2>{recipe.title}</h2>

        <div className="recipe-meta-row">
          <span className="meta-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7v5l3 2" strokeLinecap="round" />
            </svg>
            {recipe.prepTime} min
          </span>

          <span className="meta-item">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <rect x="4" y="14" width="3" height="6" rx="1" />
              <rect x="10.5" y="9" width="3" height="11" rx="1" opacity={recipe.difficulty === 'Easy' ? 0.3 : 1} />
              <rect x="17" y="4" width="3" height="16" rx="1" opacity={recipe.difficulty === 'Hard' ? 1 : 0.3} />
            </svg>
            {recipe.difficulty}
          </span>

          <span className="meta-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <circle cx="12" cy="12" r="9" />
              <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
            </svg>
            {recipe.cuisine}
          </span>
        </div>

        <div className="recipe-rating-row">
          <div className="stars-group" aria-label={`Rating: ${recipe.rating} out of 5`}>
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={star <= recipe.rating ? 'star filled' : 'star'}
              >
                ★
              </span>
            ))}
          </div>
          <span className="rating-score">{recipe.rating.toFixed(1)}</span>
          <span className="recipe-author">By {recipe.authorName}</span>
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;