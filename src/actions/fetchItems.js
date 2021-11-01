export function fetchItems(categoryId) {
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/categories/${categoryId}/items`)
        .then(response => response.json())
        .then(items => dispatch({
            type: 'FETCH_ITEMS', 
            payload: items
        }))
    }
}