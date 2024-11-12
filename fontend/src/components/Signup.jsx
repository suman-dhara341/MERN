import axios from "axios";
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { setToken, setUser } from '../features/counter/authSlice';  
import auth from '../components/auth';
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const [data, setData] = useState({
        name: '',
        number: '',
        email: '',
        password: '',
        cpassword: ''
    });

    const navigate = useNavigate()
    const dispatch = useDispatch();
    const token = useSelector((state) => state.authToken.token)


    const handleInput = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (data.password !== data.cpassword) {
            toast.error("Passwords do not match!");
            return;
        }

        try {
            const response = await axios.post('https://mern-tlme.onrender.com/api/registration', {
                name: data.name,
                number: data.number,
                email: data.email,
                password: data.password
            });

            if (response.status === 200) {
                dispatch(setToken(response.data.authToken));
                toast.success(response.data.message);

                const userData = await auth(response.data.authToken);
                dispatch(setUser(userData)); 

                setData({
                    name: '',
                    number: '',
                    email: '',
                    password: '',
                    cpassword: ''
                });
            }
        } catch (error) {
            toast.error(error.response.data.message || "Registration failed");
        }
    };

    useEffect(() => {
        if (token) {
            navigate('/')
        }
    }, [token, navigate])

    return (
        <div>
            <div className="flex flex-col md:flex-row justify-between items-center bg-black text-white p-8">
                <div className="w-full md:w-1/2 mb-6 md:mb-0 hidden md:block">
                    <img
                        className="w-full h-[30rem] rounded-lg"
                        src="https://static.vecteezy.com/system/resources/thumbnails/005/879/539/small_2x/cloud-computing-modern-flat-concept-for-web-banner-design-man-enters-password-and-login-to-access-cloud-storage-for-uploading-and-processing-files-illustration-with-isolated-people-scene-free-vector.jpg"
                        alt="Signup"
                    />
                </div>
                <div className="w-full md:w-1/2 p-4">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <label htmlFor="name" className="text-lg">Name</label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            value={data.name}
                            onChange={handleInput}
                            className="p-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        <label htmlFor="number" className="text-lg">Phone Number</label>
                        <input
                            id="number"
                            type="number"
                            name="number"
                            value={data.number}
                            onChange={handleInput}
                            className="p-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        <label htmlFor="email" className="text-lg">Email</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            onChange={handleInput}
                            className="p-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        <label htmlFor="password" className="text-lg">Password</label>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            onChange={handleInput}
                            className="p-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        <label htmlFor="cpassword" className="text-lg">Confirm Password</label>
                        <input
                            id="cpassword"
                            type="password"
                            name="cpassword"
                            value={data.cpassword}
                            onChange={handleInput}
                            className="p-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        <button
                            type="submit"
                            className="mt-4 bg-indigo-500 p-2 rounded-md hover:bg-indigo-600 transition duration-300"
                        >
                            Signup
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;
