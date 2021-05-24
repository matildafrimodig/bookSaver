import React, { useState, useRef } from 'react';
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import axios from 'axios';


export default function SearchBookForm() {
    const titleRef = useRef()
    const authorRef = useRef()


    const Search = () => {
        console.log(titleRef.current.value)
        console.log(authorRef.current.value)

        


        let url = `https://www.googleapis.com/books/v1/volumes?q=""+inauthor:${authorRef.current.value}`
        axios.get(url)
            .then(res => {
                console.log(res.data.items)
            })

    }

    return (
        <div className="container">
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Book Title</Form.Label>
                    <Form.Control type="text" ref={titleRef} placeholder="Search book title" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Author</Form.Label>
                    <Form.Control type="text" ref={authorRef} placeholder="Search author" />
                </Form.Group>
            </Form>
            <Button variant="primary" onClick={Search} >Search</Button>
        </div>
    )
}
