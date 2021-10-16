import React, { useEffect, useState, ChangeEvent } from 'react';
import BookService from '../services/bookservice';
import BookData from '../types/books';
import '../App.css';

const Books: React.FC = () => {
    const [books, setBooks] = useState<Array<BookData>>([]);
    const [query, setQuery] = useState<string>("");
    useEffect(() => {
        retrieveBooks();
    }, [])

    const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value;
        setQuery(query);
    }

    const retrieveBooks = () => {
        BookService.getBooks()
        .then(response => {
            setBooks(response.data as BookData[])
            console.log(response.data)
        })
        .catch(e => {
            console.log(e);
        })
    }
    return(
        <div>
            {books && books.map( data => (
                <p>{data.authors}</p>))}
        </div>
    )
}

export default Books;