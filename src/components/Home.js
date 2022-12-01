import React, { useState, useEffect } from "react";
import Edituser from "./Edituser";
import Table from "./Table";
import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {
    const [data, updatedata] = useState([]);
    const [flag, updateflag] = useState(false)
    const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

    const getdata = () => {
        let url = "http://localhost:12345/account"
        fetch(url)
            .then(res => res.json())
            .then(resdata => updatedata(resdata))
    }
    const Delete = (id) => {
        let url = "http://localhost:12345/account/" + id;
        let postData = {
            headers: { 'Content-Type': 'application/json' },
            method: "DELETE"
        }
        fetch(url, postData)
            .then(res => res.json())
            .then(data => {
                alert("Delete sucessfully");
                getdata();     //to relod users
            })
    }
    const [Ename, setname] = useState("");
    const [Eemail, setemail] = useState("");
    const [Enumber, setnumber] = useState("");
    const [Euserid, setid] = useState(0);

    const editData = (id) => {
        var url = "http://localhost:12345/account/" + id;
        fetch(url)
            .then(res => res.json())
            .then(userData => {
                setname(userData.name);
                setemail(userData.email);
                setnumber(userData.number);
                setid(userData.id)
                updateflag(true)
            })

    }

    const update = () => {
        let url = "http://localhost:12345/account/" + Euserid;
        var userinfo = { name: Ename, email: Eemail, number: Enumber };
        var postdata = {
            headers: { 'Content-Type': 'application/json' },
            method: "PUT",
            body: JSON.stringify(userinfo)
        };
        fetch(url, postdata)
            .then(response => response.json())
            .then(serverResponse => {
                alert(name + "update sucessfully..")
                getdata();
                updateflag(false);

            })
    }

    let [name, updatename] = useState("");
    let [email, updatemail] = useState("");
    let [number, updatenumber] = useState("");

    const Save = () => {
        let userData = {
            "name": name,
            "email": email,
            "number": number
        }
        let postData = {
            headers: { 'Content-Type': 'application/json' },
            method: "POST",
            body: JSON.stringify(userData)
        }
        let url = "http://localhost:12345/account/"

        fetch(url, postData)
            .then(res => res.json())
            .then(resdata => {
                alert(name + "Save sucessfully!")
                getdata();
                updatename(""); updatemail(""); updatenumber("")
            })
    }

    useEffect(() => {
        getdata();
    }, []);

    return (
        <>
            <div className="container-fluid">
                <div className="row mb-4">
                    <div className="col-lg-7 text-end text-primary fs-1 ">
                        <i className="fa fa-home"></i> Dashboard
                    </div>
                    <div className="col-lg-5 text-end px-5 mt-3  ">
                        {
                            isAuthenticated ?
                                (<button className="btn btn-sm btn-danger text-dark font-monospace" onClick={() => logout({ returnTo: window.location.origin })}>Log Out</button>)
                                :
                                (<button className="btn btn-sm btn-danger text-dark font-monospace" onClick={() => loginWithRedirect()}>Log In</button>)
                        }
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 mb-4">
                        <Edituser update={update} flag={flag} Enumber={Enumber} Eemail={Eemail} Ename={Ename} setnumber={setnumber} setemail={setemail} setname={setname} />
                        {
                            isAuthenticated ?
                                <div className="border rounded-3 p-3">
                                    <h5 className="text-center text-info">New User</h5>
                                    <hr />
                                    <div className="mb-2">
                                        <label>Name</label>
                                        <input type="text" className="form-control"
                                            onChange={obj => updatename(obj.target.value)}
                                            value={name}
                                        />
                                    </div>
                                    <div className="mb-2">
                                        <label>Email</label>
                                        <input type="email" className="form-control"
                                            onChange={obj => updatemail(obj.target.value)}
                                            value={email}
                                        />
                                    </div>
                                    <div className="mb-2">
                                        <label>Register no.</label>
                                        <input type="number" className="form-control"
                                            onChange={obj => updatenumber(obj.target.value)}
                                            value={number}
                                        />
                                    </div>
                                    <hr />
                                    <button className="btn btn-sm btn-success form-control"
                                        onClick={Save}>Save</button>
                                </div>
                                : <div><img src="icon.png" alt="icon" className="rounded mt-5  " height="300" width="100%" /></div>
                        }
                    </div>
                    <div className="col-lg-9 " >
                        <Table data={data} isAuthenticated={isAuthenticated} editData={editData} Delete={Delete} />
                    </div>

                </div>
            </div>

        </>
    )
}

export default Home;

//json-server --watch data.json --port 12345
