import React, {Component} from 'react';
import ImageGalleryItem from "./ImageGalleryItem";
import {ImageGalleryContainer} from "../Styles";
import {array} from "prop-types";

class ImageGallery extends Component {
  render() {
    return (
      <>
        <ImageGalleryContainer>
          {this.props.images.map((item) => (
            <ImageGalleryItem key={item.id} item={item} />
          ))}
        </ImageGalleryContainer>
      </>
    );
  }
}

export default ImageGallery;

ImageGallery.propTypes = {
  images: array
}
