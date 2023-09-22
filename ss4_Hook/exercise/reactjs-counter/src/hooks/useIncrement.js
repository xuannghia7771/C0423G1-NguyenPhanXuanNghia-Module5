import {useState} from "react";

const useIncrement = (addAmount, initial) => {
    const [count, setCount] = useState(initial);
    const increase = () => {
        setCount(addAmount + count);
    }
    return [count, increase];
}

export default useIncrement