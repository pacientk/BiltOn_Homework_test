import { booksController } from "../Controllers/BooksController";
import booksRepository from "../Books/Books.repository";
import { booksStore } from "../Stores/BooksStore";

jest.mock("../Books/Books.repository");

describe("BooksController", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    booksStore.setBooks([]);
    booksStore.setFilter("all");
  });

  test("loadBooks call the repo and updating store", async () => {
    const fakeBooks = [{ id: 99, name: "X", author: "Y", ownerId: "kir" }];
    booksRepository.getBooks.mockResolvedValue(fakeBooks);
    await booksController.loadBooks();
    expect(booksRepository.getBooks).toHaveBeenCalled();
    expect(booksStore.books).toEqual(
        expect.arrayContaining([expect.objectContaining({ name: "X" })])
    );
  });

  test("addBook on success call the loadBooks -> return true", async () => {
    const spyLoad = jest.spyOn(booksController, "loadBooks").mockResolvedValue();
    booksRepository.addBook.mockResolvedValue(true);
    const res = await booksController.addBook("Name", "Author");
    expect(booksRepository.addBook).toHaveBeenCalledWith({ name: "Name", author: "Author" });
    expect(spyLoad).toHaveBeenCalled();
    expect(res).toBe(true);
  });

  test("addBook on unsuccess call the loadBooks -> return false", async () => {
    const spyLoad = jest.spyOn(booksController, "loadBooks");
    booksRepository.addBook.mockResolvedValue(false);
    const res = await booksController.addBook("Name", "Author");
    expect(spyLoad).not.toHaveBeenCalled();
    expect(res).toBe(false);
  });

  test("setFilter set filter to store", () => {
    booksController.setFilter("private");
    expect(booksStore.filter).toBe("private");
  });
});
