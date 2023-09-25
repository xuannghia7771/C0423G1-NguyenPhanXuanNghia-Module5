import {useEffect, useState} from "react";
import * as bookService from "../services/BookService";
import "bootstrap/dist/css/bootstrap.css";
import {Link} from "react-router-dom";

export function BookList() {
    const [books, setBooks] = useState([]);
    const getBook = async () => {
        setBooks(await bookService.getAll());
    }
    useEffect(() => {
        getBook();
    }, []);

    return (
        <>
            <h1>Book Management</h1>
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Quantity</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {
                    books.map((e) => (
                        <tr key={e.id}>
                            <td>{e.title}</td>
                            <td>{e.quantity}</td>
                            <td><Link to={`/edit/${e.id}`} className="btn btn-primary">Edit</Link></td>
                            <td><Link to={`/delete/${e.id}`} className="btn btn-danger">Delete</Link></td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </>
    )
}