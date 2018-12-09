import React, { Component } from "react";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { city: this.props.city };
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.refresh(this.state.city);
  }

  handleInputChange(event) {
    this.setState({ city: event.target.value });
  }

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <input
          type="text"
          class="form-control"
          placeholder="Search for a city...."
          autoFocus="on"
          autoComplete="on"
          onChange={event => this.handleInputChange(event)}
        />
        <br />
      </form>
    );
  }
}
