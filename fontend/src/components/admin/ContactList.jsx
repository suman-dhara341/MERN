import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify'

const ContactList = () => {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);
    console.log(contacts);


    const token = useSelector((state) => state.authToken.token)


    const data = async () => {
        try {
            const responds = await axios.get('https://mern-tlme.onrender.com/api/admin/contacts', {
                headers: {
                    Authorization: token
                }
            })
            setContacts(responds.data.message)
        } catch (error) {
            console.log(error);

            toast.error(error.response.data.message || 'Data get problem')

        } finally {
            setLoading(false);
        }
    }


    const deleteContact = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this user?");
        if (!confirmDelete) return;
        setLoading(true)
        try {
            await axios.delete(`https://mern-tlme.onrender.com/api/admin/contacts/${id}`, {
                headers: {
                    Authorization: token
                }
            });
            toast.success("Contact deleted successfully");
            data();
        } catch (error) {
            console.error(error);
            toast.error("Failed to delete contact");
        } finally {
            setLoading(false);
        }
    };



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
        <div>
            <h2 className="text-xl font-bold mb-4">Contact Management</h2>
            <table className="min-w-full bg-white border border-gray-300">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border">ID</th>
                        <th className="py-2 px-4 border">Name</th>
                        <th className="py-2 px-4 border">Email</th>
                        <th className="py-2 px-4 border">Message</th>
                        <th className="py-2 px-4 border">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((contact) => (
                        <tr key={contact._id}>
                            <td className="py-2 px-4 border">{contact._id}</td>
                            <td className="py-2 px-4 border">{contact.name}</td>
                            <td className="py-2 px-4 border">{contact.email}</td>
                            <td className="py-2 px-4 border">{contact.message}</td>
                            <td className="py-2 px-4 border">
                                <button onClick={() => deleteContact(contact._id)} className="mr-2 text-red-500">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ContactList;
