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
import kabisaLogo from "../images/kabisa_logo.png";
import dovetailLogo from "../images/dovetail_logo.png";
import psm1Badge from "../images/psmi.png";
import completeJsCert from "../images/complete_javascript_cert.jpg";
import advancedCssCert from "../images/advanced_css_cert.jpg";
import masterElectronCert from "../images/master_electron_cert.jpg";

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
        id: "workSection",
        title: "Work Experience",
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
                In my first job at{" "}
                <a href="https://dovetail.world/en/">Dovetail</a> I started out
                as a front-end web developer and slowly evolved into a full
                stack web developer. This allowed me to gain experience in many
                different technologies which include: React, Ruby on Rails, Java
                (Apache Karaf, Spring Boot), Docker, MongoDB, Elastic Search,
                Ansible, etc. In my next job I want to focus on and specialise
                in the front-end part of web development, because that is what I
                enjoy the most.
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
                  url="https://www.udemy.com/certificate/UC-WZPVU90M/"
                  pic={advancedCssCert}
                  picFit={"contain"}
                  title="Advanced CSS and Sass"
                >
                  In 2018 I took this course on Udemy to gain more knowledge and
                  practical experience with CSS.
                </FeaturedItem>
                <FeaturedItem
                  url="https://www.scrum.org/certificates/290409"
                  pic={psm1Badge}
                  picFit={"contain"}
                  title="Professional Scrum Master 1"
                >
                  At the beginning of 2018 I took part in a 3 day training of{" "}
                  <a target="_blank" href="https://scrumit.nl/">
                    Scrumit
                  </a>{" "}
                  to learn more about Scrum and completed the official
                  Professional Scrum Master I certification shortly after that.
                </FeaturedItem>
                <FeaturedItem
                  url="https://www.pxl.be/"
                  pic={pxlLogo}
                  picFit={"contain"}
                  title="Bachelor in Applied informatics"
                >
                  I started this bachelor at PXL University in 2014 and
                  graduated on 1 July 2017.
                </FeaturedItem>
                <FeaturedItem
                  url="https://www.udemy.com/certificate/UC-47LWHKAF/"
                  pic={masterElectronCert}
                  picFit={"contain"}
                  title="Master Electron"
                >
                  In 2017 I took this course on Udemy to gain more knowledge and
                  practical experience with Electron.
                </FeaturedItem>
                <FeaturedItem
                  url="https://www.udemy.com/certificate/UC-86F6XVAG/"
                  pic={completeJsCert}
                  picFit={"contain"}
                  title="Complete JavaScript course"
                >
                  In 2017 I took this course on Udemy to gain more knowledge and
                  practical experience with JavaScript.
                </FeaturedItem>
              </Features>
            </Container>
          </Section>

          <Section
            id="workSection"
            onSectionMoreVisible={this.onSectionMoreVisible}
          >
            <Container>
              <header>
                <h3>Work Experience</h3>
                <HeaderSubtitle level="3">
                  My work experience since my graduation.
                </HeaderSubtitle>
              </header>
              <Features>
                <FeaturedItem
                  url="https://www.dovetail.world/en/"
                  pic={dovetailLogo}
                  picFit={"contain"}
                  title="Web developer at Dovetail"
                >
                  From July 2017 until July 2021 I worked as a full stack web
                  developer at Dovetail.
                </FeaturedItem>
                <FeaturedItem
                  url="https://www.kabisa.nl/"
                  pic={kabisaLogo}
                  picFit={"contain"}
                  title="Web developer internship at Kabisa"
                >
                  From February 2017 until June 2017 I did an internship at
                  Kabisa as a web developer where I added a new functionality to
                  the iPaaS product called Dovetail.
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
