import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery3 {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: "description", content: "Personal website of Koen Castermans" },
            { name: "keywords", content: "Koen, Castermans, personal, website" }
          ]}
        >
          <html lang="en" />
          <script defer data-domain="koencastermans.com" src="https://analytics.koencastermans.com/js/plausible.js"></script>
        </Helmet>
        <main>{children}</main>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
