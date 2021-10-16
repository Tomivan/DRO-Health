import http from '../hhtp-common';

const getBooks = () => {
    return http.get("/books")
}

const BookService = {
    getBooks
}

export default BookService;