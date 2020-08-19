import React from 'react';
import ReactDOM from 'react-dom';
import './app.css';
import logo from '../public/logo.png'; 
import HomeView from './views/Home';

class App extends React.Component {	
  render() {
    return (
    <div>
      <HomeView/>
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
