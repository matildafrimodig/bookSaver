import React, { useState, useRef } from 'react';
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import axios from 'axios';
import uuid from 'react-uuid'


export default function SearchBookForm(props) {
    const titleRef = useRef()
    const authorRef = useRef()


    const Search = () => {
        console.log(titleRef.current.value)
        console.log(authorRef.current.value)

        const title = titleRef.current.value
        const author = authorRef.current.value

        titleRef.current.value = "";
        authorRef.current.value = "";

        const books = [];

        let url = "https://www.googleapis.com/books/v1/volumes?q=";
        if(title === "" && author === "") {
            alert("You need to input a title or an author to search")
            return ;
        }
        else if(title === "") {
            url += `""+inauthor:${author}&maxResults=5`;
        }
        else if(author === "") {
            url += `""+intitle:${title}&maxResults=5`;
        }
        else {
            url += `""+intitle:${title}+inauthor:${author}&maxResults=5`
        }

        axios.get(url)
            .then(res => {
                console.log(res.data.items)

                if(res.data.items === undefined) {
                    alert("No books matched your search terms. Please try again.")
                    return;
                }

                res.data.items.forEach(book => {
                    if(book.volumeInfo.authors !== undefined) {

                        let imgLink = "../no-cover.jpg"

                        if(book.volumeInfo.imageLinks !== undefined) {
                            imgLink = book.volumeInfo.imageLinks.thumbnail

                        }
                        
                        books.push({
                            id: uuid(),
                            title: book.volumeInfo.title,
                            author: book.volumeInfo.authors[0],
                            date: book.volumeInfo.publishedDate,
                            cover: imgLink
                        })
                    }  
                });
            
                console.log(books)

                props.setSearchedBooks(books)
            })

            
    }

    return (
        <div className="">
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
