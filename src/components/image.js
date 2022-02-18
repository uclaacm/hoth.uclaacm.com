import React from 'react';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Image = ({ fluidImage }) => {
	return <Img fluid={fluidImage} width='100%' style={{ borderRadius: '14px' }}/>;
};

Image.propTypes = {
	fluidImage: PropTypes.object
};

export default Image;
