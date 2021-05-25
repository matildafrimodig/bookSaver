import React from 'react'
import ListGroup from "react-bootstrap/ListGroup"

export default function SavedBook(props) {
    return (
        <div>
            <ListGroup.Item className="list-group-item">
                <span >{props.book.title}</span>
                <span>{props.book.author}</span>
                <span>{props.book.date}</span>
                <img src={props.book.cover} />
                {/* <Button onClick={saveToReadList}>Add to read list</Button> */}
            </ListGroup.Item>
        </div>
    )
}