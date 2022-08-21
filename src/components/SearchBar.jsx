import React, {Component} from 'react';
import {func} from "prop-types";
import {TextCenterContainer} from "../Styles";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }
  handleChange (e) {
    this.setState({value: e.target.value})
  }
  render() {
    return (
      <TextCenterContainer>
        <header>
          <form onSubmit={(e)=>this.props.onSubmit(e, this.state.value)}>
            <button type="submit">
              <span>Search</span>
            </button>

            <input
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              onChange={(e) => this.handleChange(e)}
            />
          </form>
        </header>
      </TextCenterContainer>
    );
  }
}

SearchBar.propTypes = {
    onSubmit: func
}

export default SearchBar;
