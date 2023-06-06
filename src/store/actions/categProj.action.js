import axios from "axios";
import {useSelector} from "react-redux";
import Auth from "../../services/auth";

const { REACT_APP_API_HOST } = process.env;

const GetCategoriesProjFromRedux = ()=>{
    return useSelector(state=>state.CategProj);
}

const getCategoriesProj = () => {
  return (dispatch) => {
    return axios
      .get(REACT_APP_API_HOST + "categ_proj/getAll")
      .then((response) => {
        dispatch({
          type: "GetAllCategoriesProjects",
          value: response.data.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

const addCategProj = (categ) => {
  return (dispatch) => {
    return axios
      .post(REACT_APP_API_HOST + "categ_proj/add", { ...categ },{headers:Auth()})
      .then((response) => {
        dispatch({
          type: "GetAllCategoriesProjects",
          value: response.data.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

const updateCategProj = (categ) => {
	return (dispatch) => {
	  return axios
		.put(REACT_APP_API_HOST + `categ_proj/update/${categ._id}`, { ...categ },{headers:Auth()})
		.then((response) => {
		  dispatch({
			type: "GetAllCategoriesProjects",
			value: response.data.data,
		  });
		})
		.catch((error) => {
		  console.log(error);
		});
	};
  };

const deleteCategProj = (id) => {
  return (dispatch) => {
    return axios
      .delete(REACT_APP_API_HOST + `categ_proj/delete/${id}`,{headers:Auth()})
      .then((response) => {
        dispatch({
          type: "GetAllCategoriesProjects",
          value: response.data.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export { GetCategoriesProjFromRedux,getCategoriesProj,addCategProj,updateCategProj,deleteCategProj };
