export function fetchItems() {
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/items`)
        .then(response => response.json())
        .then(items => dispatch({
            type: 'FETCH_ITEMS', 
            payload: items
        }))
    }
}