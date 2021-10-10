import axios from "axios";

const url = "http://localhost:5000/file";

export const fetchFiles = () => axios.get(url);

export const createFiles = (newFile) => axios.post(url, newFile);

export const deleteFiles = (id) => axios.delete(`${url}/${id}`);