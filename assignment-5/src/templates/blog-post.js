import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout'

class BlogPost extends Component {
  render() {
    const { title, body } = this.props.data.contentfulBlogPost;
    return (
      <layout>
        <h1>{title}</h1>
        <div
          dangerouslySetInnerHTML= {{ _html: body.childMarkdownRemark.html}}>
        </div>
      </layout>
    );
  }
}

BlogPost.propTypes = {
  data: PropTypes.object.isRequired
}

export default BlogPost;

export const pageQuery = graphql`
query blogPostQuery($slug: String!) {
contentfulBlogPost(slug: { eq: $slug }) {
  title
  slug
  body{
    childMarkdownRemark{
      html
      }
    }
  }
}
`
