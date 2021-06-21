import React, { Component } from "react";
import Sidebar from "../components/sidebar/sidebar";
import Wrapper from "../components/containers/wrapper";
import Section from "../components/containers/section";
import Container from "../components/containers/container";
import MainHeader from "../components/typography/mainHeader";
import HeaderSubtitle from "../components/typography/headerSubtitle";
import { Features, FeaturedItem } from "../components/projects/featuredItem";
import Layout from "../components/layout";
import { Footer } from "../components/footer/footer";
import { Copyright } from "../components/footer/copyright";
import banner from "../images/undraw_programming_2svr.svg";
import trillo from "../images/trillo.png";
import budgety from "../images/budgety.png";
import nexter from "../images/nexter.png";
import pxlLogo from "../images/pxl_logo.png";

export default class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.sections = [
      {
        id: "aboutSection",
        title: "About",
      },
      {
        id: "educationSection",
        title: "Education",
      },
      {
        id: "projectsSection",
        title: "Projects",
      },
    ];
    this.state = {
      activeSection: this.sections[0].id,
      moveBodyForSidebar: false,
    };
  }

  onSectionMoreVisible = (sectionId) => {
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
          <Section
            id="aboutSection"
            onSectionMoreVisible={this.onSectionMoreVisible}
          >
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

          <Section
            id="educationSection"
            onSectionMoreVisible={this.onSectionMoreVisible}
          >
            <Container>
              <header>
                <h3>Education</h3>
                <HeaderSubtitle level="3">
                  Overview of relevant education.
                </HeaderSubtitle>
              </header>
              <Features>
                <FeaturedItem
                  url="https://www.pxl.be/"
                  pic={pxlLogo}
                  picFit={"contain"}
                  title="Bachelor in Applied informatics"
                >
                  I started this bachelor at PXL University in 2014 and
                  graduated in 2017.
                </FeaturedItem>
              </Features>
            </Container>
          </Section>

          <Section
            id="projectsSection"
            onSectionMoreVisible={this.onSectionMoreVisible}
          >
            <Container>
              <h3>Projects</h3>
              <HeaderSubtitle level="3">
                Some of the projects I made. You can find more on my{" "}
                <a href="https://github.com/KoenCa">GitHub profile</a>.
              </HeaderSubtitle>
              <Features>
                <FeaturedItem
                  url="https://koen-castermans-nexter.netlify.com/"
                  pic={nexter}
                  title="Realtors website design"
                >
                  Design made to learn more about CSS grid. Part of{" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.udemy.com/advanced-css-and-sass"
                  >
                    Advanced CSS and SASS Udemy course
                  </a>
                </FeaturedItem>
                <FeaturedItem
                  url="https://koen-castermans-trillo.netlify.com"
                  pic={trillo}
                  title="Booking app design"
                >
                  Design made to learn more about flexbox. Part of{" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.udemy.com/advanced-css-and-sass"
                  >
                    Advanced CSS and SASS Udemy course
                  </a>
                </FeaturedItem>
                <FeaturedItem
                  url="https://koen-castermans-budget.netlify.com/"
                  pic={budgety}
                  title="Simple monthly budget app"
                >
                  Simple app made during{" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://koen-castermans-budget.netlify.com/"
                  >
                    a JavaScript course on Udemy
                  </a>
                  .
                </FeaturedItem>
              </Features>
            </Container>
          </Section>

          <Footer>
            <Copyright />
          </Footer>
        </Wrapper>
      </Layout>
    );
  }
}
