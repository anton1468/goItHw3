import React, {Component} from 'react';
import {ModalContainer, ModalOverlay} from "../Styles";
import {func, string} from "prop-types";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.handeEscapeClose = this.handeEscapeClose.bind(this);
  }

  componentDidMount(){
    document.addEventListener("keydown", this.handeEscapeClose);
  }
  componentWillUnmount(){
    document.removeEventListener("keydown", this.handeEscapeClose);
  }
  handeEscapeClose (e) {
    if (e.key === "Escape") {
      this.props.handleCloseModal()
    }
  }
  render() {
    return (
      <ModalOverlay onKeyDown={this.handeEscapeClose} onClick={this.props.handleCloseModal}>
        <ModalContainer onClick={e => e.stopPropagation()}>
          <img src={this.props.modalImage} alt={this.props.tag}/>
        </ModalContainer>
      </ModalOverlay>
    );
  }
}

Modal.propTypes = {
    modalImage: string,
    tag: string,
    handleCloseModal: func
}

export default Modal;
