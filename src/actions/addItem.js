export const addItem = (item, categoryId) => {

    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/categories/${categoryId}/items`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify(item) 
        })
        .then(response => response.json())
        .then(item => dispatch({type: 'ADD_ITEM', payload: item}))
    }

}