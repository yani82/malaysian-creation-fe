
export default function categoryReducer(state = {categories: []}, action) {    
    switch (action.type) {
        case 'FETCH_CATEGORIES': 
            return {...state, categories: action.payload}
        case 'ADD_CATEGORY':
            return {...state, categories: [...state.categories, action.payload]}
        case 'ADD_ITEM': 
            let categories = state.categories.map(category => {
                if (category.id === action.payload.category_id) {
                    return {...category, items: [...category.items, action.payload]}
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
    case 'EDIT_CATEGORY':
        let categoryEdit = state.categories.map(category => {
            if (category.id === action.payload.id) {
                return action.payload
            } else {
                return category 
            }
        })
        return {...state, categories: categoryEdit}
    case 'FETCH_ITEMS': 
        return {...state, items: action.payload} 
    case 'SORT_ITEMS': 
        const {sortType} = action.payload
        // Sort by name
        state.items.sort(function(a, b) {
            if(a.name.toLowerCase() < b.name.toLowerCase()) return -1;
            if(a.name.toLowerCase() > b.name.toLowerCase()) return 1;
            return 0; 
        })
        // Sort by id
        state.id.sort(
            (a, b) => {
                
                return a.id - b.id 
            })   
        return {
            ...state,
            id: [...state.id]
        }
    default: 
        return state
        // default: so you always return some version of your state 
    }
}

