function StudentInfoComponent({student}){
    return (
        <>
            <h1>Student List</h1>
            <table>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Address</th>
                </tr>
                {student.map(each => (
                    <tr>
                        <td>{each.id}</td>
                        <td>{each.name}</td>
                        <td>{each.age}</td>
                        <td>{each.address}</td>
                    </tr>
                ))}
            </table>
        </>
    )
}

export default StudentInfoComponent;