import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';
import { FaGoogle } from 'react-icons/fa';

const SignUp = () => {

    const { signUp, google } = useContext(AuthContext);
    const nav = useNavigate();


    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signUp(email, password)
            .then(res => {
                const user = res.user;
                console.log(user);
                toast.success('SignUp Successfull!')                
                form.reset();
                setTimeout(()=>{
                    nav('/login');
                },1500)
            })
            .catch(err => {
                console.log(err);
                toast.error('SignUp Failed!');
            })
    }

    const registerWithGoogle = ()=>{
        google()
            .then(res => {
                const user = res.user;
                console.log(user);
                toast.success('SignUp Successfull!')
                setTimeout(() => {
                    nav('/');
                }, 1500)
            })
            .catch(err => {
                console.log(err);
                toast.error('SignUp Failed!');
            })
    }


    return (
        <div className="hero bg-base-200">

            <Toaster />
            <div className="hero-content   flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">SignUp</h1>
                </div>

                <div className="card flex-shrink-0  max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image URL</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                        </div>

                        <div className="form-control mt-2">
                            <button className="btn bg-secondary ">SignUp</button>
                            <button onClick={() => { registerWithGoogle ()}} className='btn bg-red-600 mt-2 text-white text-2xl'><FaGoogle></FaGoogle></button>
                        </div>

                        <label className="label">
                            <Link to="/login" className="label-text-alt link link-hover">Already Have an account? Login</Link>
                        </label>
                        
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;