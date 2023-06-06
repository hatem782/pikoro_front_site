import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { useHistory } from "react-router";

import logoImg from "../../assets/svg/Logo.svg";
import aliens from "../../assets/images/Group25.png";
import bgImg from "../../assets/svg/bg.png";

import {ZoomIn,ZoomOut} from "../../Animations/Zoom";

import Button from "../../components/buttons/Button";

const useStyles = makeStyles((theme) => ({
  head: {
    padding: "30px 77px 200px 77px",

    color: theme.palette.black.main,

    backgroundImage: `url(${bgImg})`,
    backgroundPosition: "center center",
    backgroundSize: "cover",

    [theme.breakpoints.down("md")]: {
      padding: "30px 77px 170px 77px",
    },

    [theme.breakpoints.down("xs")]: {
      padding: "30px 20px 170px 20px",
    },

    "& .logo": {
      height: "63px",
      width: "223px",
      display: "block",
      margin: "0px auto 142px auto",

      [theme.breakpoints.down("lg")]: {
        margin: "0px auto 60px auto",
      },
    },

    "& .img": {
      width: "50%",
      display: "block",
      margin: "auto",
      transform: "translateY(-50px) scale(1.3)",

      [theme.breakpoints.down("lg")]: {
      transform: "translateY(0px) scale(1.6)",
      },

      [theme.breakpoints.down("md")]: {
        transform: "translateY(30px) scale(1.6)",
      },

      [theme.breakpoints.down("sm")]: {
        margin:"50px auto 30px auto",
      },
    },

    "& .left": {
      width: "582px",
      margin: "50px auto",
      [theme.breakpoints.down("lg")]: {
        margin: "auto",
      },

      [theme.breakpoints.down("md")]: {
        width: "100%",
      },


      "& .pick_original_offers": {
        "& h1": {
          fontSize: "96px",
          fontWeight: "700",
          lineHeight: "75px",
          margin: "0px",
          padding: "0px",

          [theme.breakpoints.down("lg")]: {
            fontSize: "65px",
            lineHeight: "55px",
          },

          [theme.breakpoints.down("md")]: {
            fontSize: "50px",
            lineHeight: "40px",
          },
        },
        "& span": {
          color: theme.palette.primary.main,
        },
      },

      "& p": {
        fontSize: "24px",
        fontWeight: "normal",
        lineHeight: "36px",
        margin: "50px 0px",

        [theme.breakpoints.down("lg")]: {
          margin: "20px 0px",
          fontSize: "20px",
          lineHeight: "30px",
        },
      },
    },
  },
}));

function Head() {
  const cs = useStyles();
  const history = useHistory();

  const ToContactPage = () => {
    history.push("/contact");
  };

  return (
    <div className={cs.head}>
      <img className="logo" src={logoImg} />

      <Grid container>
        <Grid item xl={5} lg={6} md={5} sm={12} >
          <div className="left">
            <ZoomOut>
            <div className="pick_original_offers">
              <h1>
                <span>PI</span>C<span>K</span>
              </h1>
              <h1>
                <span>OR</span>IGINAL
              </h1>
              <h1>
                <span>O</span>FFERS
              </h1>
            </div>
            </ZoomOut>
            
            <p>
              Our mission is to digitilaze our environement through business
              developement and IT solutions based on artificial intelligence.
            </p>
            <Button onClick={ToContactPage}>Let’s work together!</Button>
          </div>
        </Grid>

        <Grid item xl={7} lg={6} md={7} sm={12} >
          <ZoomIn>
          <img src={aliens} className="img" />
          </ZoomIn>
        </Grid>
      </Grid>
    </div>
  );
}

export default Head;
