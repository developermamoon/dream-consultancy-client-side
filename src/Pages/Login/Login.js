import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';
import { FaGoogle } from 'react-icons/fa';

const Login = () => {
    const { login, google } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        login(email,password)
            .then(res => {
                const user = res.user;
                console.log(user);
                toast.success('Login Successfull!')
                form.reset();
                setTimeout(() => {
                    navigate(from, { replace: true });
                }, 1500)
            })
            .catch(err => {
                console.log(err);
                toast.error('SignUp Failed!');
            })
    }

    const loginWithGoogle = ()=>{
        google()
            .then(res => {
                const user = res.user;
                console.log(user);
                toast.success('Login Successfull!')
                setTimeout(() => {
                    // nav('/');
                    navigate(from, { replace: true });
                }, 10000)
            })
            .catch(err => {
                console.log(err);
                toast.error('SignUp Failed!');
            })
    }


    return (
        <div className="hero bg-base-200">
            <Toaster />
            <div className="hero-content  flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login</h1>
                </div>
                
                <div className="card flex-shrink-0  max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
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

                            <label className="label">
                                <Link to="/login" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>


                            
                        </div>

                        <div className="form-control">
                            <button className="btn bg-secondary text-white ">Login</button>

                            <button onClick={() => { loginWithGoogle ()}} className='btn bg-red-600 mt-2 text-white text-2xl'><FaGoogle></FaGoogle></button>
                        </div>
                        

                        <label className="label">
                            <Link to="/signup" className="label-text-alt link link-hover">Don't Have an account? SignUp</Link>
                        </label>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;