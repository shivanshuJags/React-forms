import { Component } from "react";
import Button from "../UI/Button";
import Input from "../UI/Input";
import Select from "../UI/Select";

class ControlledForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newUser: {
        name: "",
        age: 0,
        gender: "",
        skills: [],
      },
      genderOption: ["Male", "Female", "others"],
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleFormSubmit(e) {
    e.preventDefault();
    let userData = this.state.newUser;
    console.log("Successful", userData);
  }

  handleClearForm(e) {
    e.preventDefault();
    this.setState({
      newUser: {
        name: "",
        age: "",
        gender: "",
        skills: [],
      },
    });
    console.log("Data Cleared...");
  }

  handleInput(e) {
    this.setState((prevState) => ({
      newUser: { ...prevState.newUser, [e.target.name]: e.target.value },
    }));
  }

  render() {
    return (
      <form className="container">
        <Input
          type={"text"}
          title={"Full Name"}
          name={"name"}
          value={this.state.newUser.name}
          placeholder={"Enter your name"}
          handleChange={this.handleInput}
        />
        <Input
          type={"number"}
          title={"Age"}
          name={"age"}
          value={this.state.newUser.age}
          placeholder={"Enter your Age"}
          handleChange={this.handleInput}
        />
        <Select
          title={"Gender"}
          name={"gender"}
          value={this.state.newUser.gender}
          options={this.state.genderOption}
          placeholder={"Select Gender"}
          handleChange={this.handleInput}
        />
        <Button
          type={"submit"}
          title={"Submit"}
          action={this.handleFormSubmit}
        />
        <Button type={"reset"} title={"Reset"} action={this.handleClearForm} />
      </form>
    );
  }
}

export default ControlledForm;
