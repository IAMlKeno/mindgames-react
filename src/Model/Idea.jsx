import * as React from "react";

export default class Idea extends React.Component {
  constructor(props) {
    super();
    this.state = {
      id: props.idea.key,
      title: props.idea.title,
      description: props.idea.description,
    };
  }

  render() {
    return (
      <>
        <div className="idea-title">
          <h3>{this.state.title}</h3>
        </div>
        <div className="idea-description">{this.state.description}</div>
      </>
    );
  }
}
