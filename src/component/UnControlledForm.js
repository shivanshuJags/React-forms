import React, { Component } from "react";

class UnControlledForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      inputText: "",
    };
  }

  handleSubmit(e) {
    this.setState({ inputText: this.input.value });
    e.preventDefault();
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" ref={(input) => (this.input = input)} />
          </label>

          <button type="submit">Submit</button>
        </form>
        <div>
          <p>The value is: {this.state.inputText}</p>
        </div>
      </div>
    );
  }
}

export default UnControlledForm;
