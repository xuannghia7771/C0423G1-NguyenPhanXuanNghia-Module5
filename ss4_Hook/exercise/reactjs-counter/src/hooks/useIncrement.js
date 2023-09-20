import {useState} from "react";

export default function useIncrement(addAmount) {
    const [count, setCount] = useState(addAmount);
    const increase = () => {
        setCount(addAmount + count);
    }
    return [count, increase];
}