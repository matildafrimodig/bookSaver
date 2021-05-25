import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Book from "./Book";

export default function SearchList(props) {
  return (
    <div>
      <ListGroup variant="flush">
        {props.searchedBooks.map((book) => (
          <Book
            key={book.id}
            book={book}
            updateSavedBooks={props.updateSavedBooks}
          ></Book>
        ))}
      </ListGroup>
    </div>
  );
}
