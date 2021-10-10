import * as api from "../api";

// action creators;

export const getFiles = () => async (dispatch) => {
  try {
    const { data } = await api.fetchFiles();
    const action = { type: "FETCH_ALL", payload: data };
    dispatch(action);
  } catch (error) {
    console.log(error.message);
  }
};

export const createFiles = (file) => async (dispatch) => {
  try {
    const { data } = await api.createFiles(file);
    const action = { type: "CREATE", payload: data };
    dispatch(action);
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteFiles = (id) => async (dispatch) => {
  try {
    await api.deleteFiles(id);
    const action = { type: "DELETE", payload: id };
    dispatch(action);
  } catch (error) {
    console.log(error.message);
  }
};
