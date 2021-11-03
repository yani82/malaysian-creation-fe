import React from 'react';
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import {fetchCategories} from '../actions/fetchCategories';  
import {fetchItems} from '../actions/fetchItems'; 
import Categories from '../components/Categories';
import Category from '../components/Category';
import CategoryInput from '../components/CategoryInput';
import Items from '../components/Items';
import Home from '../components/Home'
import NavBar from "../components/NavBar";

class CategoriesContainer extends React.Component {

    componentDidMount() {
        this.props.fetchCategories();
        this.props.fetchItems();
    }

    render() {
        return (
            <div>
                <NavBar />
                <switch>
                    <Route exact path='/' render={props => (<Home {...props} />)}/>
                    <Route path='/categories/new' component={CategoryInput}/>
                    <br/>
                    <Route path='/categories/:id' render={(routerProps) => <Category {...routerProps} categories={this.props.categories} /> } />
                    <Route exact path='/categories' render={(routerProps) => <Categories {...routerProps} categories={this.props.categories} /> } />
                    {/* <Route exact path='/categories/:id/items' render={(routerProps) => <Items {...routerProps} items={this.props.items} /> } /> */}
                    <Route exact path='/items' render={(routerProps) => <Items {...routerProps} items={this.props.items} /> } />
                </switch>
            </div>
            // switch: returns the first path that matches, it makes sure that we only see the new route
        )
    }
}

const mapStateToProps = state => {
    return {
        categories: state.categories,
        items: state.items  
    }
}

export default connect(mapStateToProps, {fetchCategories, fetchItems})(CategoriesContainer); 
