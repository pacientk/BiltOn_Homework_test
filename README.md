# Refactoring React application for BiltOn

This project is a refactored React application implementing the MVP (Model-View-Presenter) pattern with MobX for state management. It displays a list of books, allows adding new books, and toggles between "All books" and "Private books" using the API `https://tdd.demo.reaktivate.com/v1/books/kir`. The logic is separated from the UI, with key components covered by Jest tests.

## Features
- Displays a list of books with `id`, `name`, `author`, and `ownerId` fields.
- Adds new books with auto-generated `id` and fixed `ownerId: "kir"`.
- Toggles between "All books" and "Private books" (filtered by `ownerId: "kir"`).
- Shows a header with the count of private books.
- Includes tests for core logic in `BooksController.test.js`.

## Requirements
- Node.js 14.x or higher
- npm
- Access to the API `https://tdd.demo.reaktivate.com/v1/books/kir` (requires accepting a self-signed SSL certificate in the browser)

## Installation and Setup

1. **Clone the repository** (or copy the project files):
   ```bash
   git clone git@github.com:pacientk/BiltOn_Homework_test.git
   cd reaktivate-tdd-challenge
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```
   If vulnerabilities are reported:
   ```bash
   npm audit fix
   ```

3. **Configure the API**:
   - Open `https://tdd.demo.reaktivate.com/v1/books/kir` in a browser and accept the self-signed SSL certificate.

4. **Run the application**:
   ```bash
   npm start
   ```
   The app will open at `http://localhost:3000`.

5. **Run tests**:
   ```bash
   npm test
   ```
   Tests use Jest to verify the logic in `BooksController`.