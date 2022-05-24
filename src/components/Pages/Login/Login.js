import React from 'react';
import google from '../../../images/google.png';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../../Shared/Loading';
import { Link } from 'react-router-dom';

const Login = () => {
    const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    let errorMessage;

    if (loading || loading1) {
        return <Loading></Loading>
    }

    if (error || error1) {
        errorMessage = <p className='text-red-400'>{error?.message || error1?.message}</p>
    }

    if (user || user1) {
        console.log(user1)
    }

    const onSubmit = data => {
        console.log(data)
        signInWithEmailAndPassword(data.email, data.passowrd)
    };

    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-3xl font-bold text-accent">Please Login!</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Email Address</span>

                            </label>
                            <input type="email" placeholder="Your Email"
                                class="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Input a valid email'
                                    }
                                })}
                            />
                            <label class="label">
                                {errors.email?.type === 'required' && <span class="label-text-alt text-red-400">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-400">{errors.email.message}</span>}
                            </label>
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Password</span>

                            </label>
                            <input type="password"
                                placeholder="Password"
                                class="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'password must be 6 characters'
                                    }
                                })}
                            />
                            <label class="label">
                                {errors.password?.type === 'required' && <span class="label-text-alt text-red-400">{errors.password.message}</span>}
                                {errors.passowrd?.type === 'minLength' && <span class="label-text-alt text-red-400">{errors.password.message}</span>}
                            </label>
                        </div>
                        {errorMessage}
                        <input className='btn btn-outline btn-accent' type="submit" value="Login" />
                    </form>
                    <p>New here? <Link className='text-blue-600' to='/register'>Create New Account</Link></p>
                    <div className="divider text-blue-900">OR</div>
                    <button onClick={() => signInWithGoogle()} className="btn btn-outline btn-accent"> <img src={google} alt="" /> Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;