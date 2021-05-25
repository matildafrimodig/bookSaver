import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Media from "react-bootstrap/Media";
import Button from "react-bootstrap/Button";

export default function SavedBook(props) {
  function removeFromReadList() {
    let list = JSON.parse(localStorage.getItem("readList"));

    list = list.filter((book) => book.id !== props.book.id);

    localStorage.setItem("readList", JSON.stringify(list));

    if (localStorage.getItem("readList") === "") {
      localStorage.removeItem("readList");
    }

    props.updateSavedBooks();
  }

  return (
    <div>
      <Media className="book" as="li">
        <img src={props.book.cover} className="mr-3" alt="Book cover" />
        <Media.Body>
          <h4>{props.book.title}</h4>
          <p>{"av " + props.book.author}</p>
          <p>{"publicerad " + props.book.date}</p>
        </Media.Body>
        <Button variant="danger" size="sm" onClick={removeFromReadList}>
          Remove
        </Button>
      </Media>
    </div>
  );
}
