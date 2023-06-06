import React, { useState,useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import logoImg from "../../assets/svg/Logo.svg";
import bgImg from "../../assets/svg/bg.png";

import Container from "../../components/containers/Container";
import Grid from "@material-ui/core/Grid";
import BlogCard from "../../components/cards/BlogCard";


import Button2 from "../../components/buttons/Button2";
import Blog from "./Blog";

import {ZoomIn,ZoomOut} from "../../Animations/Zoom";

import {
  getArticles,
  GetArticlesFromRedux,
  getOneArticle,
} from "../../store/actions/Articles.action";
import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
  main: {
    padding: "30px 77px",

    [theme.breakpoints.down("sm")]: {
      padding: "30px 0px",
    },

    color: theme.palette.black.main,

    backgroundImage: `url(${bgImg})`,
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",

    "& .logo": {
      height: "63px",
      width: "223px",
      display: "block",
      margin: "0px auto 142px auto",

      [theme.breakpoints.down("lg")]: {
        margin: "0px auto 60px auto",
      },
    },

    "& h4": {
      display: "flex",
      justifyContent: "center",
      marginBottom: "40px",

      margin: "0px",
      fontSize: "18px",
      fontWeight: "400",

      "& hr": {
        border: "none",
        height: "2px",
        backgroundColor: theme.palette.black.main,
        flexGrow: "20",
        marginTop: "14px",

        
      },

      "& span": {
        flexGrow: "1",
      },
    },

    "& .filter": {
      margin: "100px 0px",
      width: "100%",
      display: "flex",
      justifyContent: "center",

      [theme.breakpoints.down("lg")]: {
        margin: "60px 0px",
      },

      "& h5": {
        margin: "0px 30px",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "18px",
        lineHeight: "27px",
        borderBottom: `solid 2px rgba(0,0,0,0)`,
        transition:"all 0.1s",


        "&:hover": {
          borderBottom: `solid 2px ${theme.palette.primary.main}`,
          color: theme.palette.primary.main,
          cursor: "pointer",
          transform:"scale(1.1)",
        },
      },
    },

    "& .button": {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      margin: "50px 0px 80px 0px",

      [theme.breakpoints.down("lg")]: {
        margin: "50px 0px",
      },

      "& .btn":{
        [theme.breakpoints.down("lg")]: {
          fontSize:"20px",
          padding:"5px 50px",
        },
      },
    },
  },
}));

function Blogs() {
  const cs = useStyles();
  const [more, setMore] = React.useState(3);
  const [existingCategories,setCategories]=useState([]);
  const [filteredArticles,setFilteredArticles]=useState([])

  const dispatch = useDispatch();
  const blogs=GetArticlesFromRedux();

  const openArticle = (id) => {
    dispatch(getOneArticle(id));
  };

  useEffect(()=>{
    dispatch(getArticles());
  },[])

  useEffect(()=>{

    const categs = blogs.map((blog)=>{
      return blog.category.title;
    })
    setCategories(["All", ...new Set(categs)]);

    setFilteredArticles(blogs);

  },[blogs]);


  const filterBlogs=(categ)=>{
    if(categ==="All"){
      setFilteredArticles(blogs);
    }
    else{
      setFilteredArticles(
        blogs.filter((blog)=>{
        return blog.category.title===categ
      })
      )
    }
  }


  const addMore=()=>{
    if(more<blogs.length){
      setMore(more+3)
    }
  }

  return (
    <div className={cs.main}>
      <img className="logo" src={logoImg} />

      <Container>
        <h4>
          <span>Recent blogs</span> <hr />
        </h4>

        <Grid container spacing={3}>
          {blogs.map((blog, key) => {
            if (blog.fetched === "alone") {
              return (
                <Grid key={key} item xl={12} lg={12} md={12} sm={12} xs={12} >
                  <div className="alone">
                    <ZoomOut>
                    <BlogCard onClick={()=>openArticle(blog._id)} blog={blog} />
                    </ZoomOut>
                  </div>
                </Grid>
              );
            }
          })}
          
          {blogs.map((blog, key) => {
            if (blog.fetched === "yes") {
              return (
                <Grid key={key} item xl={4} lg={4} md={4} sm={12} xs={12} > 
                    <ZoomIn> 
                  <BlogCard onClick={()=>openArticle(blog._id)} blog={blog} />
                  </ZoomIn>
                </Grid>
              );
            }
          })}

          <div className="filter">
            {
              existingCategories.map((categ,key)=>{
                return <h5 key={key} onClick={()=>filterBlogs(categ)} > {categ} </h5>
              })
            }
          </div>

          {filteredArticles.map((blog, key) => {
            if (key< more) {
              return (
                <Grid key={key} item xl={4} lg={4} md={4} sm={12} xs={12} >
                  <ZoomIn> 
                  <BlogCard onClick={()=>openArticle(blog._id)} blog={blog} />
                  </ZoomIn>
                </Grid>
              );
            }
          })}

          <div className="button">
            <Button2 className="btn" onClick={addMore} >See more</Button2>
          </div>
        </Grid>
      </Container>

      <Blog />

    </div>
  );
}

export default Blogs;