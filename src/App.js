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
    searchRef.current.className = "search mobileShow"
    readRef.current.className = "readList mobileHidden";
  };

  const toggleReadList = () => {
    readRef.current.className = "readList mobileShow"
    searchRef.current.className = "search mobileHidden";

  };

  return (
    <div>
      <div className="header">
        <h1>BOOOKSAVER</h1>
        
        
      </div>     
      <div className="mobileMenu">
          <Button variant="secondary" onClick={toggleSearch}>
          Show Search
          </Button>
          <Button variant="secondary" onClick={toggleReadList}>
          Show Read List
         </Button>
        </div> 
      <div className="content">
        <div className="search" ref={searchRef}>
          <h2>Find New Books!</h2>
          <SearchBookForm setSearchedBooks={setSearchedBooks} />
          <SearchList
            searchedBooks={searchedBooks}
            updateSavedBooks={updateSavedBooks}
          ></SearchList>
        </div>
        <div className="readList mobileHidden" ref={readRef}>
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
