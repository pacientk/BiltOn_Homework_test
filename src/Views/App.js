import React, {useState} from "react";
import {observer} from "mobx-react";
import {booksStore} from "../Stores/BooksStore";
import {booksController} from "../Controllers/BooksController";
import Header from "./Header";

const App = observer(() => {
    const [name, setName] = useState("");
    const [author, setAuthor] = useState("");

    const handleAddBook = async () => {
        if (name && author) {
            await booksController.addBook(name, author);
            setName("");
            setAuthor("");
        }
    };

    return (
        <div
            style={{
                maxWidth: 500,
                margin: "auto",
            }}
            className="App"
        >
            <Header/>
            <div>
                <button onClick={() => booksController.setFilter("all")}>
                    All Books
                </button>
                <button onClick={() => booksController.setFilter("private")}>
                    Private Books
                </button>
            </div>
            <div>
                <input
                    type="text"
                    placeholder="Book name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
                <button onClick={handleAddBook}>Add Book</button>
            </div>
            <div style={{marginTop: 20}}>
                {booksStore.filteredBooks.map((book) => (
                    <div key={book.id} style={{textAlign: "left"}}>
                        {book.author}: {book.name}
                    </div>
                ))}
            </div>
        </div>
    );
});

export default App;
