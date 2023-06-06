import axios from "axios";
import { useSelector } from "react-redux";

const { REACT_APP_API_HOST } = process.env;

const GetProjectsFromRedux = () => {
  return useSelector((state) => state.Project);
};

const GetOneProjectFromRedux = () => {
  return useSelector((state) => state.OneProject);
};

const getProjects = () => {
  return (dispatch) => {
    return axios
      .get(REACT_APP_API_HOST + "project/getAll")
      .then((response) => {
        console.log(response.data.data);
        dispatch({
          type: "GetAllProjects",
          value: response.data.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

const getOneProject = (id) => {
  return (dispatch) => {
    return axios
      .get(REACT_APP_API_HOST + `project/getOne/${id}`)
      .then((response) => {
        console.log(response.data.data);
        dispatch({
          type: "GetOneProject",
          value: response.data.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

const CloseProject = () => {
  return (dispatch) => {
    dispatch({
      type: "CloseProject",
      value: null,
    });
  };
};

export {
  GetProjectsFromRedux,
  GetOneProjectFromRedux,
  getProjects,
  getOneProject,
  CloseProject,
};
