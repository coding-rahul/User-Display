const Table = ({ data, isAuthenticated, Delete, editData }) => {
    return (
        <>
            <table className="table rounded mt-3 ">
                <thead className="bg-light text-danger" >
                    <tr>
                        <th>Sr no.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Number</th>
                        {
                            isAuthenticated ?
                                <>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </>
                                : ""
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item, index) => (
                            <tr key={item.id}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.number}</td>
                                {
                                    isAuthenticated ?
                                        <>
                                            <td>{<button type="button" className="btn btn-outline-warning text-dark btn-sm font-monospace"
                                                onClick={() => editData(item.id)} >edit<i className="fa fa-edit"></i></button>}</td>
                                            <td>{<button type="button" className="btn btn-danger btn-sm font-monospace"
                                                onClick={() => Delete(item.id)} ><i className="fa fa-trash"></i></button>}</td>
                                        </>
                                        : ""
                                }
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}
export default Table;