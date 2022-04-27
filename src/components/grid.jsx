import React from "react";
import Button from "./button";
import IdeaForm from "../form/newIdeaForm";
import Card from "./card";
import axios from "axios";

export default class Grid extends React.Component {
  constructor() {
    super();

    this.state = {
      ideasAndFeatures: null,
      cards: null,
    };
  }

  componentDidMount() {
    this.initiateRepo();
    this.updateCards();
  }

  updateCards() {
    if (this.state.ideasAndFeatures !== null) {
      let cards = this.state.ideasAndFeatures.ideas.map((idea) => (
        <Card key={idea.id} idea={idea} />
      ));
      this.setState({ cards: cards });
    }
  }

  handleClick(e) {
    e.preventDefault();
    console.log("test");
    document.getElementById("ideaBox").style.display = "block";
  }

  render() {
    return (
      <>
        <div>
          <Button label="Add Idea" click={this.handleClick} />
          <div id="ideaBox" style={{ display: "none" }}>
            <IdeaForm />
          </div>
          <hr />
          {this.state.cards}
        </div>
      </>
    );
  }

  initiateRepo() {
    axios
      .get("http://localhost:8080/testdata")
      .then((response) => {
        this.setState({ ideasAndFeatures: response.data });
      })
      .then(() => this.updateCards());
  }
}
