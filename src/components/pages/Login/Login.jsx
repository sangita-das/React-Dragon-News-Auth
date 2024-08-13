import React, { useContext } from 'react';
import Navbar from './../Shared/Navbar/Navbar';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Login = () => {

    const {signIn} = useContext (AuthContext)
    const location = useLocation();
    console.log('location in the login page', location);

    const navigate = useNavigate()

    const handleLogin = e =>{
        e.preventDefault();

        /* const email = e.target.email.value;
        const password = e.target.password.value; */

        // another way we can use formData 
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(form);
        console.log(email, password);
        signIn(email, password)
        .then(result =>{
            console.log(result.user)

            // navigate after login
            navigate(location?. state ? location.state : '/')
        })
        .catch(error => {
            console.log(error)
        })

    }

    
    return (
        <div>
        <Navbar></Navbar>
       <div>
             <h2 className="text-3xl my-10 text-center">Please login</h2>

                <form onSubmit={handleLogin} className="card-body md:w-3/4 lg:2-1/2 mx-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>

      <p className='text-center mt-4'>Don't have an account, Please <Link to="/register" className="text-blue-600 font-bold">Register</Link> </p>
       </div>


       
        </div>
    );
};

export default Login;