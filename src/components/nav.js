import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

// import { BurgerIcon } from './'
import styled from "styled-components";

const Navigation = styled.header`
  width: 100%;
  // border-bottom: 10px solid green;
  // z-index: 1;
  display: flex;
  // justify-content: space-between;
  // align-items: center;
  height: 140px;

  // padding: 0px 100px 0;
  // margin-bottom: 60px;
  // background: yellow;
  
  margin : auto 0;
  padding: 10px 20px;
  background-color: #222;
  color: white;

  .logo a {
    // padding-top: 33px;
    // display: flex;
    // flex-direction: column;
    // clear: both;
    // padding-bottom: 30px;
    // text-decoration: none;

    // p {
    //   width: 500px;
    //   display: block;
    // }

    // em {
    //   font-size: 0.5em;
    //   float: left;
    //   display: block;
    //   img {
    //     display: inline-block;
    //     margin-top: 5px;
    //     width: 15px;
    //     float: left;
    //   }
    //   .letterhead {
    //     display: inline-block;
    //     line-height: 260%;
    //     float: left;
    //   }
    // }
  }

  // .gray {
  //   color: #ccc;
  // }

  // a {
  //   color: #222;
  //   opacity: 0.55;
  //   transition: all 0.6s;
  //   color: #222;
  //   font-size: 1em;
  // }

  // a:hover {
  //   opacity: 1;
  // }

  .fa-bars {
    display: none;
    color: white;
    font-size: 2rem;
  }

  nav {
    ul {
      display: flex;
      // justify-content: space-between;
    }

    li {
      margin: 0 12px;
      // justify-content: space-between;
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

  @media only screen and (max-width: 800px) {
    padding: 0px;

    // .logo {
    //   padding-left: 15px;
    //   padding-top: 0px !important;
    // }
  }

  @media only screen and (max-width: 600px) {
    height: auto;
    min-height: 50px;
    display: block;
    position: relative;

    // .logo {
    //   width: 100%;
    //   display: block;
    //   padding-top: 20px;
    //   margin: 0px;
    //   margin-left: -5px;
    //   a {
    //     padding: 20px 0px;
    //   }
    // }

    .fa-bars {
      display: inline-block;
      position: absolute;
      top: 10px;
      right: 10px;
      cursor: pointer;
    }

    ul.collapsed {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex-wrap: wrap;

      overflow: hidden;
      max-height: 0;
      -moz-transition-duration: 0.4s;
      -webkit-transition-duration: 0.4s;
      -o-transition-duration: 0.4s;
      transition-duration: 0.4s;
      -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
      -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
      -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
      transition-timing-function: cubic-bezier(0, 1, 0.5, 1);

      &.is-expanded {
        overflow: hidden;
        max-height: 500px; /* approximate max height */
        -moz-transition-duration: 0.4s;
        -webkit-transition-duration: 0.4s;
        -o-transition-duration: 0.4s;
        transition-duration: 0.4s;
        -moz-transition-timing-function: ease-in;
        -webkit-transition-timing-function: ease-in;
        -o-transition-timing-function: ease-in;
        transition-timing-function: ease-in;
      }

      li {
        padding: 15px 10px;
        margin: 0px 0px;
        width: 70%;
      }
    }
  }
`;



class Nav extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isExpanded: false,
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

  handleToggle(e) {
    e.preventDefault();
    this.setState({
      isExpanded: !this.state.isExpanded
    });
  }

  clickHandler(selectedItem) {
		this.setState({selectedMenu: selectedItem});


    this.setState({
      isExpanded: false
    });

    // alert("selected ::"+selectedItem);
	}


  getMenuLinks2() {
      return this.menuItems.map((eachItem, index) => {

        // var selectionClass = "Menu";
        var selectionClass = "Menu";
        if(this.state.selectedMenu === eachItem.id) {
          selectionClass = "SelectedMenu";
          // console.log("selection", this.state.selectedMenu);
        }

        return <NavLink key={index} id={eachItem.id} activeClassName="SelectedMenu" to={eachItem.route} onClick={this.clickHandler.bind(this, eachItem.id)} ><li>{eachItem.name}</li></NavLink>

        // return <Link key={index} id={eachItem.id} onClick={this.clickHandler.bind(this, eachItem.id)} className={selectionClass} to={eachItem.route}>{eachItem.name}</Link>
      });
	}

  render() {
    const { isExpanded } = this.state;

    return (
      <Navigation>
        {/* <div className="logo">
          <Link to="/">
            <p>ASHLY</p>
          </Link>
        </div> */}

        <nav className="nav">
          <i
            className="fa fa-bars"
            aria-hidden="true"
            onClick={e => this.handleToggle(e)}
          />

          <ul className={`collapsed ${isExpanded ? "is-expanded" : ""}`}>

            {this.getMenuLinks2()}
            
            {/* <NavLink activeClassName="active" to="/personal">
              <li>personal profile</li>
            </NavLink>

            <NavLink activeClassName="active" to="/personal_skills">
              <li>personal skills</li>
            </NavLink>

            <NavLink activeClassName="active" to="/work_experience">
              <li>work experience</li>
            </NavLink>

            <NavLink activeClassName="active" to="/education">
              <li>education</li>
            </NavLink>

            <NavLink activeClassName="active" to="/contact">
              <li>contact</li>
            </NavLink> */}

          </ul>
        </nav>
      </Navigation>
    );
  }
}

export default Nav;
