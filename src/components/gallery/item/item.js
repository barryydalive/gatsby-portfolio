import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import Modal from 'containers/modal'
import { Consumer } from 'store/createContext'
import { Title, Copy, ImageContainer, Figure } from './item.css';

const Item = ({ title, copy, image, link }) => {
  return (
    <Figure>

      <a style={{ textDecoration: 'none', color: 'black' }} href={link} target='_blank'>


        <ImageContainer>
          <Img
            fluid={
              image
                ? {
                  ...image.childImageSharp.fluid,
                  aspectRatio: 1.5,
                }
                : {}
            }
            alt={title}
          />
        </ImageContainer>
        <figcaption>
          <Title>{title}</Title>
          <Copy>{copy}</Copy>
        </figcaption>

      </a>
    </Figure>
  )
};

Item.propTypes = {
  title: PropTypes.string,
  copy: PropTypes.string,
  image: PropTypes.object.isRequired,
};

export default Item;
