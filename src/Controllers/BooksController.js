import { runInAction } from "mobx";
import booksRepository from "../Books/Books.repository";
import { booksStore } from "../Stores/BooksStore";

export class BooksController {
  async loadBooks() {
    const books = await booksRepository.getBooks();
    runInAction(() => {
      booksStore.setBooks(books);
    });
  }

  async addBook(name, author) {
    const success = await booksRepository.addBook({ name, author });
    if (success) {
      await this.loadBooks();
    }
    return success;
  }

  setFilter(filter) {
    runInAction(() => {
      booksStore.setFilter(filter);
    });
  }
}

export const booksController = new BooksController();
