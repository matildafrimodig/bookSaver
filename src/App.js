import React, { useState } from "react";
import SearchBookForm from "./SearchBookForm";
import SearchList from "./SearchList";
import ReadingList from "./ReadingList";
import Button from "react-bootstrap/Button";
import "./App.css";

function App() {
  const initializeLocalStorage = () => {
    if (localStorage.getItem("readList") === null) {
      return [];
    } else if (localStorage.getItem("readList") === "") {
      return [];
    } else {
      return JSON.parse(localStorage.getItem("readList"));
    }
  };

  const [searchedBooks, setSearchedBooks] = useState([]);
  const [savedBooks, setSavedBooks] = useState(initializeLocalStorage());

  const printBooks = () => {
    console.log(searchedBooks);
  };

  const updateSavedBooks = () => {
    const books = JSON.parse(localStorage.getItem("readList"));

    if (books === null) {
      setSavedBooks([]);
    } else {
      setSavedBooks(books);
    }
  };

  return (
    <div className="content">
      <div className="search">
        <SearchBookForm setSearchedBooks={setSearchedBooks} />
        <SearchList
          searchedBooks={searchedBooks}
          updateSavedBooks={updateSavedBooks}
        ></SearchList>
      </div>
      <div className="readList">
        <ReadingList
          savedBooks={savedBooks}
          updateSavedBooks={updateSavedBooks}
        ></ReadingList>
      </div>
    </div>
  );
}

export default App;
