import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from 'react-redux';
import { setToken, setUser } from '../features/counter/authSlice';
import auth from '../components/auth'
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [data, setData] = useState({
        number: '',
        password: ''
    });
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const token = useSelector((state) => state.authToken.token)

    const handleInput = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://mern-tlme.onrender.com/api/login', data);
            if (response.status === 200) {
                toast.success(response.data.message);
                dispatch(setToken(response.data.authToken));
                const userData = await auth(response.data.authToken)
                dispatch(setUser(userData))
                setData({
                    number: '',
                    password: ''
                });
                navigate('/')
            }
        } catch (error) {
            toast.error(error.response.data.message || "Login failed");
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
                        alt="Login"
                    />
                </div>

                <div className="w-full md:w-1/2 p-4">
                    <form className="flex flex-col gap-4">
                        <label htmlFor="number" className="text-lg">
                            Phone Number
                        </label>
                        <input
                            id="number"
                            type="number"
                            name="number"
                            value={data.number}
                            onChange={handleInput}
                            className="p-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />

                        <label htmlFor="password" className="text-lg">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            onChange={handleInput}
                            className="p-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />

                        <button
                            onClick={handleSubmit}
                            className="mt-4 bg-indigo-500 p-2 rounded-md hover:bg-indigo-600 transition duration-300"
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
