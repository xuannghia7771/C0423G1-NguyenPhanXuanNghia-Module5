import useIncrement from "../hooks/useIncrement";

export default function Count1() {
    const [count, increase] = useIncrement(1);
    return (
        <>
            Count: {count}
            <br/>
            <button className="btn btn-primary" onClick={increase}>Add 1</button>
        </>
    );
}