import { Link, Navigate, useNavigate } from 'react-router-dom';
import loginImg from '../assets/Login.gif'
import offerImg from '../assets/sliders/slider1.jpg'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import useAuth from '../AuthProvider/useAuth';
import { toast } from 'react-toastify';
import { useState } from 'react';
import Swal from 'sweetalert2'

const Login = () => {
    const [error , setError] = useState(null)
    const { signInMethod, user, loading } = useAuth()
    const navigate = useNavigate()
    const handleSignInMethod = e => {
        e.preventDefault()
        const from = e.target;
        const email = from.email.value;
        const password = from.password.value;
        
        signInMethod(email, password)
            .then(res => {
                console.log(res.user);
                navigate(location?.state ? location.state : '/')
                Swal.fire({
                    title: "Offers!",
                    text: "We have many offers if you book a room you will get this offer. Like 50%, free dinner etc",
                    imageUrl: offerImg,
                    imageWidth: 400,
                    imageHeight: 400,
                    imageAlt: "Custom image"
                  });
                toast.success('login successfully')
            })
            .catch(error => {
                console.log(error);
                return setError('Invalid email or password')
            })
    }


    const googleProvider = new GoogleAuthProvider()

    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(res => {
                console.log(res.user);
                navigate(location?.state ? location.state : '/')
                Swal.fire({
                    title: "Offers!",
                    text: "We have many offers if you book a room you will get this offer. Like 50%, free dinner etc",
                    imageUrl: offerImg,
                    imageWidth: 400,
                    imageHeight: 400,
                    imageAlt: "Custom image"
                  });
                toast.success('login successfully with google account')
            })
            .catch(error => console.log(error))
    }

    if(user || loading) return <Navigate to={'/'}></Navigate>
    
    return (
        <div className="flex items-center flex-col lg:flex-row justify-between container mx-auto py-24 px-3">
            <img src={loginImg} className='w-1/2' alt="" />

            <form onSubmit={handleSignInMethod} className="px-6 py-8 md:px-8 max-w-lg w-full border shadow-xl">
                <h1 className='text-2xl font-black text-primay text-center'>WanderVenture</h1>
                <p className="mt-3 text-xl text-center text-gray-600 dark:text-gray-200">
                Welcome back! Please Sign In Hurry Up
                </p>


                <div className="mt-4">
                    <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" >Email Address</label>
                    <input id="LoggingEmailAddress" required name='email' placeholder='enter email' className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="email" />
                </div>

                <div className="mt-4">
                    <div className="flex justify-between">
                        <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" >Password</label>
                        <a href="#" className="text-xs text-gray-500 dark:text-gray-300 hover:underline">Forget Password?</a>
                    </div>

                    <input id="loggingPassword" required name='password' placeholder='password' className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="password" />
                </div>

                {
                    error && <p className='pt-5 text-red-700'>{error}</p>
                }

                <div className="mt-6">
                    <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-primay rounded-lg hover:bg-cyan-600 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                        Sign In
                    </button>
                </div>

                <a href="#" onClick={signInWithGoogle} className="flex items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <div className="px-4 py-2">
                        <svg className="w-6 h-6" viewBox="0 0 40 40">
                            <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#FFC107" />
                            <path d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z" fill="#FF3D00" />
                            <path d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z" fill="#4CAF50" />
                            <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#1976D2" />
                        </svg>
                    </div>

                    <span className="w-5/6 px-4 py-3 font-bold text-center">Sign in with Google</span>
                </a>

                <div className="flex items-center justify-between mt-4">
                    <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

                    <Link to={'/signUp'} className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline">or sign up</Link>

                    <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
                </div>
            </form>
        </div>
    );
};

export default Login;