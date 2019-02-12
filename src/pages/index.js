import React, { Component } from "react";
import Sidebar from "../components/sidebar/sidebar";
import Wrapper from "../components/containers/wrapper";
import Section from "../components/containers/section";
import Container from "../components/containers/container";
import MainHeader from "../components/typography/mainHeader";
import { Features, FeaturedItem } from "../components/projects/featuredItem";
import banner from "../images/undraw_programming_2svr.svg";
import trillo from "../images/trillo.png";
import pic02 from "../images/pic02.jpg";
import pic03 from "../images/pic03.jpg";

import Layout from "../components/layout";

export default class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.sections = [
      {
        id: "one",
        title: "About"
      },
      {
        id: "two",
        title: "Projects"
      }
    ];
    this.state = {
      activeSection: this.sections[0].id,
      moveBodyForSidebar: false
    };
  }

  onSectionMoreVisible = sectionId => {
    this.setState({ activeSection: sectionId });
  };

  moveBodyForSidebar = () => {
    this.setState({ moveBodyForSidebar: !this.state.moveBodyForSidebar });
  };

  render() {
    return (
      <Layout>
        <Sidebar
          sections={this.sections}
          activeSection={this.state.activeSection}
          moveBodyForSidebar={this.moveBodyForSidebar}
        />
        <Wrapper moveForSidebar={this.state.moveBodyForSidebar}>
          <Section id="one" onSectionMoreVisible={this.onSectionMoreVisible}>
            <div className="image main" data-position="center">
              <img src={banner} alt="" />
            </div>
            <Container>
              <MainHeader />
              <p>
                I'm a web developer that likes to work in front-end as well as
                in the back-end. In my current job at{" "}
                <a href="https://dovetail.world/en/">Dovetail</a> I mainly work
                with Backbone/React in the front-end and Ruby on Rails in the
                back-end. In my spare time I also like to learn other
                technologies by making some small projects. These projects are
                listed below.
              </p>
            </Container>
          </Section>

          <Section id="two" onSectionMoreVisible={this.onSectionMoreVisible}>
            <Container>
              <h3>Projects</h3>
              <p>
                Some of the projects I made. You can find more on my{" "}
                <a href="https://github.com/KoenCa">GitHub profile</a>.
              </p>
              <div className="features">
                <article>
                  <a href="#" className="image">
                    <img src={pic02} alt="" />
                  </a>
                  <div className="inner">
                    <h4>Terraformed a small moon</h4>
                    <p>
                      Integer eu ante ornare amet commetus vestibulum blandit
                      integer in curae ac faucibus integer adipiscing ornare
                      amet.
                    </p>
                  </div>
                </article>
                <article>
                  <a href="#" className="image">
                    <img src={pic03} alt="" />
                  </a>
                  <div className="inner">
                    <h4>Snapped dark matter in the wild</h4>
                    <p>
                      Integer eu ante ornare amet commetus vestibulum blandit
                      integer in curae ac faucibus integer adipiscing ornare
                      amet.
                    </p>
                  </div>
                </article>

                <Features>
                  <FeaturedItem
                    url="https://koen-castermans-trillo.netlify.com"
                    pic={trillo}
                    title="Booking app design"
                  >
                    Design made to learn more about flexbox. Part of{" "}
                    <a href="https://www.udemy.com/advanced-css-and-sass">
                      Advanced CSS and SASS Udemy course
                    </a>
                  </FeaturedItem>
                </Features>
              </div>
            </Container>
          </Section>

          <section id="footer">
            <div className="container">
              <ul className="copyright">
                <li>&copy; Koen Castermans. All rights reserved.</li>
                <li>
                  Design: <a href="http://html5up.net">HTML5 UP</a>
                </li>
              </ul>
            </div>
          </section>
        </Wrapper>
      </Layout>
    );
  }
}
