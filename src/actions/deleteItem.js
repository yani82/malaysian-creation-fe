export const deleteItem = (itemId) => {

    return (dispatch) => {
        return fetch(`http:localhost:3000/api/v1/items/${itemId}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(category => dispatch({type: 'DELETE_ITEM', payload: category}))
    }
}
