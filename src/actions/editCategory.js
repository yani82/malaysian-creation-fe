export const editCategory = (data) => {
     
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/categories/${data.id}`, {
            headers: {
                'Content-Type': 'application/json', 
                'Accept': 'application/json'
            },
            method: 'PATCH',
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(category => dispatch({type: 'EDIT_CATEGORY', payload: category}))
    }
}