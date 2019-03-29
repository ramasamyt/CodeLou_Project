// Home page code here

import React from 'react';
import './App.css';

//const select = document.getElementById('breeds');
const card = document.querySelector('.card');
//const form = document.querySelector('form');

const Home = () => (
    <div className='tc'>
    <div className="home-content">
    <h1 className='f1'>WELCOME TO REVIEW APP</h1>
    <h4 className='f3'>Login (Top Left) to Enter the App</h4>
    <p className='f2'>(Or Click "Product List" to view the products)</p>
    <p className='f4'>Refresh the page to get random "PARIS" pictures from API </p>
    <div class="card"> 
    
    <img alt = 'image' src={'https://loremflickr.com/g/400/400/paris'} />
    
   </div>
    </div>
    </div>    
)



export default Home;
