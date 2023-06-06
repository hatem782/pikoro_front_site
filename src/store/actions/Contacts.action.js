import axios from "axios";

const { REACT_APP_API_HOST } = process.env;

const addContact = (contact,Setopen) => {
  return (dispatch) => {
    return axios
      .post(REACT_APP_API_HOST + "contact/add", { ...contact })
      .then((response) => {
        Setopen(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};



export { addContact };
