import React from 'react';
import { Router, Routes, Route } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { createMemoryHistory } from "history";
import About from "../pages/About";

describe("Components load as expected", () => {
  test("About page content", () => {
    const history = createMemoryHistory();
    history.push("/about");
    render(
      <Router location={history.location} navigator={history}>
        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    );
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  });
});