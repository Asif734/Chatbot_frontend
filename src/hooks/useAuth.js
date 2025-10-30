import { useState, useEffect } from 'react';
import { authAPI } from '../services/api';

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      setLoading(false);
      return;
    }

    try {
      const response = await authAPI.verifyToken();
      setUser(response.user);
    } catch (err) {
      console.error('Auth check failed:', err);
      localStorage.removeItem('authToken');
    } finally {
      setLoading(false);
    }
  };

  const signIn = async (credentials) => {
    setError(null);
    try {
      const response = await authAPI.signIn(credentials);
      localStorage.setItem('authToken', response.token);
      setUser(response.user);
      return { success: true };
    } catch (err) {
      setError(err.message);
      return { success: false, error: err.message };
    }
  };

  const sendOTP = async (data) => {
    setError(null);
    try {
      await authAPI.sendOTP(data);
      return { success: true };
    } catch (err) {
      setError(err.message);
      return { success: false, error: err.message };
    }
  };

  const signUp = async (data) => {
    setError(null);
    try {
      const response = await authAPI.signUp(data);
      localStorage.setItem('authToken', response.token);
      setUser(response.user);
      return { success: true };
    } catch (err) {
      setError(err.message);
      return { success: false, error: err.message };
    }
  };

  const signOut = () => {
    localStorage.removeItem('authToken');
    setUser(null);
  };

  return {
    user,
    loading,
    error,
    signIn,
    sendOTP,
    signUp,
    signOut,
    isAuthenticated: !!user,
  };
};