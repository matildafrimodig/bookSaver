import Button from "react-bootstrap/Button";
import React from "react";
import Media from "react-bootstrap/Media";

export default function Book(props) {
  const saveToReadList = () => {
    let jsonBooks = localStorage.getItem("readList");

    if (jsonBooks != null) {
      jsonBooks = JSON.parse(jsonBooks);
    } else {
      jsonBooks = [];
    }

    if (jsonBooks.find((jB) => jB.id === props.book.id) !== undefined) {
      alert("This book is already in your reading list");
      return;
    }

    jsonBooks.push({
      id: props.book.id,
      title: props.book.title,
      author: props.book.author,
      date: props.book.date,
      cover: props.book.cover,
    });

    localStorage.setItem("readList", JSON.stringify(jsonBooks));
    props.updateSavedBooks();
  };

  return (
    <Media className="book" as="li">
      <img src={props.book.cover} className="mr-3" alt="Book cover" />
      <Media.Body>
        <h3>{props.book.title}</h3>
        <p>{"by " + props.book.author}</p>
        <p>{"published " + props.book.date}</p>
      </Media.Body>
      <Button size="sm" variant="outline-dark" onClick={saveToReadList}>
        Add to read list
      </Button>
    </Media>
  );
}
