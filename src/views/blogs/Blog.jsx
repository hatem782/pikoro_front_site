import React,{useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import Fab from "@material-ui/core/Fab";

import img1 from "../../assets/images/exp_blog/Rectangle79.png";
import img2 from "../../assets/images/exp_blog/Rectangle80.png";

import Container from "../../components/containers/Container";
import Footer from "../../layouts/Footer";

import {GetOneArticleFromRedux,CloseArticle} from "../../store/actions/Articles.action";
import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
  close: {
    position: "fixed",
    bottom: "5%",
    right: "2.5%",
    "& *": {
      fontSize: "30px",
    },

    [theme.breakpoints.down("xs")]: {
      right: "10%",

    },
  },

  main: {
    position: "relative",
    padding:"0px 0px 0px 70px",

    [theme.breakpoints.down("xs")]: {
    padding:"0px",
    },

    "& .headImg": {
      height: "588px",
      width: "100%",
      backgroundPosition: "center center",
      backgroundSize: "cover",
      padding: "40px 0px",
      margin: "0px 0px 60px 0px",

      [theme.breakpoints.down("xs")]: {
        height:"400px",
        padding: "60px 0px",
      },

      "& h1": {
        margin: "0px",
        padding: "20px",
        textAlign: "center",
        color: theme.palette.black.main,
        backgroundColor: theme.palette.white.main,
        backgroundAttachment: "fixed",

        [theme.breakpoints.down("sm")]: {
          fontSize:"18px",
        },

        [theme.breakpoints.down("xs")]: {
          fontSize:"18px",
          padding:"20px",
        },
      },
    },

    "& .content": {
      "& p": {
        color: theme.palette.black.main,
        fontWeight: "400",
        fontSize: "18px",
        lineHeight: "27px",
      },

      "& p:first-child": {
        fontWeight: "600",
      },

      "& img": {
        width: "100%",
        display: "block",
        margin: "40px 0px",
      },

      "& figure":{
        padding:"0px",
        margin:"0px",
        
      },

      "& h2": {
        margin: "40px 0px",
        fontWeight: "600",
        fontSize: "24px",
        lineHeight: "36px",

        "& span": {
          color: theme.palette.primary.main,
        },
      },
    },
  },

  footerPadding:{
    margin: "0px 0px 0px 70px",

    [theme.breakpoints.down("xs")]: {
      margin: "0px",
    },
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Blog(props) {
  const cs = useStyles();
  const dispatch = useDispatch();
  const article = GetOneArticleFromRedux();

  const handleClose=()=>{
    dispatch(CloseArticle())
  }



  return (
    article===null ? <></>
    :<Dialog
      fullScreen
      open={article === null ? false : true}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <div className={cs.main}>
        <div className="headImg" style={{ backgroundImage: `url(${img1})` }}>
          <h1>{article.title}</h1>
        </div>

        <Container>
          <div className="content">
          <div className="subInfo" dangerouslySetInnerHTML={{ __html: article.content }} />
            <h2>
              Tag : <span className={cs.categ}> #{article.category.title} </span>
            </h2>
          </div>
        </Container>
      </div>

      <Fab color="secondary" onClick={handleClose} className={cs.close}>
        <CloseIcon />
      </Fab>
      <div className={cs.footerPadding}>
        <Footer />
      </div>
    </Dialog>
  );
}
