import React from "react";
// import axios from "axios";

export default class IdeaForm extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div style={{ border: "1px solid red", width: "50%", margin: "auto" }}>
        <form method="post" id="ideaForm" onSubmit={this.handleSubmit}>
          <label>Add New Idea</label>
          <br />
          <label>
            Title
            <input type="text" name="title" />
          </label>
          <br />
          <label>
            Description
            <input type="text" name="description" />
          </label>
          <hr />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }

  handleSubmit(evt) {
    evt.preventDefault();
    console.log(evt);
    // console.log(evt);
    // axios
    //   .post("/", {
    //     idea: "Test",
    //     description: "Description",
    //   })
    //   .then((res) => {
    //     console.log(res);
    //   });
  }
}
