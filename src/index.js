import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import App from "./Views/App";
import { booksController } from "./Controllers/BooksController";
import "./styles.css";

const Root = () => {
  useEffect(() => {
    booksController.loadBooks();
  }, []);

  return <App />;
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Root />, rootElement);
