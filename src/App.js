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

import Nav from "./components/nav";

import myPhoto from "./photo.png";


import * as d3 from "d3";


// const HomePage = () => <h1>Home</h1>;

class App extends Component {

	constructor() {
		super();
		this.state = {
			selectedMenu : 'about-me'
		};

		this.menuItems = [
			{id: "about-me", name: "Personal Profile", route: "/about-me"},
			{id: "pers-skills", name: "Personal Skills", route: "/pers-skills"},
			{id: "prof-skills", name: "Professional Skills", route: "/prof-skills" },
			{id: "work-exp", name: "Work Experience", route: "/work-exp"},
			{id: "education", name: "Educational History", route: "/education"},
			{id: "contact", name: "Contact Me", route: "/contact"}
		];
	}

	componentDidMount() {
		// d3.select("body").transition().style("background-color", "blue");
		// d3.selectAll(".ContentInside").style("color", "red");

		// var t = d3.transition().duration(6000);

		// d3.select("body")
		// .transition(t)
		// .style("background-color", "orange");

		// d3.select("body")
		// .transition()
		// .delay(4000)
		// // .each("start", function() { d3.select(this).style("background-color", "green"); })
		// .style("background-color", "red");
	}

	clickHandler(selectedItem) {
		this.setState({selectedMenu: selectedItem});
	}

	// getMenuLinks() {
	// 	return this.menuItems.map((eachItem, index) => {

	// 		var selectionClass = "NormalMenu";
	// 		if(this.state.selectedMenu === eachItem.id) {
	// 			selectionClass = "SelectedMenu";
	// 		}

	// 		return <Link key={index} id={eachItem.id} onClick={this.clickHandler.bind(this, eachItem.id)} className={selectionClass} to={eachItem.route}>{eachItem.name}</Link>
	// 	});
	// }

	render() {
		// console.log("RENDER : ", process.env.PUBLIC_URL);
		// console.log("env : ", process.env);

		return (
				<div className="App">
					<Router basename='/profile'>

						<div className="App-header">
							<div className="headerLeft"><img src={myPhoto} width="100" border="0" alt="photo" /></div>

							<div className="headerRight">
								<h1>ASHLY THOMAS ABRAHAM</h1>
								<div>&#160;</div>
								<h3>Full Stack Developer</h3>
							</div>						
						</div>

						<div className="App-navigation">
							<Nav>
								{/* {
									this.getMenuLinks()
								} */}
							</Nav>
						</div>

						<div className="App-content">
							<Switch>
								<Route exact path="/" component={PersonalProfile} />
								<Route path="/about-me" component={PersonalProfile} />
								<Route path="/pers-skills" component={PersonalSkills} />
								<Route path="/prof-skills" component={ProfessionalSkills} />
								<Route path="/work-exp" component={WorkExperience} />
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
