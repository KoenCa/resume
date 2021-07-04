import React, { Component } from "react";
import * as styles from "./sidebar.module.scss";
import TitleBar from "./titlebar";
import SidebarHeader from "./sidebarHeader";
import SidebarNav from "./sidebarNav";
import SidebarFooter from "./sidebarFooter";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarVisible: false // Only used on mobile
    };
  }

  // This can only be triggered when the title bar is visible on smaller screen sizes.
  onToggleClick = event => {
    event.preventDefault();
    this.setState({ sidebarVisible: !this.state.sidebarVisible });
    this.props.moveBodyForSidebar();
  };

  render() {
    let sidebarStyles = styles.sidebar;
    if (this.state.sidebarVisible) sidebarStyles += ` ${styles.showSidebar}`;

    return (
      <>
        <TitleBar
          onToggleClick={this.onToggleClick}
          sidebarVisible={this.state.sidebarVisible}
        />
        <section className={sidebarStyles}>
          <SidebarHeader />
          <SidebarNav
            sections={this.props.sections}
            activeSection={this.props.activeSection}
          />
          <SidebarFooter />
        </section>
      </>
    );
  }
}

export default Sidebar;
