import axios from "axios";

export const getAll = async () => {
    try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
        return res.data;
    } catch (e) {
        alert("No Data!")
    }
}

export const create = async (data) => {
    try {
        const res = await axios.post("https://jsonplaceholder.typicode.com/todos", data);
        console.log(res.status);
        return res;
    } catch (e) {
        alert("Error!");
    }
}