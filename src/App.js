import React, {useState} from "react"
import SearchBookForm from "./SearchBookForm"
import SearchList from "./SearchList"
import ReadingList from "./ReadingList" 
import Button from "react-bootstrap/Button"
import './App.css';

function App() {
  const [searchedBooks, setSearchedBooks] = useState([])
  const [savedBooks, setSavedBooks] = useState(
    JSON.parse(localStorage.getItem("readList"))
  )
  
  const printBooks = () => {
    console.log(searchedBooks)
  }

  const updateSavedBooks = () => {
    const books = JSON.parse(localStorage.getItem("readList"))
    setSavedBooks(books)
  }

  return (
    <div className="content">
      <div className="search">      
        <SearchBookForm setSearchedBooks={setSearchedBooks} />
        <SearchList searchedBooks={searchedBooks} updateSavedBooks={updateSavedBooks}></SearchList>
        
      </div>
      <div className="readList">
        <ReadingList savedBooks={savedBooks}></ReadingList>
      </div>
      
    </div>
  );
}

export default App;
