import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../Services/AdminServices';
function Register() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem("user");
        const token = localStorage.getItem("token");
        console.log(token)
        if (auth) {


            navigate('/');
        } else {
            navigate("/register")
        }

    },[])

    const collectData = async () => {
        console.log(name, email, password);
        let data = {
            'name': name,
            'email': email,
            'password': password
        }
        const result = await register(data);


        localStorage.setItem("user", JSON.stringify(data));
        localStorage.setItem("token", JSON.stringify(result.data.auth));

        if (result) {
            navigate('/');
        }



    }

    return (
        <section className=" "  >
            <div className="container py-5 ">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-8 col-xl-6">
                        <div className="card rounded-3">
                            <div className="card-body p-4 p-md-5">
                                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Register here </h3>

                                <form className="px-md-2">
                                    <div className="form-outline mb-4">
                                        <input type="text" id="fname" name='fname' value={name} onChange={(e) => { setName(e.target.value) }} className="form-control" />
                                        <label className="form-label" htmlFor="fname">First name</label>

                                    </div>
                                    <div className="form-outline mb-4">
                                        <input type="email" id="form3Example1q" value={email} onChange={(e) => { setEmail(e.target.value) }} className="form-control" name='email' />
                                        <label className="form-label" htmlFor="form3Example1q">Email</label>

                                    </div>

                                    <div>
                                        <input type="password" id="form3Example1q" value={password} onChange={(e) => { setPassword(e.target.value) }} className="form-control" name='password' />
                                        <label className="form-label" htmlFor="form3Example1q">Password</label>

                                    </div>

                                    <div className="d-flex justify-content-center">
                                        <button onClick={collectData} type="submit" className="btn btn-primary btn-lg ">Register</button>
                                    </div>

                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Register