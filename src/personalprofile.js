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
                <h3>Personal Profile</h3>

                <div className="ContentInside">
                I am a full stack developer with holistic knowledge of project architecture, project life cycle and designs. I have 17+ years of working experience in software industry as a full stack developer. I am very passionate in responsive web designs and user experience. Well experienced in coordinating with the product management and stake holders. I have very good analytical and trouble shooting skills. I am an enthusiastic, self-motivated, reliable, responsible and hardworking person. I am a punctual and motivated individual who is able to work in a busy environment and produce high standards of work. I am an excellent team worker and able to take instructions from all levels and build up good working relationships with all colleagues.
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
