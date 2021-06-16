import React, { Component } from "react";
import * as styles from "./section.module.scss";

export default class Section extends Component {
  constructor(props) {
    super(props);
    this.sectionRef = React.createRef();
    this.state = {
      prevRatio: 0
    };

    this.observer = new IntersectionObserver(this.onIntersectionChange, {
      threshold: [0.25, 0.5, 0.75, 1]
    });
  }

  componentDidMount() {
    this.observer.observe(this.sectionRef.current);
  }

  componentWillUnmount() {
    this.observer.unobserve(this.sectionRef.current);
  }

  onIntersectionChange = entries => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > this.state.prevRatio) {
        // Sections becomes more visible, corresponding nav item should become active
        this.props.onSectionMoreVisible(this.props.id);
      }

      this.setState({ prevRatio: entry.intersectionRatio });
    });
  };

  render() {
    return (
      <section
        ref={this.sectionRef}
        id={this.props.id}
        className={styles.section}
      >
        {this.props.children}
      </section>
    );
  }
}
