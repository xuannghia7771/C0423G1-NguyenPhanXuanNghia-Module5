import {useState} from "react";

export default function useIncrement() {
    const [count, setCount] = useState(0);
    const increase = (addAmount) => {
        addAmount = count + 1;
        setCount(addAmount);
    }
    return [count, increase];
}