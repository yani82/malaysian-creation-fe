import React from 'react';
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import {fetchCategories} from '../actions/fetchCategories'; 
import Categories from '../components/Categories';
import Category from '../components/Category';
import CategoryInput from '../components/CategoryInput';

class CategoriesContainer extends React.Component {

    componentDidMount() {
        this.props.fetchCategories()
    }

    render() {
        return (
            <div>
                <switch>
                    <Route path='/categories/new' component={CategoryInput}/>
                    <br/>
                    <Route path='/categories/:id' render={(routerProps) => <Category {...routerProps} categories={this.props.categories} /> } />
                    <Route exact path='/categories' render={(routerProps) => <Categories {...routerProps} categories={this.props.categories} /> } />
                </switch>
            </div>
            // switch: returns the first path that matches, it makes sure that we only see the new route
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
