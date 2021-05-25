import React, { useState, useRef } from "react";
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
  const [showReadingList, setShowReadingList] = useState(true);
  const searchRef = useRef();
  const readRef = useRef();

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

  const toggleSearch = () => {
    console.log(searchRef.current.style.display);
    if (searchRef.current.style.display === "none") {
      searchRef.current.style.display = "";
    } else {
      searchRef.current.style.display = "none";
    }
  };

  const toggleReadList = () => {
    if (searchRef.current.style.display === "none") {
      searchRef.current.style.display = "";
    } else {
      searchRef.current.style.display = "none";
    }
  };

  return (
    <div>
      <h1>BOOOKSAVER</h1>
      {showReadingList ? <p>Hello</p> : null}
      <Button variant="secondary" onClick={toggleSearch}>
        Search
      </Button>
      <Button variant="secondary" onClick={toggleReadList}>
        Readlist
      </Button>
      <div className="content">
        <div className="search" ref={searchRef}>
          <h2>Find New Books!</h2>
          <SearchBookForm setSearchedBooks={setSearchedBooks} />
          <SearchList
            searchedBooks={searchedBooks}
            updateSavedBooks={updateSavedBooks}
          ></SearchList>
        </div>
        <div className="readList" ref={readRef}>
          <h2>Reading List</h2>
          <ReadingList
            savedBooks={savedBooks}
            updateSavedBooks={updateSavedBooks}
            setSavedBooks={setSavedBooks}
          ></ReadingList>
        </div>
      </div>
    </div>
  );
}

export default App;
