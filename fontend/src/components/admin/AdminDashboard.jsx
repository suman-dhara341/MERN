import React, { useEffect } from 'react';
import UserList from './UserList';
import ContactList from './ContactList';
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const admin = useSelector((state) => state.authToken.isAdmin);

  const navigate = useNavigate()

  useEffect(() => {
    if (!admin) {
      navigate('/');
    }
  }, [admin, navigate]);
  
  if(!admin){
    return null;
  }


  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <UserList />
      <ContactList />
    </div>
  );
}

export default AdminDashboard;
