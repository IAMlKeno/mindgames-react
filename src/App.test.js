import React from "react";
import { fireEvent, getByRole, getByText, render, screen } from "@testing-library/react";
import App from "./App";

test("it renders", () => {
  render(<App />);
  const linkElement = screen.getByText(/mindgames/i);
  expect(linkElement).toBeInTheDocument();
});

// functionality tests
describe("Start Functional Tests. The app:", () => {
  // it renders and
  beforeEach(() => {
    render(<App />);
  });

  test("renders", () => {
    const linkElement = screen.getByText(/mindgames/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("has a create new idea button", () => {
    const newIdeaBtn = screen.getByText(/Add Idea/i);
    expect(newIdeaBtn).toBeInTheDocument();
  });

  test("displays new idea form", () => {
    const newIdeaBtn = screen.getByText(/Add Idea/);
    fireEvent.click(newIdeaBtn);
    expect(getByText(/Add New Idea/)).toBeVisible();
  });

  test("can display a new idea", () => {
    const newIdeaTitle = "New Idea Title";
    const newIdeaDescription = "New idea description";
    const newIdeaBtn = screen.getByText(/Add Idea/);
    fireEvent.click(newIdeaBtn);
    fireEvent.submit(
      document.querySelector("#idea-form"), {
        target: {
          id: 999,
          title: newIdeaTitle,
          description: newIdeaDescription
        }
      }
    );

    const newIdea = screen.getByText(/New idea description/i);
    expect(newIdea).toBeInTheDocument();
  });

  // test("can delete an idea", () => {

  // });

  // test("can display an edited idea", () => {

  // });

// you can add a new idea.
// delete an idea
// edit and idea
})
