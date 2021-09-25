import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { useRouter } from 'next/router'
//MaterialUI


function Login() {
    const history = useRouter();
    const initialFormData = Object.freeze({
        email: '',
        password: '',
    });

    const [formData, updateFormData] = useState(initialFormData);

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim(),
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        axios.post('http://127.0.0.1:8000/api/token/', {
            email: formData.email,
            password: formData.password,
        })
            .then(res => {
                console.log(res.data)
            })
    };

    return (
        <div>
            <div className="bg-grey-lighter min-h-screen flex flex-col">
                <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <form onSubmit={handleSubmit} className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                        <h1 className="mb-8 text-3xl font-semibold text-center">Log In</h1>


                        <input
                            type="text"
                            className="block border focus:outline-none border-gray-light focus:border-green-500 w-full p-3 rounded mb-4"
                            name="email"
                            onChange={handleChange}
                            placeholder="Email" required />

                        <input
                            type="password"
                            className="block border focus:outline-none border-gray-light focus:border-green-500 w-full p-3 rounded mb-4"
                            name="password"
                            onChange={handleChange}
                            placeholder="Password" required />


                        <button
                            type="submit"
                            className="w-full text-center py-3 rounded bg-indigo-600 hover:bg-indigo-700 text-white hover:bg-green-dark focus:outline-none my-1"
                        >Log In</button>
                        <a href="/resetpassword" className="  text-blue-700" >Forgot password?</a>

                    </form>
                    <div className="flex w-full flex-col justify-center text-center mt-8">
                        <div className="flex flex-row text-gray-800 items-center">
                            <span className="bg-gray-400 w-full h-0.5"></span>
                            <span className="w-full border-b " >Or log in with</span>
                            <span className="bg-gray-400 w-full h-0.5"></span>
                        </div>

                        <div className="flex gap-5 mt-5 justify-center cursor-pointer">
                            <div className=" text-4xl  bg-black text-white px-2 py-1  rounded-md">
                                <i class="fab fa-github">GITHUB</i>
                            </div>
                            <div className="text-4xl  bg-blue-700 text-white px-2 py-1  rounded-md">
                                <i class="fab fa-google">GOOGLE</i>
                            </div>

                        </div>
                    </div>
                    <div className="text-grey-dark mt-6 cursor-pointer">
                        Don't have an account?
                        <a href="/signup" className="ml-1 no-underline border-b border-blue  text-blue-700 ">
                            SignUp
                        </a>.
                    </div>


                </div>
            </div>
        </div >
    )
}

export default Login
