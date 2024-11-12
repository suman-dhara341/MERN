import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeToken } from '../features/counter/authSlice';

const LogOut = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(removeToken());
  }, [dispatch]);

  return <Navigate to="/login" />;
};

export default LogOut;
