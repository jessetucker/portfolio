import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import profile from './profile.svg';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import ShoppingList from './ShoppingList';

// const el = <ShoppingList name="Beni" />

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={profile} className="App-logo" alt="logo" />
        <h1 className="title">
          Jesse Tucker III
        </h1>
        <p>
          Software Developer
        </p>
      </header>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
