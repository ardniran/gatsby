/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

// import Header from "./header"
import Nav from './nav/nav';
import FooterComponent from './footer/footer';
import "./layout.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          author
          description
        }
      }
      allSitePage {
        edges {
          node {
            id
            path
          }
        }
      }
    }
  `)

  console.log(data);

  return (
    <>
        <Nav siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
        <FooterComponent />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
