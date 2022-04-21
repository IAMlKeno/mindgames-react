import React from "react";
import Button from "./button";

export default class Grid extends React.Component {
  constructor(props) {
    super();
    this.state = {
      cards: props.cards,
    };
  }

  render() {
    return (
      <>
        <Button label="Add Idea" />
        <hr />
        {this.state.cards}
      </>
    );
  }
}
