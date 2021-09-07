import React, { Component } from 'react';
import './App.css';

import {
	BrowserRouter as Router,
	Route,
	Switch,
	Link
} from 'react-router-dom';

import ContactPage from './ContactPage';

const HomePage = () => <h1>Home Page</h1>;
//const ContactPage = () => <h1>Contact Page</h1>;
const LocationPage = () => <h1>Location Page</h1>;

class App extends Component {
  render() {
    return (
			  <div className="App">
				<header className="App-header">
					<h1>React Router</h1>
				</header>

				<Router>
					<div style={ {color: 'red'} }>
						<Link className="Link" to='/home'>Home</Link>						
						<Link className="Link" to='/contact'>Contact</Link>
						<Link className="Link" to='/location'>Location</Link>

						<Switch>
							<Route path="/home" component={HomePage} />
							<Route path="/contact" component={ContactPage} />
							<Route path="/location" component={LocationPage} />
						</Switch>
					</div>
				</Router>
			  </div>
    );
  }
}

export default App;
