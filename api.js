// client/src/services/api.js

import axios from 'axios';

// Base URL for all API requests
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Function to get job listings
export const getJobListings = async (filters) => {
  try {
    const response = await api.get('/jobs', { params: filters });
    return response.data;
  } catch (error) {
    console.error('Error fetching job listings:', error);
    throw error;
  }
};

// Function to get a specific job's details
export const getJobDetails = async (jobId) => {
  try {
    const response = await api.get(`/jobs/${jobId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching job details:', error);
    throw error;
  }
};

// Function to create a new job (for employers)
export const createJob = async (jobData, token) => {
  try {
    const response = await api.post('/jobs', jobData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error creating job:', error);
    throw error;
  }
};

// Function for user registration
export const registerUser = async (userData) => {
  try {
    const response = await api.post('/auth/register', userData);
    return response.data;
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
};

// Function for user login
export const loginUser = async (userData) => {
  try {
    const response = await api.post('/auth/login', userData);
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};
