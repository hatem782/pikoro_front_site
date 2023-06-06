import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Container from "../containers/Container";

import {ZoomIn} from "../../Animations/Zoom"

const useStyles = makeStyles((theme) => ({
  background: {
    padding: "50px 0px",

    [theme.breakpoints.down("lg")]: {
      padding: "20px 0px",
    },

  },

  project: {
    display: "flex",
    alignItems: "center",
    transform: "translateY(-200px)",

    [theme.breakpoints.down("xs")]: {
      flexDirection:"column",
    },

    "&:hover": {
      cursor: "pointer",
      "& .img": {
        height: "600px",
        width: "600px",

        [theme.breakpoints.down("lg")]: {
          height: "450px",
          width: "450px",
        },

        [theme.breakpoints.down("sm")]: {
          height: "250px",
          width: "350px",
        },

      },

    },

    "& .imgContainer": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",

      height: "500px",
      width: "500px",
      zIndex: "5",
      overflow: "hidden",
      borderRadius: "10px",

      [theme.breakpoints.down("lg")]: {
        height: "350px",
        width: "350px",

        
      },

      [theme.breakpoints.down("sm")]: {
        height: "250px",
        width: "350px",
        borderRadius: "0px",
      },

      [theme.breakpoints.down("xs")]: {
        height: "200px",
        width: "90%",
        borderRadius: "0px",
      },

      "& .img": {
        backgroundPosition: "center center",
        backgroundSize: "cover",
        boxShadow: " 0px 6px 6px rgba(0, 0, 0, 0.25) ",
        height: "100%",
        width: "100%",

        transition: "all 0.1s",
      },
    },

    "& .content": {
      height: "300px",
      width: "520px",
      padding: "30px 20px",
      backgroundColor: theme.palette.white.main,
      borderRadius: "0px 10px 10px 0px",
      boxShadow: " 0px 6px 6px rgba(0, 0, 0, 0.25) ",
      color: theme.palette.black.main,
      transition: "all 0.1s",

      [theme.breakpoints.down("lg")]: {
        height: "250px",
        width: "450px",
      },

      [theme.breakpoints.down("sm")]: {
        padding: "15px 10px",
      },

      [theme.breakpoints.down("xs")]: {
        width: "90%",
        height:"auto",
        borderRadius: "0px 0px 10px 10px",
      },


      "& p.category": {
        margin: "0px",
        fontWeight: 400,
        fontSize: "18px",
      },

      "& h2": {
        margin: "20px 0px",
        fontWeight: "700",
        fontSize: "36px",
        lineHeight: "60px",

        [theme.breakpoints.down("lg")]: {
          margin: "0px",
          fontSize: "25px",
        },

        [theme.breakpoints.down("sm")]: {
          fontSize: "20px",
          lineHeight: "40px",
        },
      },

      "& p": {
        fontWeight: "400",
        fontSize: "18px",
        lineHeight: "27px",

        [theme.breakpoints.down("lg")]: {
          margin: "10px 0px",
          fontSize: "15px",
        },

        [theme.breakpoints.down("sm")]: {
          margin: "0px",

        },

      },
    },
  },

  bg_white: {
    backgroundColor: theme.palette.white.darker,

    [theme.breakpoints.down("sm")]: {
      "& .imgContainer": {
        borderRadius:"0px 10px 10px 0px",
      }
    },

    [theme.breakpoints.down("xs")]: {
      "& .imgContainer": {
        borderRadius:"10px 10px 0px 0px",
      }
    },
  },
  bg_blue: {
    backgroundColor: theme.palette.secondary.main,

    [theme.breakpoints.down("sm")]: {
      "& .imgContainer": {
        borderRadius:"10px 0px 0px 10px",
      }
    },

    [theme.breakpoints.down("xs")]: {
      "& .imgContainer": {
        borderRadius:"10px 10px 0px 0px",
      }
    },
  },
  right: {
    flexDirection: "row-reverse",

    [theme.breakpoints.down("xs")]: {
      flexDirection:"column",
    },

    "& .content": {
      borderRadius: "10px 0px 0px 10px !important",
      [theme.breakpoints.down("xs")]: {
        borderRadius: "0px 0px 10px 10px !important",
      },
    },

    "&:hover": {
      cursor: "pointer",
      "& .content": {
        //transform: "scale(1.1) translateX(-20px)",
      },
    },
  },
}));

function ProjectCard(props) {
  const cs = useStyles();
  const { category, title, image, description } = props.project;
  const { onClick } = props;
  const { left } = props;
  return (
    <div  className={`${cs.background} ${left ? cs.bg_blue : cs.bg_white}`}>
      <Container>
      <ZoomIn>
        <div onClick={onClick} className={`${cs.project} ${left ? "" : cs.right}`}>
          <div className="imgContainer">
            <div
              className="img"
              style={{
                backgroundImage: `linear-gradient(
            rgba(24, 106, 143, 0.5),
            rgba(24, 106, 143, 0.5)) , url(${image})`,
              }}
            ></div>
          </div>

          <div className="content">
            <p className="category">{category.title}</p>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        </div>
        </ZoomIn>
      </Container>
    </div>
  );
}

export default ProjectCard;
