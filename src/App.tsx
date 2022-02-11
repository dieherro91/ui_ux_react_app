import React from 'react';
import './App.css';

import {Footer,Blog,Features,Header,Possibility,WhatGPT3} from './containers'
import {CTA,Brand,Navbar,} from './components'

const App:React.FC =()=> {
   
  return (
    <div className="App">
      <div className='gradient_bg'>
        <Navbar/>
        <Header/>
      </div>
      <div>
        <Brand/>
        <WhatGPT3/>
        <Features/>
        <Possibility/>
        <CTA/>
        <Blog/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
