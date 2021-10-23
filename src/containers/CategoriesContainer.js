import React from 'react';
import Categories from '../components/Categories';
import CategoryInput from '../components/CategoryInput';


class CategoriesContainer extends React.Component {
    render() {
        return (
            <div>
                <CategoryInput />
                <Categories /> 
            </div>
        )
    }
}

export default CategoriesContainer; 
