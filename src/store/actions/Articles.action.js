import axios from "axios";
import {useSelector} from "react-redux";

const { REACT_APP_API_HOST } = process.env;

const GetArticlesFromRedux = ()=>{
    return useSelector(state=>state.Articles);
}

const GetOneArticleFromRedux = () => {
  return useSelector((state) => state.OneArticle);
};


const getArticles = () => {
  return (dispatch) => {
    return axios
      .get(REACT_APP_API_HOST + "article/getAll")
      .then((response) => {
        dispatch({
          type: "GetAllArticles",
          value: response.data.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};


const getOneArticle = (id) => {
  return (dispatch) => {
    return axios
      .get(REACT_APP_API_HOST + `Article/getOne/${id}`)
      .then((response) => {
        console.log(response.data.data);
        dispatch({
          type: "GetOneArticle",
          value: response.data.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

const CloseArticle = () => {
  return (dispatch) => {
    dispatch({
      type: "CloseArticle",
      value: null,
    });
  };
};


export { GetArticlesFromRedux,getArticles , GetOneArticleFromRedux,getOneArticle,CloseArticle };
