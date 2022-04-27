import React from "react";

export default class Button extends React.Component {
  constructor(props) {
    super();
    this.state = {
      label: props.label,
    };
  }

  render() {
    return (
      <div style={{ display: "inline-block" }}>
        <button onClick={this.props.click}>{this.state.label}</button>
      </div>
    );
  }
}
