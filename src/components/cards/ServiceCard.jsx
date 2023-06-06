import React from "react";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: theme.palette.primary.light,
    height: "380px",
    width: "380px",
    padding: "40px 30px 0px 30px",
    transition: "all 0.3s",
    color: theme.palette.white.main,
    textAlign: "center",

    [theme.breakpoints.down("lg")]: {
      height: "320px",
      width: "320px",
      padding: "30px 10px 0px 10px",
    },

    [theme.breakpoints.down("md")]: {
      height: "254px",
      width: "254px",
      padding: "10px",
      paddingTop:"15px",
    },

    [theme.breakpoints.down("sm")]: {
      height: "auto",
      width: "100%",
      padding: "10px",
      paddingTop:"15px",
      margin:" 0px",
    },


    "&:hover": {
      backgroundColor: theme.palette.primary.darker,
      cursor: "pointer",

      "& img": {
        transform: "scale(1.2)",
        [theme.breakpoints.down("lg")]: {
          transform: "scale(1.1)",
        },
      },
    },

    "&:active": {
        backgroundColor: theme.palette.primary.dark,

      },

      "& .cont":{
        height:"90px",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        marginBottom:"40px",

      [theme.breakpoints.down("lg")]: {
        height:"90px",
        marginBottom:"0px",
      },

      [theme.breakpoints.down("md")]: {
        height:"50px",
        transform:"scale(0.7)",
        marginBottom:"0px",
      },

    },

    "& img": {
      display: "block",
      margin: "auto",
      transition: "all 0.3s",

    },

    "& h5": {
      fontWeight: "600",
      fontSize: "20px",
      lineHeight: "50px",
      [theme.breakpoints.down("lg")]: {
        margin:"20px 0px",
      },
      [theme.breakpoints.down("md")]: {
        margin:"15px 0px 10px 0px",
        fontSize: "16px",
      },

      [theme.breakpoints.down("sm")]: {
        margin:"30px 0px 0px 0px",
        fontSize: "16px",
      },
    },

    "& p": {
      fontWeight: "300",
      fontSize: "14px",
      lineHeight: "21px",
      padding: "0px 30px",
      [theme.breakpoints.down("md")]: {
        padding: "0px 15px",
      },

      [theme.breakpoints.down("md")]: {
        padding: "0px 15px",
      },
    },
  },
}));

function ServiceCard(props) {
  const { title, img, text } = props.service;
  const cs = useStyles();
  return (
    <div className={cs.card} onMouseEnter={()=>{console.log("hover")}} onMouseLeave={()=>{console.log("not hover")}} >
        <div className="cont" >
      <img src={img} />
      </div>

      <h5>{title}</h5>

      <p>{text}</p>
    </div>
  );
}

export default ServiceCard;
