import React, { useRef } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

export default function FilterSavedBooks(props) {
  const titleFilter = useRef();

  const filterBooks = () => {
    let bookList = JSON.parse(localStorage.getItem("readList"));

    if (bookList === null) {
      return;
    }

    if (titleFilter.current.value.length < 3) {
      props.setSavedBooks(bookList);
      return;
    }

    bookList = bookList.filter((book) =>
      book.title.toLowerCase().includes(titleFilter.current.value.toLowerCase())
    );

    props.setSavedBooks(bookList);
  };

  return (
    <div>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text>Filter:</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl onKeyUp={filterBooks} ref={titleFilter}></FormControl>
      </InputGroup>
    </div>
  );
}
