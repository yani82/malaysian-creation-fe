
export default function categoryReducer(state = {categories: []}, action) {   
    // debugger;  
    switch (action.type) {
        case 'FETCH_CATEGORIES': 
            return {categories: action.payload} 
        case 'ADD_CATEGORY':
            return {...state, categories: [...state.categories, action.payload]}
        case 'ADD_ITEM': 
            let categories = state.categories.map(category => {
                if (category.id === action.payload.id) {
                    return action.payload
                } else {
                    return category 
                }
            })
            return {...state, categories: categories}
        case 'DELETE_ITEM': 
        let categoryDel = state.categories.map(category => {
            if (category.id === action.payload.id) {
                return action.payload
            } else {
                return category 
            }
        })
        return {...state, categories: categoryDel}
        default: 
            return state 
        // default: so you always return some version of your state 
    }
}

