import axios from 'axios';

const BASE_URL = 'http://localhost:3030'; 

export const getAllMembers = async () => {
   try {
     const response = await axios.get(`${BASE_URL}/getAll`);
     return response.data;
   } catch (error) {
     console.error('Error fetching members:', error);
     throw error;
   }
};

export const getMemberById = async (id) => {
   try {
     const response = await axios.get(`${BASE_URL}/getUser/${id}`);
     return response.data.user;
   } catch (error) {
     console.error('Error fetching member by ID:', error);
     throw error;
   }
};

export const addMember = async (newMember) => {
   try {
     const response = await axios.post(`${BASE_URL}/addMember`, newMember);
     return response.data;
   } catch (error) {
     console.error('Error adding member:', error);
     throw error;
   }
};

export const updateMember = async (id, updatedMember) => {
   try {
     const response = await axios.put(`${BASE_URL}/updateMember/${id}`, updatedMember);
     return response.data;
   } catch (error) {
     console.error('Error updating member:', error);
     throw error;
   }
};

export const deleteMember = async (id) => {
   try {
     const response = await axios.delete(`${BASE_URL}/deleteMember/${id}`);
     return response.data;
   } catch (error) {
     console.error('Error deleting member:', error);
     throw error;
   }
};
