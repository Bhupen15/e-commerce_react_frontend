import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { login } from '../Services/AdminServices';

function Login() {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    // useEffect(() => {
    //     const auth = localStorage.getItem("user");
    //     if (auth) {

    //         navigate('/');
    //     }

    // })
    const loginData = async (e: any) => {
        e.preventDefault()
        // console.log(email, password);

        let data = {

            'email': email,
            'password': password


        }
        const result = await login(data);


        localStorage.setItem("user", JSON.stringify(result.data.user));
        localStorage.setItem("token", JSON.stringify(result.data.auth));
    //   console.log(result.data);
        if ((result.data.auth)&&(result.data.user)) {




            navigate('/');
        }
        else {
            alert("Please enter correct details");
        }




    }

    return (
        <section className=" "  >
            <div className="container py-5 ">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-8 col-xl-6">
                        <div className="card rounded-3">
                            <div className="card-body p-4 p-md-5">
                                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Login here </h3>

                                <form className="px-md-2">

                                    <div className="form-outline mb-4">
                                        <input type="email" id="form3Example1q" value={email} onChange={(e) => { setEmail(e.target.value) }} className="form-control" name='email' />
                                        <label className="form-label" htmlFor="form3Example1q">Email</label>

                                    </div>

                                    <div>
                                        <input type="password" id="form3Example1q" value={password} onChange={(e) => { setPassword(e.target.value) }} className="form-control" name='password' />
                                        <label className="form-label" htmlFor="form3Example1q">Password</label>

                                    </div>

                                    <div className="d-flex justify-content-center">
                                        <button onClick={(e) => loginData(e)} type="submit" className="btn btn-primary btn-lg ">Login</button>
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

export default Login