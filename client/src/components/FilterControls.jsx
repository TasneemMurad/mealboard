function FilterControls({
    searchText,
    onSearchChange,
    selectedCuisine,
    onCuisineChange,
    sortOrder,
    onSortChange,
}) {
   return( <div> 
    <input
    type="text"
    placeholder="Search recipes..."
    value={searchText}
    onChange={(e) => onSearchChange(e.target.value)}/>
    <select
    value={selectedCuisine}
    onChange={(e) => onCuisineChange(e.target.value)}
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
    onChange={(e) => onSortChange(e.target.value)}
    >
        <option value="none">No sorting</option>
        <option value="fast">Prep time: shortest first</option>
        <option value="slow">Prep time: longest first</option>
        </select>
    </div>)
}
export default FilterControls