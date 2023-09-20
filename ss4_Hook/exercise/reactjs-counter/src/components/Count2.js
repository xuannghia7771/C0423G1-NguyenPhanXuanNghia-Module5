import useIncrement from "../hooks/useIncrement";

const Count2 = () => {
    const [count, increase] = useIncrement(2);
    return (
        <>
            Count: {count}
            <br/>
            <button className="btn btn-primary" onClick={increase}>Add 2</button>
        </>
    );
}

export default Count2