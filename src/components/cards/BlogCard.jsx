import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  blog_card: {
    backgroundColor:theme.palette.white.main,
    width: "100%",
    height: "100%",
    boxShadow: " 0px 6px 6px rgba(0, 0, 0, 0.25)",
    borderRadius: "7px",
    borderBottom: "solid 7px transparent",

    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    transition: "all 0.1s",

    "& .img_cont": {
      height: "375px",
      width: "100%",
      overflow: "hidden",

      [theme.breakpoints.down("lg")]: {
        height: "250px",
      },

      [theme.breakpoints.down("md")]: {
        height: "200px",
      },

      [theme.breakpoints.down("sm")]: {
        margin:"auto",
      },

    },

    "& .img": {
      height: "100%",
      width: "100%",
      backgroundPosition: "center center",
      backgroundSize: "cover",
      borderRadius: "7px 7px 0px 0px",
      transition: "all 0.2s",

      "& p": {
        backgroundColor: theme.palette.primary.main,
        color:"white",
        textAlign: "left",
        display: "inline-block",
        margin: "0px",
        padding:"10px",

        borderRadius: "7px 0px 7px 0px",

        [theme.breakpoints.down("md")]: {
          padding:"5px 10px",
          fontSize:"15px",
        },
      },
    },

    "& .content": {
      padding: "19px 20px 20px 20px",

      [theme.breakpoints.down("md")]: {
        padding: "10px",
      },
      

      "& h2": {
        fontSize: "18px",
        fontWeight: "600",
        lineHeight: "27px",
        margin: "0px",
        textAlign: "center",

        [theme.breakpoints.down("lg")]: {
          fontSize: "16px",
        },

        [theme.breakpoints.down("md")]: {
          fontSize: "14px",
        },
      },
    },

    "& p.creator": {
      color: "rgba(0, 0, 0, 0.6)",
      fontWeight: "normal",
      fontSize: "14px",
      lineHeight: "21px",
      textAlign: "center",

      [theme.breakpoints.down("md")]: {
        margin:"0px",
      },
    },

    "&:hover": {
      cursor: "pointer",
      borderBottom: `solid 7px ${theme.palette.primary.main}`,

      [theme.breakpoints.down("md")]: {
        borderBottom: `solid 5px ${theme.palette.primary.main}`,
      },

      "&  p.creator": {
        color: theme.palette.primary.main,
      },
    },

    "&:active": {
      cursor: "pointer",
      transform: "scale(0.98)",
    },
  },
}));

function BlogCard(props) {
  const cs = useStyles();
  const { category, title, creator, image } = props.blog;
  const { onClick } = props;
  return (
    <div className={cs.blog_card} onClick={onClick} >
      <div className="img_cont">
        <div className="img" style={{ backgroundImage: `url(${image})` }}>
          <p>{category.title}</p>
        </div>
      </div>
      <div className="content">
        <h2>{title}</h2>
      </div>
      <p className="creator">Pikoro</p>
    </div>
  );
}

export default BlogCard;
