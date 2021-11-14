// import React, { Component } from 'react'
// import {fetchItems} from '../actions/fetchItems'; 
// import {Route, Switch} from 'react-router-dom';
// import ItemsList from '../components/ItemsList';
// import Items from '../components/Items';
// import {connect} from 'react-redux';

// class ItemsListContainer extends Component {
//      componentDidMount() {
//         this.props.fetchItems()
        
//     }

//     render() {
//         return (
//             <div>
//                 <Items items={this.props.items && this.props.items}/>
//                 <switch>
//                 <Route exact path='/items' render={(routerProps) => <ItemsList {...routerProps} items={this.props.items} /> } />
//                 </switch>
//             </div>
//         )
//     }
// }

// const mapStateToProps = state => {
//     return {
//         items: state.items 
//     }
// }

// export default connect(mapStateToProps, {fetchItems})(ItemsListContainer); 
