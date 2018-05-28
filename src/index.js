import React from 'react';
import ReactDOM from 'react-dom';

import './app.css';

const title = "hello mottorolla!";
const aboutUs = "hello about us!";

let y = document.getElementById('app');
if(y)
  ReactDOM.render(<div>{title}</div>, document.getElementById('app'));

let x = document.getElementById('about-us');

if(x)
  ReactDOM.render(<div>{aboutUs}</div>, document.getElementById('about-us'));

module.hot.accept();