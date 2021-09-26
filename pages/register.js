import axios from 'axios';
import urls from '../backend.config'
import { useRouter } from 'next/router'
import { useState, useRef } from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import Link from 'next/link';
export default function SignUp() {
    const errorDisplay = useRef(null)
    const [Loading, setLoading] = useState(false);
    const history = useRouter();
    const initialFormData = Object.freeze({
        email: '',
        username: '',
        password: '',
        full_name: ''
    });

    const [formData, updateFormData] = useState(initialFormData);

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            // Trimming any whitespace
            [e.target.name]: e.target.value.trim(),
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        console.log(formData);
        if (formData.password != formData.confirm_password) {
            errorDisplay.current.value = "Password does not match"
            setLoading(false);
            return
        }

        try {
            const res = await axios.post(`${urls.base_url}user/create/`, {
                email: formData.email,
                user_name: formData.username,
                password: formData.password,
                full_name: formData.full_name
            })
            if (res.status === 201) {
                history.push('/login');
                console.log(res);
                console.log(res.data);
            } else {
                console.log(res)
            }
        }
        catch (err) {
            console.log(err)
            errorDisplay.current.value = "Email or Username already taken! "
        }
        setLoading(false);
    };


    return (
        <div>
            <form onSubmit={handleSubmit} className="bg-grey-lighter min-h-screen flex flex-col">
                <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div className=" px-6 py-8 rounded shadow-md  w-full">
                        <h1 className="mb-8 text-3xl text-center">Sign Up</h1>
                        <input
                            type="text"
                            className="block border focus:outline-none border-gray-light focus:border-green-500 w-full p-3 rounded mb-4"
                            name="full_name"

                            onChange={handleChange}
                            placeholder="Full Name" required />

                        <input
                            type="email"
                            className="block border focus:outline-none border-gray-light focus:border-green-500 w-full p-3 rounded mb-4"
                            name="email"

                            onChange={handleChange}
                            placeholder="Email" required />
                        <input
                            type="text"
                            className="block border focus:outline-none border-gray-light focus:border-green-500 w-full p-3 rounded mb-4"
                            name="username"
                            onChange={handleChange}
                            placeholder="Username" required />

                        <input
                            type="password"
                            className="block border focus:outline-none border-gray-light focus:border-green-500 w-full p-3 rounded mb-4"
                            name="password"
                            onChange={handleChange}
                            placeholder="Password" required />
                        <input
                            type="password"
                            className="block border focus:outline-none border-gray-light focus:border-green-500 w-full p-3 rounded mb-4"
                            name="confirm_password"
                            onChange={handleChange}
                            placeholder="Confirm Password" required />
                        <div className="text-center"><a className="text-red-500 " ref={errorDisplay}></a></div>

                        <button
                            type="submit"
                            className="w-full flex justify-center items-center gap-2 text-center py-3 rounded bg-indigo-600 hover:bg-indigo-700 text-white hover:bg-green-dark focus:outline-none my-1"
                            disabled={Loading ? true : false}
                        >
                            {Loading ? <><AiOutlineLoading3Quarters className="animate-spin" /><span>Signing In</span></> : "Create account"}</button>

                    </div>

                    <div className="text-grey-dark mt-6">
                        Already have an account?
                        <Link href="/login">
                            <a className="no-underline border-b border-blue text-blue-700">
                                Log in.
                            </a>
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    );
}