import React, {Component} from 'react';
// import * as d3 from "d3";

class PersonalProfile extends Component {

    componentDidMount() {
      // let fruits = ['Apple', 'Orange', 'Mango']
      // d3.select(".d3_fruit").selectAll("p").data(fruits).join("p").text((data) => data);
      
      // d3.select(".d3_fruit").text("ABC TEST");
      // d3.selectAll(".d3_fruit").attr("style", "color: orange");
      // d3.selectAll(".d3_fruit").style("border", "1px solid yellow");

      // d3.select("#list").selectAll("li").data([10, 20, 30, 40, 50])
      //       .text((d) => "This value is " + d )
      //       .enter()
      //       .append("li")
      //       .text((d) => "This is dynamically " + d );
    }
    
    render() {
      return (
        <div className="ContentData">
            <h3>About Me</h3>

            <div className="ContentInside">
              <p>I am a Full-Stack Developer with holistic knowledge of project architecture, project life cycle and designs. I have 18+ years of working experience in the software industry as a Full-Stack Developer.</p>
              <p>&#160;</p>
              <p>
              I am very passionate in responsive web designs and user experience. Well experienced in coordinating with the product management and stake holders. I have very good analytical and trouble shooting skills. I am an enthusiastic, self-motivated, reliable, responsible, dedicated and hardworking person. I am very punctual and motivated individual who is able to work in a busy environment and produce high quality of work. I am an excellent team player and able to take instructions from all levels and build up good working relationships with all colleagues. Well experienced in software development lifecycle (SDLC) and skilled in Object oriented programming(OOP). Deep knowledge of MVC architectures. Strong verbal and written communication skills.
              </p>
            </div>

            {/* <div class="d3_fruit"></div>

            <ul id="list">
              <li></li>
              <li></li>
            </ul> */}
        </div>
      );
    }
}
  
export default PersonalProfile;
