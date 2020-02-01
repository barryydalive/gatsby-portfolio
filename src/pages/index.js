import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import Gallery from 'components/gallery';
import IOExample from 'components/io-example';
import Modal from 'containers/modal';
import { graphql } from 'gatsby';
import Img from 'gatsby-image'
import { ImageContainer, FlexBox } from '../components/box/box.css';
const Index = ({ data }) => {
  console.log('if this is jeff then get the hell out');
  console.log("thanks for opening my console. there's basically no reason to be here but that's okay. Since you're here feel free to email me at barry.huang93@gmail.com with job opportunities")
  const profile = data.homeJson.profile
  const { image } = profile
  return (
    <Layout>
      <FlexBox >

        <ImageContainer>

          <Img fluid={
            image ? {
              ...image.childImageSharp.fluid
            } : {}
          }
            alt='profile picture'
          />
        </ImageContainer>
        <Box>
          <Title as="h2" size="large">
            {data.homeJson.content.childMarkdownRemark.rawMarkdownBody}
          </Title>
        </Box>
      </FlexBox>
      <Gallery items={data.homeJson.gallery} />
   
    </Layout>
  );
}

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
  query HomepageQuery {
    homeJson {
      title
      content {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
      gallery {
        title
        copy
        link
        image {
          childImageSharp {
            fluid(maxHeight: 500, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      profile {
        image {
          childImageSharp{
            fluid(maxHeight:500, quality:100){
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
