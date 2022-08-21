import React, {Component} from 'react';
import {ImageGalleryImg, ImageGalleryItemContainer} from "../Styles";
import Modal from "./Modal";
import {shape, string} from "prop-types";

class ImageGalleryItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false
    }
    this.handleCloseModal = this.handleCloseModal.bind(this)
  }

  handleOpenModal () {
    this.setState({isModalOpen: true})
  }

  handleCloseModal () {
    this.setState({isModalOpen: false})
  }
  render() {
    const image = this.props.item.webformatURL
    const modalImage = this.props.item.largeImageURL
    const alt = this.props.item.tags
    const isOpen = this.state.isModalOpen
    return (
      <ImageGalleryItemContainer >
        <ImageGalleryImg alt={alt || "photo"} src={image} onClick={() => this.handleOpenModal()}/>
        {isOpen && <Modal modalImage={modalImage} handleCloseModal={this.handleCloseModal} tag={this.props.item.tags}/>}
      </ImageGalleryItemContainer>
    );
  }
}

ImageGalleryItem.propTypes = {
    item: shape({
      webformatURL: string,
      largeImageURL: string,
      tags: string
    })
}

export default ImageGalleryItem;
