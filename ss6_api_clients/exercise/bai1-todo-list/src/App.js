import logo from './logo.svg';
import './App.css';
import TodoList from "./components/TodoListComponent";
import {ToastContainer} from "react-toastify";

function App() {
  return(
      <>
        <TodoList></TodoList>
        <ToastContainer></ToastContainer>
      </>
  )
}

export default App;
