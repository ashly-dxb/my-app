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

	constructor() {
		super();
		this.state = {
			selectedMenu : 'personal_profile'
		};

		this.menuItems = [
			{id: "personal_profile", name: "Personal Profile", route: "/personal"},
			{id: "personal_skills", name: "Personal Skills", route: "/personal_skills"},
			{id: "professional_skills", name: "Professional Skills", route: "/professional_skills" },
			{id: "work_experience", name: "Work Experience", route: "/work_experience"},
			{id: "education", name: "Educational History", route: "/education"},
			{id: "contact", name: "Contact Me", route: "/contact"}
		];
	}

	clickHandler(selectedItem) {
		this.setState({selectedMenu: selectedItem});
	}

	getMenuLinks() {
		return this.menuItems.map((eachItem, index) => {

			var selectionClass = "Menu";
			if(this.state.selectedMenu === eachItem.id) {
				selectionClass = "SelectedMenu";
				// console.log("selection", this.state.selectedMenu);
			}

			return <Link key={index} id={eachItem.id} onClick={this.clickHandler.bind(this, eachItem.id)} className={selectionClass} to={eachItem.route}>{eachItem.name}</Link>
		});
	}

	render() {
		console.log("RENDER", process.env.PUBLIC_URL);

		return (
				<div className="App">
						<Router>

							<div className="App-header">
								<h1>ASHLY THOMAS ABRAHAM</h1>
								<h3>SOFTWARE ARCHITECT</h3>							
							</div>

							<div className="App-navigation">
								{
									this.getMenuLinks()
								}							
							</div>

							<div className="App-content">
								<Switch>
									<Route path={process.env.PUBLIC_URL + "/"} component={PersonalProfile} />
									<Route path={process.env.PUBLIC_URL + "/personal"} component={PersonalProfile} />
									<Route path={process.env.PUBLIC_URL + "/personal_skills"} component={PersonalSkills} />
									<Route path={process.env.PUBLIC_URL + "/professional_skills"} component={ProfessionalSkills} />
									<Route path={process.env.PUBLIC_URL + "/work_experience"} component={WorkExperience} />
									<Route path={process.env.PUBLIC_URL + "/education"} component={Education} />
									<Route path={process.env.PUBLIC_URL + "/contact"} component={Contact} />
								</Switch>
							</div>

						</Router>
				</div>
		);
	}
}

export default App;
