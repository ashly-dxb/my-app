import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Navigation = styled.header`
  width: 100%;
  z-index: 1;
  display: flex;
  // border: 1px solid green;
 
  margin : auto;
  // padding: 10px 20px;
  background-color: #191919;
  color: white;

  .fa-bars {
    display: none;
    color: white;
    font-size: 1.7rem;
  }

  .fa-close {
    display: none;
    color: white;
    font-size: 1.7rem;
  }

  nav {
    ul {
      display: flex;
    }

    li {
      margin: 0 12px;
      font-size: 1em;
    }

    a {
      font-size: 1em;
      text-decoration: none;
      .active {
        color: green;
      }
    }

    a.active {
      color: red;
    }
  }

  @media only screen and (max-width: 1100px) {

    nav {
      ul {
        display: flex;
      }
  
      li {
        margin: 0 6px;
        font-size: 0.8em;
        // border: 1px solid blue;
      }
  
      a {
        font-size: 1em;
        text-decoration: none;
        .active {
          color: green;
        }
      }
  
      a.active {
        color: red;
      }
    }

  }

  @media only screen and (max-width: 890px) {

    nav {
      ul {
        display: flex;
      }
  
      li {
        margin: 0 3px;
        font-size: 0.7em;
        // border: 1px solid red;
      }
  
      a {
        font-size: 1em;
        text-decoration: none;
        .active {
          color: green;
        }
      }
  
      a.active {
        color: red;
      }
    }

  }

  @media only screen and (max-width: 670px) {

    // height: auto;
    // min-height: 50px;
    // display: block;
    position: relative;

    // border: 1px solid green;

    nav {
      ul {
        display: flex;
      }
  
      li {
        margin: 0 3px;
        font-size: 0.7em;
        // border: 1px solid red;
      }
  
      a {
        // font-size: 1em;
        text-decoration: none;
        .active {
          color: green;
        }
      }
  
      a.active {
        color: red;
      }
    }

  }

  @media only screen and (max-width: 576px) {
    height: auto;
    min-height: 50px;
    display: block;
    position: relative;

    .fa-bars {
      display: inline-block;
      position: absolute;
      top: 10px;
      right: 10px;
      cursor: pointer;
    }

    ul.collapsed {
      width: 90%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex-wrap: wrap;

      overflow: hidden;
      max-height: 0;

      -moz-transition-duration: 0.1s;
      -webkit-transition-duration: 0.1s;
      -o-transition-duration: 0.1s;
      transition-duration: 0.1s;
      -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
      -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
      -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
      transition-timing-function: cubic-bezier(0, 1, 0.5, 1);

      &.is-expanded {
        overflow: hidden;
        max-height: 500px; /* approximate max height */

        -moz-transition-duration: 0.1s;
        -webkit-transition-duration: 0.1s;
        -o-transition-duration: 0.1s;
        transition-duration: 0.1s;
        -moz-transition-timing-function: ease-in;
        -webkit-transition-timing-function: ease-in;
        -o-transition-timing-function: ease-in;
        transition-timing-function: ease-in;
      }

      li {
        padding: 15px 10px;
        margin: 0px 0px;
        // width: 70%;

        font-size: 0.9em;
      }
    }
  }
`;



class Nav extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isExpanded : false,
      // selectedMenu : 'about-me'
      selectedMenu : ''
    };

    this.menuItems = [
			{id: "about-me", name: "About Me", route: "/about-me"},
			{id: "pers-skills", name: "Personal Skills", route: "/pers-skills"},
			{id: "prof-skills", name: "Professional Skills", route: "/prof-skills" },
			{id: "work-exp", name: "Work Experience", route: "/work-exp"},
			{id: "education", name: "Educational History", route: "/education"},
			{id: "contact", name: "Contact Me", route: "/contact"}
		];
  }

  handleToggle(e) {
    e.preventDefault();
    this.setState({
      isExpanded: !this.state.isExpanded
    });
  }

  clickHandler(selectedItem) {
		this.setState({
      selectedMenu: selectedItem,
      isExpanded: false
    });
	}

  getMenuLinks2() {
      return this.menuItems.map((eachItem, index) => {

        var selectionClass = "NormalMenu";
        if(this.state.selectedMenu === eachItem.id) {
          selectionClass = "SelectedMenu";
        }

        return <NavLink key={index} id={eachItem.id} className={selectionClass} activeClassName="SelectedMenu" to={eachItem.route} onClick={this.clickHandler.bind(this, eachItem.id)}><li>{eachItem.name}</li></NavLink>

        // return <Link key={index} id={eachItem.id} onClick={this.clickHandler.bind(this, eachItem.id)} className={selectionClass} to={eachItem.route}>{eachItem.name}</Link>
      });
	}

  render() {
    const { isExpanded } = this.state;

    return (
      <Navigation>
        <nav className="nav">
          <i
            className="fa fa-bars"
            aria-hidden="true"
            onClick={e => this.handleToggle(e)}
          />

          {/* <i id="bars" aria-hidden="true" className="fa fa-bars fa-fw" onClick={e => this.handleToggle(e)}></i>
          <i id="cross" aria-hidden="true" className="fa fa-times fa-fw" onClick={e => this.handleToggle(e)}></i> */}

          <ul className={`collapsed ${isExpanded ? "is-expanded" : ""}`}>

            {this.getMenuLinks2()}

          </ul>
        </nav>
      </Navigation>
    );
  }
}

export default Nav;
