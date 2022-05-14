import axios from 'axios';

const backend_URL = 'localhost:5000';

export const fetchData = (id) => axios.get(backend_URL + '/student/' + id);
export const createData = (id, newData) => axios.post(backend_URL + '/student/' + id, newData);