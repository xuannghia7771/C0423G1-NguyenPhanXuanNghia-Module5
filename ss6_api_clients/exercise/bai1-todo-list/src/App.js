import logo from './logo.svg';
import './App.css';
import "react-toastify/dist/ReactToastify.css"
import {ToastContainer} from "react-toastify";
import {TodoList} from "./components/TodoList";
import {NavLink, Route, Router, Routes} from "react-router-dom";
import {TodoListCreate} from "./components/TodoListCreate";

function App() {
  return(
      <>
          <NavLink to='/todo'>List</NavLink>
          <NavLink to='/todo/create' className='ms-2'>Add</NavLink>
          <Routes>
              <Route path='/todo' element={<TodoList/>}/>
              <Route path='/todo/create' element={<TodoListCreate/>}/>
          </Routes>
          <ToastContainer/>
      </>
  )
}

export default App;
