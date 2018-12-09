import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Sidebar from "../components/sidebar/sidebar";
import Wrapper from "../components/containers/wrapper";
import Section from "../components/containers/section";
import Container from "../components/containers/container";
import MainHeader from "../components/typography/mainHeader";
import Form from "../components/form/form";
import Label from "../components/form/label";
import Input from "../components/form/input";
import InputButton from "../components/form/inputButton";
import ActionsBox from "../components/form/actionsBox";
import Textarea from "../components/form/textarea";
import Select from "../components/form/select";
import banner from "../images/banner.jpg";
import pic01 from "../images/pic01.jpg";
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
        title: "Things I can do"
      },
      {
        id: "three",
        title: "A few accomplishments"
      },
      {
        id: "four",
        title: "Contact"
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
                with Backbone/Marionette in the front-end and Ruby on Rails in
                the back-end. In my spare time I also learned how to work with
                newer frameworks like React.
              </p>
            </Container>
          </Section>

          <Section id="two" onSectionMoreVisible={this.onSectionMoreVisible}>
            <Container>
              <h3>Things I Can Do</h3>
              <p> Some of the technologies I've worked with</p>
              <ul className="feature-icons">
                <li>
                  <FontAwesomeIcon icon={["fab", "html5"]} size="5x" />
                  <p>HTML</p>
                </li>
                <li>
                  <FontAwesomeIcon icon={["fab", "css3-alt"]} size="5x" />
                  <p>CSS</p>
                </li>
                <li>
                  <FontAwesomeIcon icon={["fab", "js"]} size="5x" />
                  <p>Javascript</p>
                </li>
                <li>
                  <FontAwesomeIcon icon={["fab", "react"]} size="5x" />
                  <p>React</p>
                </li>
                <li>
                  <FontAwesomeIcon icon={["fab", "html5"]} size="5x" /> HTML
                </li>
                <li>
                  <FontAwesomeIcon icon={["fab", "html5"]} size="5x" /> HTML
                </li>
              </ul>
            </Container>
          </Section>

          <Section id="three" onSectionMoreVisible={this.onSectionMoreVisible}>
            <Container>
              <h3>A Few Accomplishments</h3>
              <p>
                Integer eu ante ornare amet commetus vestibulum blandit integer
                in curae ac faucibus integer non. Adipiscing cubilia elementum
                integer. Integer eu ante ornare amet commetus.
              </p>
              <div className="features">
                <article>
                  <a href="#" className="image">
                    <img src={pic01} alt="" />
                  </a>
                  <div className="inner">
                    <h4>Possibly broke spacetime</h4>
                    <p>
                      Integer eu ante ornare amet commetus vestibulum blandit
                      integer in curae ac faucibus integer adipiscing ornare
                      amet.
                    </p>
                  </div>
                </article>
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
              </div>
            </Container>
          </Section>

          <Section id="four" onSectionMoreVisible={this.onSectionMoreVisible}>
            <Container>
              <h3>Contact Me</h3>
              <p>
                Integer eu ante ornare amet commetus vestibulum blandit integer
                in curae ac faucibus integer non. Adipiscing cubilia elementum
                integer. Integer eu ante ornare amet commetus.
              </p>
              <Form>
                <div className="row gtr-uniform">
                  <div className="col-12">
                    <Label defaults={{ htmlFor: "name" }}>Name</Label>
                    <Input
                      defaults={{
                        type: "text",
                        name: "name",
                        id: "name",
                        placeholder: "Name",
                        required: true
                      }}
                    />
                  </div>
                  <div className="col-12">
                    <Label defaults={{ htmlFor: "email" }}>Email</Label>
                    <Input
                      defaults={{
                        type: "email",
                        name: "email",
                        id: "email",
                        placeholder: "Email",
                        required: true
                      }}
                    />
                  </div>
                  <div className="col-12">
                    <Label defaults={{ htmlFor: "subject" }}>Subject</Label>
                    <Input
                      defaults={{
                        type: "text",
                        name: "subject",
                        id: "subject",
                        placeholder: "Subject",
                        required: true
                      }}
                    />
                  </div>
                  <div className="col-12">
                    <Label defaults={{ htmlFor: "message" }}>Message</Label>
                    <Textarea
                      defaults={{
                        name: "message",
                        id: "message",
                        placeholder: "Message",
                        rows: "6",
                        required: true
                      }}
                    />
                  </div>
                  <div className="col-12">
                    <Label defaults={{ htmlFor: "select" }}>Select:</Label>
                    <Select
                      defaults={{
                        name: "select",
                        id: "select",
                        placeholder: "Select",
                        required: true
                      }}
                    >
                      <option>test1</option>
                      <option>test2</option>
                      <option>test3</option>
                    </Select>
                  </div>
                  <div className="col-12">
                    <ActionsBox>
                      <InputButton
                        defaults={{
                          type: "submit",
                          value: "Send Message"
                        }}
                        primary
                      />
                      <InputButton
                        defaults={{
                          type: "reset",
                          value: "Reset Form"
                        }}
                      />
                    </ActionsBox>
                  </div>
                </div>
              </Form>
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
