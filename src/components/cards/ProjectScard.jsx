import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import img from "../../assets/images/exp_proj/Rectangle38.png";

const useStyles = makeStyles((theme) => ({
  project: {
    height: "500px",
    minWidth: "500px",
    padding: "0px 32px",
    flexGrow: "0",
    display: "flex",
    margin: "20px",
    color: theme.palette.white.main,
    alignItems:"flex-end",

    backgroundPosition:"center center",
    backgroundSize:"cover",
    borderRadius:"10px",
    transition:"all 0.2s",

    [theme.breakpoints.down("lg")]: {
      height: "300px",
      minWidth: "300px",
    },

    [theme.breakpoints.down("xs")]: {
        margin:"20px 0px",
    },


    "&:hover":{
      transform:"scale(1.05)",
      cursor:"pointer",
    },

    "& .content": {
      height: "150px",
      width:"100%",

      [theme.breakpoints.down("lg")]: {
        height: "100px",
      },

      "& p": {
        fontWeight: "400",
        fontSize: "18px",
        lineHeight: "27px",
        margin: "0px",
        padding: "0px",

        [theme.breakpoints.down("lg")]: {
          fontSize: "15px",
          lineHeight: "15px",

        },
      },

      "& h2": {
        fontWeight: "700",
        fontSize: "36px",
        lineHeight: "60px",
        margin: "0px",

        [theme.breakpoints.down("lg")]: {
          fontSize: "30px",
        },

      },
    },
  },
}));

function ProjectS(props) {
  const cs = useStyles();
  const { category, title, image } = props.project;
  const {onClick}=props;
  return (
    <div onClick={onClick}
      style={{
        backgroundImage: `linear-gradient(
            rgba(24, 106, 143, 0.5),
        rgba(24, 106, 143, 0.5)) , url(${image})`,
      }}
      className={cs.project}
    >
      <div className="content">
        <p>{category.title}</p>
        <h2>{title}</h2>
      </div>
    </div>
  );
}

export default ProjectS;
