import axios from "axios";
import {useSelector} from "react-redux";
import Auth from "../../services/auth";

const { REACT_APP_API_HOST } = process.env;

const GetCategoriesArtFromRedux = ()=>{
    return useSelector(state=>state.CategArt);
}

const getCategoriesArt = () => {
  return (dispatch) => {
    return axios
      .get(REACT_APP_API_HOST + "categ_art/getAll")
      .then((response) => {
        dispatch({
          type: "GetAllCategoriesArticles",
          value: response.data.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

const addCategArts = (categ) => {
  return (dispatch) => {
    return axios
      .post(REACT_APP_API_HOST + "categ_art/add", { ...categ },{headers:Auth()})
      .then((response) => {
        dispatch({
          type: "GetAllCategoriesArticles",
          value: response.data.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

const updateCategArts = (categ) => {
	return (dispatch) => {
	  return axios
		.put(REACT_APP_API_HOST + `categ_art/update/${categ._id}`, { ...categ },{headers:Auth()})
		.then((response) => {
		  dispatch({
			type: "GetAllCategoriesArticles",
			value: response.data.data,
		  });
		})
		.catch((error) => {
		  console.log(error);
		});
	};
  };

const deleteCategArts = (id) => {
  return (dispatch) => {
    return axios
      .delete(REACT_APP_API_HOST + `categ_art/delete/${id}`,{headers:Auth()})
      .then((response) => {
        dispatch({
          type: "GetAllCategoriesArticles",
          value: response.data.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export { GetCategoriesArtFromRedux,getCategoriesArt,addCategArts,updateCategArts,deleteCategArts };
