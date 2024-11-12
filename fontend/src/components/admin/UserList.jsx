import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useSelector } from 'react-redux';
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';


const UserList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const token = useSelector((state) => state.authToken.token)
    const userId = useSelector((state) => state.authToken.user.userId)
    const navigate = useNavigate()


    const data = async () => {
        try {
            const responds = await axios.get('https://mern-tlme.onrender.com/api/admin/users', {
                headers: {
                    Authorization: token
                }
            })
            setUsers(responds.data.message)
        } catch (error) {
            console.log(error);

            toast.error(error.response.data.message || 'Data get problem')

        } finally {
            setLoading(false);
        }
    }


    const deleteUser = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this user?");
        if (!confirmDelete) return;
        if (userId === id) {
            return toast.error("You cannot delete yourself");
        }
        try {
            setLoading(true)
            const response = await axios.delete(`https://mern-tlme.onrender.com/api/admin/users/delete/${id}`, {
                headers: {
                    Authorization: token
                }
            })
            toast.success(response.data.message)
            data()
        } catch (error) {
            toast.error('User deleted problem')
        } finally {
            setLoading(false);
        }
    }

    const editUser = (id) => {
        navigate(`/admin/edit/${id}`);
    }


    useEffect(() => {
        data()
    }, [token])


    if (loading) {
        return (
            <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full border-t-4 border-blue-500 w-16 h-16"></div>
            </div>
        );
    }

    return (
        <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">User Management</h2>
            <table className="min-w-full bg-white border border-gray-300">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border">Mobile</th>
                        <th className="py-2 px-4 border">Name</th>
                        <th className="py-2 px-4 border">Email</th>
                        <th className="py-2 px-4 border">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user._id}>
                            <td className="py-2 px-4 border">{user.number}</td>
                            <td className="py-2 px-4 border">{user.name}</td>
                            <td className="py-2 px-4 border">{user.email}</td>
                            <td className="py-2 px-4 border">
                                <button onClick={() => editUser(user._id)} className="mr-10 text-blue-500">Edit</button>
                                <button onClick={() => deleteUser(user._id)} className="text-red-500">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserList;
