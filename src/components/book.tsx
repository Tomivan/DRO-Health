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
            <table>
                <thead>
                    <tr>
                        <th>Publisher</th>
                        <th>Name</th>
                        <th>ISBN</th>
                        <th>Authors</th>
                        <th>End Date</th>
                    </tr>
                </thead>
                <tbody>
                    {books && books.map( data => (
                        <tr>
                            <td>{data.publisher}</td>
                            <td>{data.name}</td>
                            <td>{data.isbn}</td>
                            <td>{data.authors}</td>
                            <td>{data.released}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Books;