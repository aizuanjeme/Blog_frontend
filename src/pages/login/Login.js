import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./login.css";
import api from "../../utils/api";

const Login = () => {
    const { handleSubmit, register, formState: { errors }, getValues } = useForm();
    const [password, Setpassword] = useState(false);
    const [loading, Setloading] = useState(false);

    const togglepassword = () => {
        const userPassword = getValues("password");
        if (!userPassword) {
            return;
        }
        Setpassword(password ? false : true);
    };

    const LoginUser = async ({ email, password }) => {
        try {
            Setloading(true)
            const response = await api.Account.login(email, password);
            Setloading(false);
            await api.Account.saveAuthData(response)
        }
        catch (error) {
            console.log(error)
            Setloading(false)
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
                                    <Link className="mb-2 font-weight-bold" to={"/"} id="login-logo" >
                                        <img className="" src="./favicon.ico" alt="logo" />
                                    </Link>

                                    <hr />
                                    <span className="mb-1 font-weight-bold px-2 rounded text-primary">
                                        Account Login
                                    </span>
                                </div>
                                <form >
                                <div className="form-group">
                                <label for="email">Email</label>
                                <input
                                    type="email"
                                    className="form-control "
                                    name="email"
                                    id="email"
                                    placeholder="Email"
                                    {...register("email", { required: true })}
                                />
                            </div>
                            <div className="form-group">
                                <label for="password">Password</label>
                                <div className='input-group'>
                                    <input
                                        type={password ? "text" : "password"}
                                        id="password"
                                        className="form-control"
                                        name="password"
                                        placeholder="**************"
                                        {...register("password", { required: true })}
                                        aria-label="Sizing example input"
                                        aria-describedby="inputGroup-sizing-default"
                                    />
                                    <div
                                        style={{ cursor: 'pointer' }}
                                        onClick={togglepassword}
                                        class="input-group-prepend">
                                        <span
                                            className="input-group-text bg-primary text-light"
                                            id="inputGroup-sizing-default"
                                        >
                                            <i
                                                className={
                                                    password ? "fa fa-eye-slash" : "fas fa-eye"
                                                }

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
                                        <button type="submit" className="btn btn-primary btn-block" onClick={handleSubmit(LoginUser)}>
                                            <span className="mx-2 px-4">Login</span>
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
    );
};

export default Login;