import React from 'react'
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom'

export default function SignUp() {
    const { handleSubmit, register, errors, getValues } = useForm();

    return (
        <>
            <div className="content-wrapper d-flex align-items-center auth px-0 card-body">
                <div className="row w-100 mx-0">
                    <div className="col-lg-4 mx-auto">
                        <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                            <NavLink to={"/"} style={{ cusor: "pointer" }} >
                                <div className="brand-logo">
                                    <img src="" alt="logo" />
                                </div>
                            </NavLink>
                            <h4>Hello, Welcome!</h4>
                            <h6 className="font-weight-light">Sign in to continue.</h6>
                            <form className="pt-3">
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
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
