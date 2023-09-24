import {useEffect, useState} from "react";
import * as todoListService from "../service/TodoListService";
import 'bootstrap/dist/css/bootstrap.css';

export function TodoList() {
    const [todo, setTodo] = useState([]);
    const getTodoList = async () => {
        setTodo(await todoListService.getAll());
    }
    useEffect(() => {
        getTodoList();
    }, []);

    return (
        <>
            <h1>Todo List</h1>
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>User Id</th>
                    <th>Title</th>
                    <th>Completed</th>
                </tr>
                </thead>
                <tbody>
                {todo.map((e) => (
                        <tr key={e.id}>
                            <td>{e.id}</td>
                            <td>{e.userId}</td>
                            <td>{e.title}</td>
                            <td>{e.complete ? 'yes' : 'no'}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </>
    )
}