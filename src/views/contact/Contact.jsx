import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import withWidth from "@material-ui/core/withWidth";
import Grid from "@material-ui/core/Grid";

import logoImg from "../../assets/svg/Logo.svg";
import bgImg from "../../assets/svg/bg.png";
import Container from "../../components/containers/Container";

import SendBtn from "../../components/buttons/Button2";
import SectionTitle from "../../components/typography/SectionTitle";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import IconButton from "@material-ui/core/IconButton";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

import { addContact } from "../../store/actions/Contacts.action";
import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
  contact: {
    padding: "30px 77px",

    [theme.breakpoints.down("md")]: {
      padding: "20px",
    },

    color: theme.palette.black.main,

    backgroundImage: `url(${bgImg})`,
    backgroundPosition: "center center",
    backgroundSize: "cover",

    "& .logo": {
      height: "63px",
      width: "223px",
      display: "block",
      margin: "0px auto 100px auto",

      [theme.breakpoints.down("lg")]: {
        margin: "0px auto 60px auto",
      },
    },

    "& h2": {
      fontWeight: "400",
      fontSize: "24px",
      lineHeight: "36px",
      color: theme.palette.secondary.main,
      margin: "0px",
    },

    "& .form": {
      margin: "40px 0px",

      "& .input": {
        margin: "10px 0px",
        //backgroundColor:"white"

        "& *": {
          fontSize: "20px",

          [theme.breakpoints.down("md")]: {
            fontSize: "14px",
          },
        },
      },

      "& .btn":{
        [theme.breakpoints.down("md")]: {
          fontSize:"18px",
          padding:"5px 0px",
        },
      }
    },

    "& .info": {
      margin: "50px 0px",

      "& p": {
        fontWeight: "400",
        fontSize: "18px",
        lineHeight: "27px",
      },
    },

    "& .icons": {
      margin: "20px 0px",

      "& .icon": {
        color: theme.palette.black.main,
        "&:hover": {
          color: theme.palette.secondary.main,
        },
      },
    },

    "& .notification": {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.white.main,
      "& h2": {
        fontWeight: "500",
        fontSize: "25px",

        [theme.breakpoints.down("lg")]: {
          fontWeight: "400",
          fontSize: "20px",
        },
      },
    },
  },
}));

function Contact(props) {
  const cs = useStyles();
  const { width } = props;
  const [contact, setContact] = useState(initContact);
  const [open, Setopen] = useState(false);
  const dispatch = useDispatch();

  const submit = () => {
    console.log(contact);
    dispatch(addContact(contact, Setopen));
    //setContact(initContact)
    Setopen(true);
  };

  const handleClose = () => {
    Setopen(false);
  };

  return (
    <div className={cs.contact}>
      <img className="logo" src={logoImg} />

      <Container>
        <Grid
          className="grid"
          container
          spacing={width === "xl" || width === "lg" ? 8 : 4}
        >
          <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
            <SectionTitle part1="Let’s talk." color="secondary" />
            <h2>Feel free to connect with us !</h2>

            <div className="form">
              <TextField
                className="input"
                value={contact.name}
                onChange={(e) => {
                  setContact({ ...contact, name: e.target.value });
                }}
                fullWidth
                color="secondary"
                label="Your name"
                variant="outlined"
              />
              <TextField
                className="input"
                value={contact.email}
                onChange={(e) => {
                  setContact({ ...contact, email: e.target.value });
                }}
                fullWidth
                color="secondary"
                label="Your email"
                variant="outlined"
              />

              <TextField
                id="outlined-select-currency"
                color="secondary"
                value={contact.type}
                onChange={(e) => {
                  setContact({ ...contact, type: e.target.value });
                }}
                select
                fullWidth
                label="Email type"
                //helperText="Please select your currency"
                variant="outlined"
              >
                <MenuItem value={"client and projects"}>
                  Clients and projects
                </MenuItem>
                <MenuItem value={"questions"}>Questions</MenuItem>
                <MenuItem value={"recrutement"}>Recrutement</MenuItem>
                <MenuItem value={"internship"}>Internship</MenuItem>
              </TextField>

              <TextField
                className="input"
                value={contact.message}
                onChange={(e) => {
                  setContact({ ...contact, message: e.target.value });
                }}
                fullWidth
                color="secondary"
                label="Your message"
                multiline
                rows={width === "xl" || width === "lg" ? 8 : 6}
                variant="outlined"
              />
              <SendBtn className="btn" onClick={submit} fullwidth={true}>
                Send
              </SendBtn>
            </div>
          </Grid>

          <Grid item xl={6} lg={6} md={6} sm={12} xs={12} >
            <SectionTitle
              part1="Contact"
              part2="informations."
              color="secondary"
            />
            <div className="info">
              <p>+216 55 449 063</p>
              <p>contact.pikoro@gmail.com</p>
              <p>Parc Technologique Manouba, Manouba 2010</p>
            </div>
            <SectionTitle part1="Follow us." color="secondary" />

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
          </Grid>
        </Grid>
      </Container>

      <Snackbar
        open={open}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert
          className="notification"
          onClose={handleClose}
          severity="secondary"
        >
          <h2 style={{ color: "white" }}>
            Message sent successfully
          </h2>
        </Alert>
      </Snackbar>
    </div>
  );
}

export default withWidth()(Contact);

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const initContact = {
  name: "",
  email: "",
  type: "client and projects",
  message: "",
};
