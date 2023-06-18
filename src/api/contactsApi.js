import axios from 'axios';
axios.defaults.baseURL = 'https://648ed67c75a96b66444457c1.mockapi.io';

export const fetchContacts = async () => {
  const { data } = await axios.get(`/contacts`);
  //   console.log('responce', data);
  return data;
};

export const getContacts = () =>
  axios.get('/contacts').then(response => response.data);

export const addNewContact = newContact =>
  axios.post('/contacts', newContact).then(response => response.data);

export const removeContactById = id =>
  axios.delete(`/contacts/${id}`).then(response => response.data);
