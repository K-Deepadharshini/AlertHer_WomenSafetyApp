import axios from "axios";

const API_URL = "http://localhost:5000/api/contacts";

// Get all contacts
const getContacts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Add new contact
const addContact = async (contactData) => {
  const response = await axios.post(API_URL, contactData);
  return response.data;
};

// Delete contact
const deleteContact = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};

const contactService = {
  getContacts,
  addContact,
  deleteContact
};

export default contactService;
