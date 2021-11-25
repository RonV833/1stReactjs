//first import the react packages as follows
import React from 'react';
import  ReactDOM from 'react-dom';
import './index.css';
import App from './App'; //component ./App no need for extension, component name App
//how to call the component App as parameter in reactDom.render <App/>
//document.getElementById("root") div id from index.html
//const message = <h1>This is my first React Js</h1>
ReactDOM.render( < App /> , document.getElementById("root")) 