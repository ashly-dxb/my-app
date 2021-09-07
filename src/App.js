import React, { Component } from 'react';
import './App.css';

import {
	BrowserRouter as Router,
	Route,
	Switch,
	Link
} from 'react-router-dom';

import PersonalProfile 		from './personalprofile';
import PersonalSkills 		from './personalskills';
import ProfessionalSkills 	from './professionalskills';
import WorkExperience 		from './workexperience';
import Education 			from './education';
import Contact 				from './contact';

// const HomePage = () => <h1>Home</h1>;

class App extends Component {
  render() {
    return (
			  <div className="App">
				  	<Router>

						<div className="App-header">
							<h1>ASHLY THOMAS ABRAHAM</h1>
							<h3>SOFTWARE ARCHITECT</h3>							
						</div>

						<div className="App-navigation">
							<Link className="Link" to='/personal'>Personal Profile</Link>
							<Link className="Link" to='/personal-skills'>Personal Skills</Link>
							<Link className="Link" to='/professional-skills'>Professional Skills</Link>
							<Link className="Link" to='/work'>Work Experience</Link>
							<Link className="Link" to='/education'>Educational History</Link>
							<Link className="Link" to='/contact'>Contact Me</Link>							
						</div>

						<div className="App-content">
							<Switch>
								<Route path="/personal" component={PersonalProfile} />
								<Route path="/personal-skills" component={PersonalSkills} />
								<Route path="/professional-skills" component={ProfessionalSkills} />
								<Route path="/work" component={WorkExperience} />
								<Route path="/education" component={Education} />
								<Route path="/contact" component={Contact} />
							</Switch>
						</div>

					</Router>
			  </div>
    );
  }
}

export default App;
