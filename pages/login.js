import React, { useState, useEffect, useContext, useRef } from 'react';
import axios from 'axios'
import { useRouter } from 'next/router'
import Link from 'next/link';
import { AuthContext } from '../src/context/authContext';
import { FaGithubSquare } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import urls from '../backend.config';
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { providers, signIn } from "next-auth/client";
function SignIn({ providers }) {
    const history = useRouter();
    const errorDisplay = useRef(null)
    const [Loading, setLoading] = useState(false);
    const { isAuthenticated, isLoading, userState, setUserState } = useContext(AuthContext)
    const initialFormData = Object.freeze({ email: '', password: '', });
    const [formData, updateFormData] = useState(initialFormData);
    const handleChange = (e) => {
        updateFormData({
            ...formData, [e.target.name]: e.target.value.trim(),
        });
    };
    useEffect(() => {
        isAuthenticated && !isLoading && history.push('/user')
        console.log(providers)
    }, [isLoading])
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        const body = {
            email: formData.email,
            password: formData.password
        }
        const res = await axios.post(`${urls.client_url}/api/account/login`, body)
        if (res.status == 200) {
            setUserState(!userState)
            history.push('/user')
        }
        else if (res.status == 202) {
            console.log(res)
            console.log(errorDisplay.current)
            errorDisplay.current.text = "Invalid Email or Password"
        }
        setLoading(false)
    };
    return (
        <div>
            <div className="bg-grey-lighter min-h-screen flex flex-col">
                <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <form onSubmit={handleSubmit} className=" px-6 py-8 rounded shadow-md w-full">
                        <h1 className="mb-8 text-3xl font-semibold text-center">Log In</h1>


                        <input
                            type="email"
                            className="block border dark:text-black  focus:outline-none border-gray-light focus:border-green-500 w-full p-3 rounded mb-4"
                            name="email"
                            onChange={handleChange}
                            placeholder="Email" required />

                        <input
                            type="password"
                            className="block dark:text-black border focus:outline-none border-gray-light focus:border-green-500 w-full p-3 rounded mb-4"
                            name="password"
                            onChange={handleChange}
                            placeholder="Password" required />
                        <div className="text-center"><a className="text-red-500 " ref={errorDisplay}></a></div>

                        <button
                            type="submit"
                            className="w-full flex justify-center items-center gap-2 text-center py-3 rounded bg-indigo-600 hover:bg-indigo-700 text-white hover:bg-green-dark focus:outline-none my-1"
                            disabled={Loading ? true : false}
                        >
                            {Loading ? <><AiOutlineLoading3Quarters className="animate-spin" /><span>Logging In</span></> : "Log In"}</button>
                        <Link href="/resetpassword" ><a className="  text-blue-700" >Forgot password?</a></Link>
                    </form>
                    <div className="flex w-full flex-col justify-center text-center mt-8">
                        <div className="flex flex-row text-gray-800 dark:text-gray-200 items-center">
                            <span className="bg-gray-400 w-full h-0.5"></span>
                            <span className="w-full " >Or log in with</span>
                            <span className="bg-gray-400 w-full h-0.5"></span>
                        </div>

                        <div className="flex gap-5 mt-5 justify-center cursor-pointer">
                            <div className=" text-4xl  rounded-md">
                                <FaGithubSquare />
                            </div>
                            <button className="text-4xl   rounded-md" onClick={() => signIn("google")}>
                                <FcGoogle />
                            </button>

                        </div>
                    </div>
                    <div className="text-grey-dark mt-6 cursor-pointer">
                        Don&apos;t have an account?
                        <Link href="/register">
                            <a className="ml-1 no-underline border-b border-blue  text-blue-700 ">
                                SignUp
                            </a>
                        </Link>.
                    </div>
                </div>
            </div>
        </div >
    )
}

export async function getServerSideProps(context) {
    return { props: { providers: await providers() } };
}
export default SignIn