import React from "react";
import { observer } from "mobx-react";
import { booksStore } from "../Stores/BooksStore";

const Header = observer(() => {
  return (
    <div>
      <h1>Your books: {booksStore.privateBooksCount}</h1>
    </div>
  );
});

export default Header;
