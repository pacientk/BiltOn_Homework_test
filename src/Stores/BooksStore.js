import { makeObservable, observable, action, computed } from "mobx";

export class BooksStore {
  books = [];
  filter = "all"; // "all" или "private"

  constructor() {
    makeObservable(this, {
      books: observable,
      filter: observable,
      setBooks: action,
      setFilter: action,
      filteredBooks: computed,
      privateBooksCount: computed,
    });
  }

  setBooks(books) {
    this.books = books.map((b) => ({
      ...b,
      id: b.id || Date.now() + Math.random(),
    }));
  }

  setFilter(filter) {
    this.filter = filter;
  }

  get filteredBooks() {
    return this.filter === "all"
      ? this.books
      : this.books.filter((b) => b.ownerId === "kir");
  }

  get privateBooksCount() {
    return this.books.filter((b) => b.ownerId === "kir").length;
  }
}

export const booksStore = new BooksStore();
