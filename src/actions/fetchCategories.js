export function fetchCategories() {
    return (dispatch) => {
        console.log("c")
        fetch('http://localhost:3000/api/v1/categories')
        .then(response => response.json())
        .then(categories => { 
            console.log("d")
            dispatch({
            type: 'FETCH_CATEGORIES', 
            payload: categories
        })})
    }
}
