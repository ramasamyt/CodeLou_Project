// first step is import react.
import React, {Component} from 'react';
// importy react router dom


import './App.css';

//URL for the API in below line for Endpoint 2
const APII = 'https://hn.algolia.com/api/v1/search?query=';
const DEFAULT_QUERY = 'redux';

class App1 extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          hits: [],
        };
      }
    
      componentDidMount() {
        fetch(APII + DEFAULT_QUERY)
          .then(response => response.json())
          .then(data => this.setState({ hits: data.hits }));
      }
      render() {
        const { hits } = this.state;
    
        return (
    <div>
            <div className="container">
                <div className='tc'>
                    <h1 className='f1'>Redux Links</h1>
                    <p className='f4'>Click the links to go to the page </p>
                 
                </div>
            </div>
    
          
          <ul>
            {hits.map(hit =>
            
              <li key={hit.objectID}>
                <a href={hit.url}>{hit.title}</a>
              </li>
            )}
          </ul>
          </div>
        );
      }
    }
    
    

    

//Export App (always at the end of App.js code)
export default App1;