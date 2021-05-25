import Button from 'react-bootstrap/Button'
import React from 'react'
import ListGroup from "react-bootstrap/ListGroup"

export default function Book(props) {

    const saveToReadList = () => {

        let jsonBooks = localStorage.getItem("readList")

        if(jsonBooks != null) {
            jsonBooks = JSON.parse(jsonBooks)
            console.log("jsonBook är inte null")
        } else {
            jsonBooks = []
            console.log("jsonBook är null")
            console.log(props.book.id)
        }

        jsonBooks.push({
            id: props.book.id,
            title: props.book.title,
            author: props.book.author,
            date: props.book.date,
            cover: props.book.cover
        })

        localStorage.setItem("readList", JSON.stringify(jsonBooks))
        props.updateSavedBooks()
    }
    
    return (
        <ListGroup.Item className="list-group-item">
            <span >{props.book.title}</span>
            <span>{props.book.author}</span>
            <span>{props.book.date}</span>
            <img src={props.book.cover} />
            <Button onClick={saveToReadList}>Add to read list</Button>
        </ListGroup.Item>
    )
}
