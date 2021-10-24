import React from 'react';
import {connect} from 'react-redux';
import {Route} from 'react-router-dom';
import {fetchCategories} from '../actions/fetchCategories'; 
import Categories from '../components/Categories';
import CategoryInput from '../components/CategoryInput';

class CategoriesContainer extends React.Component {

    componentDidMount() {
        this.props.fetchCategories()
    }

    render() {
        return (
            <div>
                <Route path='/categories/new' component={CategoryInput}/>
                <br/>
                <Route path='/categories' render={() => <Categories categories={this.props.categories} /> } />
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
