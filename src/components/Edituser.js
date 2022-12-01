const Edituser = ({ setname, setemail, setnumber, update, Ename, Eemail, Enumber, flag }) => {
    return (
        <>
            {
                flag ?
                    <div className="border p-3 mb-3 rounded">
                        <h6 className="text-center text-danger">Edit user</h6>
                        <p>Name : <input type="text" className="form-control" onChange={obj => setname(obj.target.value)}
                            value={Ename} /> </p>
                        <p>Email : <input type="email" className="form-control" onChange={obj => setemail(obj.target.value)}
                            value={Eemail} /></p>
                        <p> Register No. : <input type="number" className="form-control" onChange={obj => setnumber(obj.target.value)}
                            value={Enumber} /></p>
                        <button className="btn btn-sm btn-success " onClick={update}>update</button>
                    </div> : ""
            }
        </>
    )
}
export default Edituser;