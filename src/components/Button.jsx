import React, {Component} from 'react';
import {LoadButton, TextCenterContainer} from "../Styles";
import {func} from "prop-types";

class Button extends Component {
  render() {
    return (
      <TextCenterContainer onClick={this.props.handleLoadMore}>
        <LoadButton>LOAD MORE</LoadButton>
      </TextCenterContainer>
    );
  }
}

Button.propTypes = {
  handleLoadMore: func
}

export default Button;
