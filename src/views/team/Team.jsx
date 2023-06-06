import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import logoImg from "../../assets/svg/Logo.svg";
import bgImg from "../../assets/svg/bg.png";

import ahmed from "../../assets/images/team/ahmed.png";
import amine from "../../assets/images/team/amine.png";
import sabryn from "../../assets/images/team/sabryn.png";
import ibrahim from "../../assets/images/team/ibrahim.png";

import Container from "../../components/containers/Container";
import Grid from "@material-ui/core/Grid";
import SectionTitle from "../../components/typography/SectionTitle";

import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import IconButton from "@material-ui/core/IconButton";

import {FadeUp} from "../../Animations/Fade";


const useStyles = makeStyles((theme) => ({
  main: {
    padding: "30px 77px",

    color: theme.palette.black.main,

    backgroundImage: `url(${bgImg})`,
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",

    [theme.breakpoints.down("sm")]: {
      padding: "30px 0px",
    },
    

    "& .logo": {
      height: "63px",
      width: "223px",
      display: "block",
      margin: "0px auto 100px auto",

      [theme.breakpoints.down("lg")]: {
        margin: "0px auto 30px auto",
      },
    },

    "& .team": {
      marginTop: "60px",

      [theme.breakpoints.down("lg")]: {
        marginTop: "30px",
        marginBottom:"50px",
        padding:"0px 40px",
      },

      [theme.breakpoints.down("md")]: {
        marginTop: "0px",
        padding:"0px 20px",
      },

      [theme.breakpoints.down("sm")]: {
        marginTop: "0px",
        padding:"0px",
      },

      "& .member": {
        height: "750px",
        width: "450px",
        margin: "50px auto",
        borderRadius: "20px",

        backgroundSize: "cover",
        backgroundPosition: "center center",
        boxShadow: " 0px 6px 6px rgba(0, 0, 0, 0.25)",

        display: "flex",
        alignItems: "flex-end",
        transition:"all 0.1s",

        [theme.breakpoints.down("lg")]: {
          height: "500px",
          width: "350px",
        },

        [theme.breakpoints.down("md")]: {
          height: "450px",
          width: "300px",
          margin: "30px auto",
        },

        

        "& .info": {
          height: "260px",
          width: "300px",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",

          [theme.breakpoints.down("md")]: {
            height: "200px",
          },

          "& *": {
            color: theme.palette.white.main,
          },

          "& p": {
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "27px",
            margin: "0px",

            [theme.breakpoints.down("md")]: {
              fontSize: "16px",
            },
            
          },

          "& h4": {
            fontWeight: "600",
            fontSize: "24px",
            lineHeight: "24px",
            margin: "0px",
            [theme.breakpoints.down("md")]: {
              fontSize: "20px",
            },
            
          },

          "& .icon": {

            "& *":{
              [theme.breakpoints.down("md")]: {
                fontSize: "30px",
              },
            },

            "&:hover": {
              "& *": {
                color: theme.palette.primary.main,
              },
            },
          },
        },
      },

      "& .normal": {
        "&:hover":{
          transform: "scale(1.03)",
        }        
      },

      "& .Down": {
        transform: "translateY(50px)",
        [theme.breakpoints.down("sm")]: {
          transform: "translateY(0px)",
        },
        "&:hover":{
          transform: "translateY(50px) scale(1.03)",
          [theme.breakpoints.down("sm")]: {
            transform: "translateY(0px) scale(1.03)",
          },
        }

      },
    },
  },
}));

function Team() {
  const cs = useStyles();
  return (
    <div className={cs.main}>
      <img className="logo" src={logoImg} />

      <Container>
        <SectionTitle color="secondary" part1="Meet Our Team." center={true} />
        <div className="team">
          <Grid container spacing={0}>
            {members.map((member, key) => {
              return (
                <Grid item xl={6} lg={6} md={6} sm={12} xs={12} >
                  <FadeUp>
                  <Member key={key} member={member} />
                  </FadeUp>
                </Grid>
              );
            })}
          </Grid>
        </div>
      </Container>
    </div>
  );
}

export default Team;

const Member = (props) => {
  const { img, pos, name, role } = props.member;
  return (
    <div
      className={`member ${pos}`}
      style={{
        backgroundImage: `linear-gradient(
        rgba(0, 0, 0, 0.4),
    rgba(0, 0, 0, 0.4)) , url(${img})`,
      }}
    >
      <div className="info">
        <div>
        {role.map((re, key) => {
          return <p key={key}>{re}</p>;
        })}
        </div>

        <div className="name">
          {name.map((na, key) => {
            return <h4 key={key}>{na}</h4>;
          })}
        </div>

        <div className="icons">
          <IconButton className="icon">
            <FacebookIcon fontSize="large" />
          </IconButton>
          <IconButton className="icon">
            <LinkedInIcon fontSize="large" />
          </IconButton>
          <IconButton className="icon">
            <InstagramIcon fontSize="large" />
          </IconButton>
          <IconButton className="icon">
            <TwitterIcon fontSize="large" />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

const members = [
  {
    img: amine,
    pos: "normal",
    name: ["Jbeli", "Amine"],
    role: ["CTO"],
  },
  {
    img: ahmed,
    pos: "Down",
    name: ["Khelifi", "Ahmed"],
    role: ["CMO"],
  },
  {
    img: sabryn,
    pos: "normal",
    name: ["Hamrouny", "Sabryn"],
    role: ["CBO"],
  },
  {
    img: ibrahim,
    pos: "Down",
    name: ["Ibrahim", "Sarray"],
    role: ["CEO"],
  },
];
