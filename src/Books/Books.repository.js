import ApiGateway from "../Shared/ApiGateway.js";

class BooksRepository {
  constructor() {
    this.httpGateway = new ApiGateway();
  }

  getBooks = async () => {
    return await this.httpGateway.get("/");
  };

  addBook = async ({ name, author }) => {
    const id = Date.now();
    const bookAddDto = await this.httpGateway.post("/", {
      id,
      name,
      author,
      ownerId: "kir",
    });
    return !!(bookAddDto && bookAddDto.status === "ok");
  };
}

const booksRepository = new BooksRepository();
export default booksRepository;
