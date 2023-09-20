import useIncrement from "../hooks/useIncrement";

const Count1 = () => {
    const [count, increase] = useIncrement(1);
    return (
        <>
            Count: {count}
            <br/>
            <button className="btn btn-primary" onClick={increase}>Add 1</button>
        </>
    );
}

export default Count1