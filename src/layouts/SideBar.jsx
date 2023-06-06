import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";

import { NavLink } from "react-router-dom";
import routes from "../routers/routes";

const useStyles = makeStyles((theme) => ({
  nav: {
    //height:"100vh",
    height: "1080px",
    width: "70px",
    boxShadow: "2px 0px 6px rgba(0, 0, 0, 0.25)",
    color: theme.palette.black.main,
    position: "fixed",
    backgroundColor: theme.palette.white.main,

    zIndex: "9999",

    [theme.breakpoints.down("lg")]: {
      height: "100vh",
      backgroundColor:"white"
    },

    [theme.breakpoints.down("md")]: {
      height: "100vh",
      //width: "60px",
      //backgroundColor:"green"
    },

    [theme.breakpoints.down("sm")]: {
      height: "100vh",
      //backgroundColor:"yellow"
    },
    
    [theme.breakpoints.down("xs")]: {
      height: "100vh",
      boxShadow: "2px 0px 6px rgba(0, 0, 0, 0)",
      backgroundColor: "rgba(0, 0, 0, 0)",
      
    },

    "& .icon": {
      color: theme.palette.black.main,
      padding:"10px 0px",
      "& *": {
        fontSize: "40px",
        [theme.breakpoints.down("lg")]: {
          fontSize: "30px",
        },
      },
      "&:hover": {
        color: theme.palette.primary.main,
        cursor:"pointer",
      },
    },

    "& .container": {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      margin: "auto",

      [theme.breakpoints.down("xs")]: {
        justifyContent: "flex-start",
      },

      "& .menu_icon": {
        marginTop: "40px",
        zIndex: "3",

        [theme.breakpoints.down("md")]: {
          marginTop: "10px",
        },

        [theme.breakpoints.down("xs")]: {
          marginTop: "20px",
          backgroundColor:"white",
          padding: "8px 8px 2px 8px",
          borderRadius: "100%",
          
        },
      },
      

      "& .sub_container": {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "90%",

        [theme.breakpoints.down("xs")]: {
          display:"none",
        },

        

        "& hr": {
          backgroundColor: theme.palette.black.main,
          border: "none",
          height: "100px",
          width: "2px",

          [theme.breakpoints.down("xs")]: {
            border: "none",
            height: "50px",
            width: "2px",
          },
        },
        "& p": {
          fontWeight: 400,
          fontSize: "14px",
          transform: "rotate(90deg)",
          width: "140px",

          [theme.breakpoints.down("xs")]: {
          width: "80%",
          textAlign:"center",
          fontSize: "12px",
          transform: "rotate(0deg)",
          fontWeight:"600",

          },
          
        },
      },

      "& .opened_menu": {
        height: "100%",
        width: "0",
        backgroundColor: "white",
        overflow: "hidden",

        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",

        position: "absolute",
        left: 0,
        top: 0,
        zIndex: "2",

        transition: "all 0.5s",

        "& .menu":{
          minWidth:"495px",
          height:"100vh",
          padding: "163px 122px 75px 122px",

          [theme.breakpoints.down("lg")]: {
            padding: "50px 0px 0px 0px",
            minWidth:"200px",
          },

          [theme.breakpoints.down("md")]: {
            padding: "30px 0px 0px 0px",
          },

          [theme.breakpoints.down("sm")]: {
            padding: "0px",
          },

          [theme.breakpoints.down("xs")]: {
            padding: "30px 0px 0px 0px",
            minWidth:"150px",
          },

          
        },

        "& h1": {
          margin: "34px 0px",
          padding: "0px",
          fontSize: "36px",
          fontWeight: "bold",

          "& a": {
            textDecoration: "none",
            color: theme.palette.black.main,
            transition: "all 0.2s",
            "&:hover": {
              color: theme.palette.primary.main,
              cursor: "pointer",
              borderLeft: `solid 5px ${theme.palette.primary.main}`,
              paddingLeft: "5px",
            },
          },
          [theme.breakpoints.down("lg")]: {
            fontSize: "25px",
            margin: "20px 0px",
          },

          [theme.breakpoints.down("xs")]: {
            fontSize: "20px",
            margin: "10px 0px",
          },
        },

        "& .icons": {
          display: "flex",
          justifyContent: "space-between",

          [theme.breakpoints.down("xs")]: {
            "& *":{
              fontSize:"25px",
            }
          },


        },
        "& .contact": {
          fontSize: "14px",
          fontWeight: "800",
        },
        "& .copy_rights": {
          color: " rgba(0, 0, 0, 0.5)",
          fontSize: "14px",
          [theme.breakpoints.down("lg")]: {
            fontSize: "12px",
          },
        },
      },
      "& .open": {
        width: "495px",
        height:"100vh",
        boxShadow: "2px 0px 6px rgba(0, 0, 0, 0.25)",

        [theme.breakpoints.down("lg")]: {
          width: "300px",
          padding: "50px",
        },

        [theme.breakpoints.down("xs")]: {
          width: "250px",
          padding: "40px 30px",
        },
      },
    },
  },
}));

function SideBar() {
  const [openMenu, setOpenMenu] = useState(false);
  const cs = useStyles();

  const close=()=>{
    setOpenMenu(false)
  }

  return (
    <nav className={cs.nav}  >
      <div className="container">
        <span
          className="menu_icon icon"
          onClick={() => {
            setOpenMenu(!openMenu);
          }}
        >
          {openMenu ? <CloseIcon /> : <MenuIcon />}
        </span>

        <div className="sub_container">
          <p>FOLLOW US</p>
          <hr />
          <span className="icon">
            <FacebookIcon />
          </span>
          <span className="icon">
            <LinkedInIcon />
          </span>
          <span className="icon">
            <InstagramIcon />
          </span>
          <span className="icon">
            <TwitterIcon />
          </span>
        </div>

        <div className={`opened_menu ${openMenu ? "open" : ""}`}>
          <div className="menu" >
          <div>
            {routes.map((route, key) => {
              return (
                <h1 key={key}>
                  <NavLink onClick={close} to={route.path}>{route.name}</NavLink>
                </h1>
              );
            })}
          </div>
          <div>
            <div className="icons">
              <span className="icon">
                <FacebookIcon />
              </span>
              <span className="icon">
                <LinkedInIcon />
              </span>
              <span className="icon">
                <InstagramIcon />
              </span>
              <span className="icon">
                <TwitterIcon />
              </span>
            </div>
            <p className="contact">contact.pikoro@gmail.com +216 55 449 063</p>
            <p className="copy_rights">© Copyright 2021 - PIKORO S.A.R.L</p>
          </div>
        </div>
      </div>
      </div>
    </nav>
  );
}

export default SideBar;
