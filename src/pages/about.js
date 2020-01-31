import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';
import Title from 'components/title';

const About = ({ data }) => (
  <Layout>
    <Head pageTitle={data.aboutJson.title} />
      NOTHING TO SEE YET
        {/* <div dangerouslySetInnerHTML={{__html:data.aboutJson.content.childMarkdownRemark.html}}/> */}
  </Layout>
);

About.propTypes = {
  data: PropTypes.object.isRequired,
};

export default About;

export const query = graphql`
  query AboutQuery {
    aboutJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
