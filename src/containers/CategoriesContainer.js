import React from 'react';
import {connect} from 'react-redux';
import { fetchCategories } from '../actions/fetchCategories'; 
import Categories from '../components/Categories';
import CategoryInput from '../components/CategoryInput';

class CategoriesContainer extends React.Component {

    componentDidMount() {
        this.props.fetchCategories()
    }

    render() {
        return (
            <div>
                <CategoryInput />
                <Categories categories={this.props.categories}/> 
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        categories: state.categories 
    }
}

// dispatch({type})
export default connect(mapStateToProps, {fetchCategories})(CategoriesContainer); 
