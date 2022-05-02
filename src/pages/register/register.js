import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./register.css";
import api from "../../utils/api";



export default function Register() {
    const { handleSubmit, register, formState: { errors }, getValues } = useForm();
    const [password, Setpassword] = useState(false);

    const [item, setItem] = useState({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        gender: "",
        email: "",
        password: "",
    })

    const handleOnChange = (e) => {
        const { name, value } = e.target
        setItem({
            ...item,
            [name]: value ?? JSON.parse(value),
        })
    }

    const togglepassword = () => {
        const userPassword = getValues("password");
        if (!userPassword) {
            return;
        }
        Setpassword(password ? false : true);
    };

    const registerUser = async () => {
        // setLoading(true);
        const payload = {
            password:item.password,
            firstName:item.firstName,
            lastName:item.lastName,
            email:item.email,
            phoneNumber:item.phoneNumber,
            gender:item.gender,
        }
        try {
            const r = await api.Account.register(payload)
            console.log("signupData", payload);
            // notifySuccess(r.sucessMessage)
            // setLoading(true);
            // history.push('/')
        }
        catch (error) {
            console.log(error);
            // setLoading(false);
        }
    }

    return (
        <>
            <div className="container d-flex flex-column mt-5">
                <div className="row align-items-center justify-content-center no-gutters">
                    <div className="col-lg-5 col-md-8 pt-10">
                        <div className="card shadow ">
                            <div className="card-body p-6">
                                <div className="mb-4">
                                    {/* <Link to={"/"} className="mb-2 font-weight-bold">
                    <AppLogo />
                  </Link> */}
                                    <Link className="mb-2 font-weight-bold" to={"/"} id="login-logo" >
                                        <img className="" src="../../favicon.ico" alt="logo" />
                                        {/* <span className="badge badge-warning text-white" id="login-logo-beta">BETA</span> */}
                                    </Link>

                                    <hr />
                                    <span className="mb-1 font-weight-bold px-2 rounded text-primary">
                                        Account Registration
                                    </span>
                                </div>
                                <form >
                                    <div className="form-group">
                                        <label htmlFor="firstName" className="form-label">
                                            First Name<span className='text-danger'>*</span>
                                            {errors.firstName &&
                                                <span className="text-danger font-weight-bold"> required</span>
                                            }
                                        </label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            className="form-control"
                                            name="firstName"
                                            placeholder="First Name here"
                                            {...register("firstName", {
                                                required: true, onChange: (e) => handleOnChange(e)
                                            })}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="lastName" className="form-label">
                                            Last Name<span className='text-danger'>*</span>
                                            {errors.lastName &&
                                                <span className="text-danger font-weight-bold"> required</span>
                                            }
                                        </label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            className="form-control"
                                            name="lastName"
                                            placeholder="Last Name here"
                                            {...register("lastName", {
                                                required: true, onChange: (e) => handleOnChange(e)
                                            })}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="phoneNumber" className="form-label">
                                            Phone Number<span className='text-danger'>*</span>
                                            {errors.phoneNumber &&
                                                <span className="text-danger font-weight-bold"> required</span>
                                            }
                                        </label>
                                        <input
                                            type="text"
                                            id="phoneNumber"
                                            className="form-control"
                                            name="phoneNumber"
                                            placeholder="Phone Number here"
                                            {...register("phoneNumber", {
                                                required: true, onChange: (e) => handleOnChange(e)
                                            })}
                                        />
                                    </div>
                                    <div className="form-group ">
                                        <label htmlFor="gender" className="form-label">Gender<span className='text-danger'>*</span> </label>
                                        {errors.gender &&
                                            <span className="text-danger font-weight-bold"> required</span>
                                        }
                                        <select className="form-control text-capitalize"
                                            id="gender"
                                            name="gender"
                                            {...register("gender", {
                                                required: true, onChange: (e) => handleOnChange(e)
                                            })}
                                        >
                                            <option value=''>Select </option>
                                            <option value="Female"> Female</option>
                                            <option value="Male">Male</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email" className="form-label">
                                            Email<span className='text-danger'>*</span>
                                            {errors.email &&
                                                <span className="text-danger font-weight-bold"> required</span>
                                            }
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            className="form-control"
                                            name="email"
                                            placeholder="Email address here"
                                            {...register("email", {
                                                required: true, onChange: (e) => handleOnChange(e)
                                            })}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password" className="form-label">
                                            Password<span className='text-danger'>*</span>
                                            {errors.password &&
                                                <span className="text-danger font-weight-bold"> required</span>
                                            }
                                        </label>

                                        <div className="input-group mb-3">
                                            <input
                                                type={password ? "text" : "password"}
                                                id="password"
                                                className="form-control"
                                                name="password"
                                                placeholder="**************"
                                                aria-label="Sizing example input"
                                                aria-describedby="inputGroup-sizing-default"
                                                {...register("password", {
                                                    required: true, onChange: (e) => handleOnChange(e)
                                                })}
                                            />
                                            <div
                                                style={{ cursor: 'pointer' }}
                                                class="input-group-prepend"
                                                onClick={togglepassword}
                                                >
                                                <span
                                                    className="input-group-text bg-primary text-light"
                                                    id="inputGroup-sizing-default"
                                                >
                                                    <i
                                                        className={password ? "fa fa-eye-slash" : "fas fa-eye"}
                                                 ></i>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-lg-flex justify-content-between align-items-center mb-2">
                                        <div>
                                            <Link to="forgot-password">Forgot your password?</Link>
                                        </div>
                                    </div>
                                    <div className="py-2">
                                        <span className="font-weight-smaller">
                                            Don’t have an account?{" "}
                                            <Link to="/register" className="ml-1">
                                                Sign up
                                            </Link>
                                        </span>
                                    </div>
                                    <div>
                                        <button type="submit" 
                                        className="btn btn-primary btn-block"
                                        onClick={registerUser}
                                        >
                                            <span className="mx-2 px-4">Register</span>
                                        </button>
                                    </div>
                                    <hr className="my-4" />
                                    <div className="mt-4 text-center">
                                        <Link
                                            to=""
                                            className="btn-social btn-social-outline btn-facebook"
                                        >
                                            <i className="fab fa-facebook"></i>
                                        </Link>
                                        <Link
                                            to=""
                                            className="btn-social btn-social-outline btn-twitter"
                                        >
                                            <i className="fab fa-twitter"></i>
                                        </Link>
                                        <Link
                                            to=""
                                            className="btn-social btn-social-outline btn-linkedin"
                                        >
                                            <i className="fab fa-linkedin"></i>
                                        </Link>
                                        <Link
                                            to=""
                                            className="btn-social btn-social-outline btn-github"
                                        >
                                            <i className="fab fa-github"></i>
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
