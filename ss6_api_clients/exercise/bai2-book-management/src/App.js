import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {BookList} from "./components/BookList";

function App() {
  return (
    <>
        <BookList/>
    </>
  );
}

export default App;
