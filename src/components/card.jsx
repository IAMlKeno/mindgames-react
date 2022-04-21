import * as React from "react";
import Idea from "../model/Idea";

export default class Card extends React.Component {
  constructor(props) {
    super();
    this.state = {
      idea: props.idea,
    };
  }

  render() {
    return (
      <div>
        <div>
          <Idea idea={this.state.idea} />
        </div>
      </div>
    );
  }
}
