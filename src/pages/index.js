import React, { Component } from "react";
import Sidebar from "../components/sidebar/sidebar";
import Wrapper from "../components/containers/wrapper";
import Section from "../components/containers/section";
import Container from "../components/containers/container";
import MainHeader from "../components/typography/mainHeader";
import HeaderSubtitle from "../components/typography/headerSubtitle";
import Features from "../components/features/features";
import FeaturedItem from "../components/features/featuredItem";
import FeatureList from "../components/features/featureList";
import Layout from "../components/layout";
import { Footer } from "../components/footer/footer";
import { Copyright } from "../components/footer/copyright";
import banner from "../images/undraw_programming_2svr.svg";
import pomodoro from "../images/pomodoro.png";
import budgety from "../images/budgety.png";
import nexter from "../images/nexter.png";
import pxlLogo from "../images/pxl_logo.png";
import kabisaLogo from "../images/kabisa_logo.png";
import dovetailLogo from "../images/dovetail_logo.png";
import psm1Badge from "../images/psmi.png";
import completeJsCert from "../images/complete_javascript_cert.jpg";
import advancedCssCert from "../images/advanced_css_cert.jpg";
import masterElectronCert from "../images/master_electron_cert.jpg";
import FeatureListItem from "../components/features/featureListItem";
import {
  faVial,
  faToolbox,
  faGem,
  faDatabase,
  faEnvelope,
  faServer,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faNodeJs,
  faJava,
  faMicrosoft,
  faDocker,
  faAws,
} from "@fortawesome/free-brands-svg-icons";

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
        id: "developmentExperienceSection",
        title: "Development experience",
      },
      {
        id: "sideProjectsSection",
        title: "Side projects",
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
                In my internship and first job at{" "}
                <a href="https://dovetail.world/en/">Dovetail</a> I started out
                as a front-end web developer and slowly evolved into a full
                stack web developer. This allowed me to gain experience across
                the full stack of web development. In the coming future I want
                to focus on and specialise in the front-end part of web
                development, because that is what I enjoy the most.
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
                  developer at{" "}
                  <a href="https://www.dovetail.world/en/">Dovetail</a>.
                </FeaturedItem>
                <FeaturedItem
                  url="https://www.kabisa.nl/"
                  pic={kabisaLogo}
                  picFit={"contain"}
                  title="Web developer internship at Kabisa"
                >
                  From February 2017 until June 2017 I did an internship at
                  Kabisa as a web developer where I added a new functionality to
                  the iPaaS product called{" "}
                  <a href="https://www.dovetail.world/en/">Dovetail</a>.
                </FeaturedItem>
              </Features>
            </Container>
          </Section>

          <Section
            id="developmentExperienceSection"
            onSectionMoreVisible={this.onSectionMoreVisible}
          >
            <Container>
              <h3>Development experience</h3>
              <HeaderSubtitle level="3">
                The experiences I've gained during my development carreer that
                are technology related, but also some that are not technology
                related.
              </HeaderSubtitle>

              <h4>Front-end</h4>
              <FeatureList>
                <FeatureListItem icon={faHtml5}>HTML</FeatureListItem>
                <FeatureListItem icon={faCss3Alt}>
                  CSS: Sass, Bootstrap, BEM, modules, flexbox, grid
                </FeatureListItem>
                <FeatureListItem icon={faJsSquare}>
                  JS: ECMAScript, Coffeescript, TypeScript
                </FeatureListItem>
                <FeatureListItem icon={faJsSquare}>
                  UI: React, Backbone, Marionette, jQuery, Angular
                </FeatureListItem>
                <FeatureListItem icon={faVial}>
                  Testing: Karma, Cypress
                </FeatureListItem>
                <FeatureListItem icon={faToolbox}>
                  Tools: Webpack, Parcel, ESLint, Prettier, GatsbyJS,
                  Docusaurus, Electron
                </FeatureListItem>
              </FeatureList>

              <h4>Back-end</h4>
              <FeatureList>
                <FeatureListItem icon={faGem}>
                  Ruby on Rails: REST API, MVC, haml
                </FeatureListItem>
                <FeatureListItem icon={faNodeJs}>
                  Node.js: REST API, Express
                </FeatureListItem>
                <FeatureListItem icon={faJava}>
                  Apache Karaf: OSGI, Apache Camel
                </FeatureListItem>
                <FeatureListItem icon={faJava}>
                  Spring Boot: REST API, MVC, Thymeleaf
                </FeatureListItem>
                <FeatureListItem icon={faMicrosoft}>
                  .NET: c#, MVVM, Xamarin
                </FeatureListItem>
                <FeatureListItem icon={faDatabase}>
                  Storage: MongoDB, MySql, Elastic Search
                </FeatureListItem>
                <FeatureListItem icon={faEnvelope}>
                  Message brokers: Apache ActiveMQ, RabbitMQ
                </FeatureListItem>
              </FeatureList>

              <h4>Dev-ops</h4>
              <FeatureList>
                <FeatureListItem icon={faDocker}>Docker</FeatureListItem>
                <FeatureListItem icon={faServer}>Ansible</FeatureListItem>
                <FeatureListItem icon={faServer}>Terraform</FeatureListItem>
                <FeatureListItem icon={faAws}>AWS</FeatureListItem>
                <FeatureListItem icon={faToolbox}>
                  CI: Jenkins, GitHub Actions
                </FeatureListItem>
                <FeatureListItem icon={faServer}>
                  Server management
                </FeatureListItem>
              </FeatureList>

              <h4>Others</h4>
              <FeatureList>
                <FeatureListItem icon={faUsers}>
                  Agile workflow: Scrum
                </FeatureListItem>
                <FeatureListItem icon={faUsers}>
                  Internship supervisor
                </FeatureListItem>
                <FeatureListItem icon={faUsers}>
                  Customer support
                </FeatureListItem>
              </FeatureList>
            </Container>
          </Section>

          <Section
            id="sideProjectsSection"
            onSectionMoreVisible={this.onSectionMoreVisible}
          >
            <Container>
              <h3>Side projects</h3>
              <HeaderSubtitle level="3">
                Some of the side projects I made to learn new stuff. You can
                find more on my{" "}
                <a href="https://github.com/KoenCa">GitHub profile</a>.
              </HeaderSubtitle>
              <Features>
                <FeaturedItem
                  url="https://koen-pomodoro.netlify.app/"
                  pic={pomodoro}
                  title="Simple Pomodoro timer app"
                >
                  Simple Pomodoro timer app. Source code:{" "}
                  <a targert="_blank" href="https://github.com/KoenCa/pomodoro">
                    GitHub repository
                  </a>
                  .
                </FeaturedItem>
                <FeaturedItem
                  url="https://koen-castermans-budget.netlify.com/"
                  pic={budgety}
                  title="Simple monthly budget app"
                >
                  Simple app made during a JavaScript course on Udemy. Source
                  code:{" "}
                  <a
                    targert="_blank"
                    href="https://github.com/KoenCa/budget-app"
                  >
                    GitHub repository
                  </a>
                  .
                </FeaturedItem>
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
                  . Source code:{" "}
                  <a
                    targert="_blank"
                    href="https://github.com/KoenCa/Nexter-Udemy-course-project"
                  >
                    GitHub repository
                  </a>
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
