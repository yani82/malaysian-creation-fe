export const addCategory = (category) => {
    
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/categories', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST', 
            body: JSON.stringify(category) 
        })
        .then(response => response.json())
        .then(category => dispatch({type: 'ADD_CATEGORY', payload: item}))
    }

} 