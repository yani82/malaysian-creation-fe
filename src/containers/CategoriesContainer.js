import React from 'react';
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import {fetchCategories} from '../actions/fetchCategories';  
import {fetchItems} from '../actions/fetchItems';
import Categories from '../components/Categories';
import Category from '../components/Category';
import CategoryInput from '../components/CategoryInput';
import Items from '../components/Items';
import Home from '../components/Home';
import NavBar from "../components/NavBar";

class CategoriesContainer extends React.Component {

    componentDidMount() {
        this.props.fetchCategoriesWithRedux();
        this.props.fetchItemsWithRedux();
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
            // switch: returns the first path that matches, it makes sure that we only see the new route, don't need to use 'exact' 
            //  deconstruction 
            // routerProps is coming react-router-dom Route component, allows your to traverse/ can use any functions to navigate by code, also access URL, params :id 
            
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchCategoriesWithRedux: () => {

            return dispatch(fetchCategories())
        }, 
        fetchItemsWithRedux: () => {
            return dispatch(fetchItems())
        }
    }
}

const mapStateToProps = globalState => {
    return {
        categories: globalState.categories,
        items: globalState.items  
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesContainer);
// connect to redux, working with the provider, the global state and dispatch function to send action to reducer (updates reducer)
// MSP works with the GLOBAL STATE 
// MDP access redux dispatch function, makes a COPY of those action creators that copy is connected to Redux because it has access dispatch function 
// MSP and MDP returns object to component through props 
