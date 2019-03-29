// first step is import react.
import React, {Component} from 'react';
// importy react router dom
import {
    BrowserRouter,
    Route
} from 'react-router-dom';
// import app components
// ReviewList contains one component with one review
import ReviewList from '../Components/ReviewList';
// SearchBox has search box codes 
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
// products.js has all product reviews
//import products from '../Components/products';
import ErrorBoundry from '../Components/ErrorBoundry';
// importing app.css file
import './App.css';
//import RestController from './RestController';

// STATE is an object describes the application
// Smart component


class App extends Component {
    constructor () {
        // state has products and search field
        // [] placeholder for data from API OR file location
        super()
        this.state = {
            products: [],
            searchfield: ''
        }
    }
        // API link below
        // Make request here


    componentDidMount() {
      
       // --- READ FROM API --- 
       // GET Request
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=> response.json())
            // below one updates the website page
            .then(user=> this.setState({products: user}));
        
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})  
    }

    render () {
        const {products, searchfield} = this.state;
        const filteredProducts = products.filter(product => {
            //return product.name.toLowerCase().includes(searchfield.toLowerCase());
            return product.name.includes(searchfield);
        })

        //error message below, for 0 products
        //! - means, if this is not TRUE
        if (!products.length) {
            return <h2>Loading...</h2>
        } else {

    // will show review list 
    // tc - text center
    // f1 - size of the text (logo)
    // f3 - font size of h4
    // Scroll for keeping the search in all views
    // Router included below
    return (
        <BrowserRouter>
            <div className="container">
                <div className='tc'>
                    <h1 className='f1'>List of Products</h1>
                    <p className='f4'>Refresh the page to change the pictures from API Endpoint 1 </p>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <ErrorBoundry>
                    <ReviewList products={filteredProducts}/>
                        </ErrorBoundry>
                    </Scroll>
                </div>
            </div>
        </BrowserRouter>
    );
    }
}
}

//Export App (always at the end of App.js code)
export default App;