import React from 'react'
import ListGroup from "react-bootstrap/ListGroup"
import SavedBook from "./SavedBook"

export default function ReadingList(props) {


    
    return (
        <div>
            <ListGroup>
                {props.savedBooks.map(book => <SavedBook key={book.id} book={book} ></SavedBook>)}
            </ListGroup>
        </div>
    )
}
