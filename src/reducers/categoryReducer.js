
export default function categoryReducer(state = {categories: []}, action) {    
    switch (action.type) {
        case 'FETCH_CATEGORIES': 
            return {categories: action.payload} 
        case 'ADD_CATEGORY':
            return {...state, categories: [...state.categories, action.payload]}
        default: 
            return state 
        // default: so you always return some version of your state 
    }
}

