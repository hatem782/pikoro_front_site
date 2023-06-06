import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import logo from "../assets/images/logo_w.png";
import { Grid } from "@material-ui/core";
import ContactItem from "../components/cards/ContactItem";

const useStyles = makeStyles((theme) => ({
  contact: {
    backgroundColor: theme.palette.primary.main,
    width: "100%",
    padding: "44px 95px 20px 95px",

    
    [theme.breakpoints.down("lg")]: {
      padding: "20px 50px 20px 50px",
    },
    [theme.breakpoints.down("lg")]: {
      padding: "20px",
    },

    color: "white",

    "& img": {
      marginTop: "50px",

      [theme.breakpoints.down("md")]: {
        width:"150px",
      },

      [theme.breakpoints.down("sm")]: {
        display:"block",
        margin:"auto",
        marginTop: "20px",

      },
    },

    "& .groups": {
      display: "flex",
      justifyContent: "space-around",
      height: "100%",

      [theme.breakpoints.down("xs")]: {
        flexDirection:"column",
      },
    },

    "& .copyright": {
      fontWeight: "400",
      color: "white",
      fontSize: "12px",
      textAlign: "center",
      margin: "0px",
    },
  },
}));

function Footer() {
  const cs = useStyles();

  return (
    <div className={cs.contact}>
      <Grid container spacing={0}>
        <Grid item xl={2} lg={2} md={2} sm={12} xs={12} >
          <img src={logo} />
        </Grid>
        <Grid item xl={10} lg={10} md={10} sm={12} xs={12} >
          <div className="groups">
            {footers.map((contact, key) => {
              return <ContactItem contact={contact} key={key} />;
            })}
          </div>
        </Grid>
      </Grid>
      <p className="copyright">© Copyright 2021 - PIKORO S.A.R.L</p>
    </div>
  );
}

export default Footer;

const footers = [
  {
    title: "Pikoro S.A.R.L",
    items: [
      { text: "+216 55 449 063", link: "" },
      { text: "contact.pikoro@gmail.com", link: "" },
      { text: " Parc Technologique Manouba, Manouba 2010", link: "" },
    ],
  },
  {
    title: "SiteMap",
    isLink:true,
    same:true,
    items: [
      { text: "Home",link: "/home" },
      { text: "Our team",link: "/team" },
      { text: "Portfolio",link: "/portfolio" },
      { text: "Blogs",link: "/blogs" },
      { text: "Contact",link: "/contact" },
    ],
  },
  {
    title: "Follow us",
    isLink:true,
    same:false,
    items: [
      { text: "Facebook", link: "https://www.facebook.com/" },
      { text: "LinkedIn", link: "https://www.linkedin.com/home/?originalSubdomain=tn" },
      { text: "Instagram", link: "https://www.instagram.com/?nocaa=1" },
      { text: "Twitter", link: "https://twitter.com/twitter?lang=ar" },
    ],
  },
];
