import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import FilterSavedBooks from "./FilterSavedBooks";
import SavedBook from "./SavedBook";

export default function ReadingList(props) {
  return (
    <div>
      <FilterSavedBooks setSavedBooks={props.setSavedBooks} />
      <ListGroup>
        {props.savedBooks.map((book) => (
          <SavedBook
            key={book.id}
            book={book}
            updateSavedBooks={props.updateSavedBooks}
          ></SavedBook>
        ))}
      </ListGroup>
    </div>
  );
}
