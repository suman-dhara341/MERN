import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';

const EditUserForm = () => {
    const { id } = useParams();
    const navigate = useNavigate(); 
    const [user, setUser] = useState({
        name: '',
        number: '',
        email: ''
    });
    const [loading, setLoading] = useState(true);
    const token = useSelector((state) => state.authToken.token);

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const response = await axios.get(`https://mern-tlme.onrender.com/api/admin/users/get/${id}`, {
                    headers: {
                        Authorization: token
                    }
                });
                setUser(response.data.message);
            } catch (error) {
                toast.error('Failed to fetch user details');
            } finally {
                setLoading(false);
            }
        };
        fetchUserDetails();
    }, [id, token]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.patch(`https://mern-tlme.onrender.com/api/admin/users/get/${id}`, user, {
                headers: {
                    Authorization: token
                }
            });
            toast.success(response.data.message);
            navigate('/admin');
        } catch (error) {
            toast.error(error.response.data.message);
            console.error(error);
        }
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full border-t-4 border-blue-500 w-16 h-16"></div>
            </div>
        );
    }

    return (
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Edit User</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={user.name}
                        onChange={handleInputChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="number" className="block text-gray-700">Mobile Number</label>
                    <input
                        type="text"
                        id="number"
                        name="number"
                        value={user.number}
                        onChange={handleInputChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={user.email}
                        onChange={handleInputChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                        required
                    />
                </div>

                <div className="mb-4 flex justify-between">
                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    >
                        Update User
                    </button>
                    <button
                        type="button"
                        onClick={() => navigate('/admin')}
                        className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EditUserForm;
