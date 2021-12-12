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
import Footer from "../components/Footer";

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
                    <Route exact path='/items' render={(routerProps) => <Items {...routerProps} items={this.props.items} /> } />
                </switch>
                <Footer />
            </div>  
            
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
