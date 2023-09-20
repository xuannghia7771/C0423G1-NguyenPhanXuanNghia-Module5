import {useState} from "react";

const useIncrement = (addAmount) => {
    const [count, setCount] = useState(addAmount);
    const increase = () => {
        setCount(addAmount + count);
    }
    return [count, increase];
}

export default useIncrement