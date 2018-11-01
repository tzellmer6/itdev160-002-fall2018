import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout/layout";

const IndexPage = ({ data }) => (
  <Layout>
    <ul>
      {data.allContentfulBlogPost.edges.map(edge => (
        <li key={edge.node.id}>
          <Link to={edge.node.slug}>{edge.node.title}</Link>
          <img src={edge.node.heroImage.fluid.src} alt="" />
          <div>{edge.node.body.childMarkdownRemark.excerpt}</div>
        </li>
      ))}
    </ul>
  </Layout>
);

export default IndexPage;

export const query = graphql`
  query pageQuery {
    allContentfulBlogPost(
      filter: { node_locale: { eq: "en-US" } }
      sort: { fields: [publishDate], order: DESC }
    ) {
      edges {
        node {
          id
          title
          slug
          heroImage {
            fluid(maxWidth: 300) {
              src
            }
          }
          body {
            childMarkdownRemark {
              excerpt
            }
          }
        }
      }
    }
  }
`;
