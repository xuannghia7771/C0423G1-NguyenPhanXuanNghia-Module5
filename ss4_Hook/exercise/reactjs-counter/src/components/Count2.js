import useIncrement from "../hooks/useIncrement";

export default function Count2(){
    const [count, increase] = useIncrement(2);
    return(
        <>
            Count: {count}
            <br/>
            <button className="btn btn-primary" onClick={increase}>Add 2</button>
        </>
    );
}