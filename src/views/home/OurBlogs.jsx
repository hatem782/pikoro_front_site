import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { useHistory } from "react-router";

import SectionTitle from "../../components/typography/SectionTitle";
import BlogCard from "../../components/cards/BlogCard";
import Blog from "../../views/blogs/Blog";

import Button from "../../components/buttons/Button";
import Container from "../../components/containers/Container";

import {ZoomIn} from "../../Animations/Zoom";


import {
  getArticles,
  GetArticlesFromRedux,
  getOneArticle,
} from "../../store/actions/Articles.action";
import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
  our_services: {
    width: "100%",
    padding: "150px 0px 150px 0px",

    [theme.breakpoints.down("lg")]: {
      padding: "100px 0px 100px 0px",
    },

    [theme.breakpoints.down("sm")]: {
      padding: "50px 0px 100px 0px",
    },

    "& .blogs": {
      margin: "100px 0px 0px 0px",

      [theme.breakpoints.down("lg")]: {
        margin: "50px 0px 0px 0px",
      },
    },

  },

  btn:{
    width:"100%",
    height:"100%",
    display:"flex",
    justifyContent:"flex-end",
    alignItems:"center",

    [theme.breakpoints.down("sm")]: {
      paddingTop:"30px",
      justifyContent:"center",
    },
  }



}));

function OurBlogs() {
  const cs = useStyles();
  const dispatch = useDispatch();
  const blogs = GetArticlesFromRedux();
  const history = useHistory();

  useEffect(() => {
    dispatch(getArticles());
  }, []);

  const openArticle = (id) => {
    dispatch(getOneArticle(id));
  };

  const ToBlogPage=()=>{
    history.push("/blogs")
  }



  return (
    <div className={cs.our_services}>
      <Container>
        <Grid container spacing={0}>
          <Grid item xl={6} lg={4} md={6} sm={12} xs={12}  >
            <SectionTitle part1="Our" part2="Recent Blogs." color="primary" />
          </Grid>
          <Grid item xl={6} lg={8} md={6} sm={12} xs={12} >
            <div className={cs.btn} >
            <Button  onClick={ToBlogPage} > Discover more blogs </Button>
            </div>
          </Grid>
        </Grid>

        <div className="blogs">
          <Grid container spacing={3}>
            {blogs.map((blog, key) => {
              if (blog.fetched === "yes") {
                return (
                  <Grid key={key} item xl={4} lg={4} md={4} sm={12} xs={12} >
                    <ZoomIn>
                    <BlogCard
                      onClick={() => openArticle(blog._id)}
                      blog={blog}
                    />
                    </ZoomIn>
                  </Grid>
                );
              }
            })}
          </Grid>
        </div>
      </Container>

      <Blog />
    </div>
  );
}

export default OurBlogs;
