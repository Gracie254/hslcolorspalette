import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyComponent  from './colors-component/color-palette';
import reportWebVitals from './reportWebVitals';

function App() {
  return (
    <div className="App">
      <h1>My Color Palette Generator</h1>
   <MyComponent />
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
