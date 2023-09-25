import axios from "axios";

export const getAll = async () => {
    try {
        const res = await axios.get("http://localhost:8080/books");
        return res.data;
    } catch (e) {
        alert("No data");
    }
}

export const createNewBook = async (data) => {
    try {
        const res = await axios.post("http://localhost:8080/books", data);
        console.log(res.status);
        return res;
    } catch (e) {
        alert("Error");
    }
}