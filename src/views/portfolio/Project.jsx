import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import Fab from "@material-ui/core/Fab";
import Button from "../../components/buttons/Button";

import Grid from "@material-ui/core/Grid";

import Container from "../../components/containers/Container";
import Footer from "../../layouts/Footer";
import SectionTitle from "../../components/typography/SectionTitle";

import {
  GetOneProjectFromRedux,
  CloseProject,
} from "../../store/actions/Projects.action";
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
    margin: "0px 0px 0px 70px",

    [theme.breakpoints.down("xs")]: {
      margin: "0px",
    },

    "& .headImg": {
      height: "700px",
      width: "100%",
      backgroundPosition: "center center",
      backgroundSize: "cover",
      padding: "40px 0px",
      margin: "0px",

      [theme.breakpoints.down("xs")]: {
        height: "300px",
      },
    },

    "& .info": {
      padding: "0px 0px 50px 0px",
      "& p.category": {
        fontWeight: "400",
        fontSize: "18px",
        lineHeight: "27px",
      },

      "& .link": {
        margin: "40px 0px 0px 0px",
        "& button": {
          display: "block",
          margin: "auto",
        },
      },

      "& .description": {
        margin: "0px",
        width: "520px",
        fontWeight: "400",
        fontSize: "24px",
        lineHeight: "36px",

        [theme.breakpoints.down("lg")]: {
          fontSize: "20px",
          lineHeight: "30px",
        },

        [theme.breakpoints.down("sm")]: {
          width: "100%",
        },
      },
    },

    "& img": {
      width: "100%",
      display: "block",
      margin: "0px",
    },

    "& .subInfo": {
      "& p": {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.white.main,
        textAlign: "center",
        margin: "0px",
        padding: "20px",
        fontWeight: "400",
        fontSize: "24px",
        lineHeight: "36px",
        padding: "20px 400px",

        [theme.breakpoints.down("lg")]: {
          padding: "20px 200px",
          fontSize: "20px",
          lineHeight: "30px",
        },

        [theme.breakpoints.down("md")]: {
          padding: "20px 150px",
        },

        [theme.breakpoints.down("sm")]: {
          padding: "20px 50px",
          fontSize: "16px",
        },

      },

      "& figure": {
        padding: "0px",
        margin: "0px",
      },
      "& img": {
        width: "100%",
        display: "block",
        margin: "0px",
        padding: "0px",
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

export default function Project(props) {
  const cs = useStyles();

  const dispatch = useDispatch();
  const project = GetOneProjectFromRedux();

  useEffect(() => {
    if (project) {
      console.log(project.content);
    }
  }, [project]);

  const handleClose = () => {
    dispatch(CloseProject());
  };

  const ToTheWebsite = () => {
    let link = project.link;
    if (link.indexOf("https://www.") === -1) {
      window.open("https://www." + project.link, "_blank");
    } else if (link.indexOf("www.") === -1) {
      window.open("https://" + project.link, "_blank");
    }
  };

  return project ? (
    <Dialog
      fullScreen
      open={project === null ? false : true}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <div className={cs.main}>
        <div
          className="headImg"
          style={{ backgroundImage: `url(${project.image})` }}
        />

        <Container>
          <div className="info">
            <p>{project.category.title}</p>
            <Grid container spacing={0}>
              <Grid item xl={6} lg={6} md={6} sm={12} xs={12} >
                <SectionTitle
                  color="primary"
                  part1={project.title.substr(0, project.title.indexOf(" "))}
                  part2={project.title.substr(project.title.indexOf(" ") + 1)}
                />
              </Grid>
              <Grid item xl={6} lg={6} md={6} sm={12} xs={12} >
                <p className="description">{project.description}</p>
              </Grid>
            </Grid>

            <div className="link">
              <Button onClick={ToTheWebsite}>Link of the project</Button>
            </div>
          </div>
        </Container>

        <div
          className="subInfo"
          dangerouslySetInnerHTML={{
            __html: project.content.replace("<p><br></p>", ""),
          }}
        >
          {/* <img src={img2}></img>
          <p>
            Connect associations through a platform dedicated to the health
            sector in order to strengthen cooperation and interaction between
            them.
  </p>*/}
        </div>
      </div>

      <Fab color="secondary" onClick={handleClose} className={cs.close}>
        <CloseIcon />
      </Fab>
      <div className={cs.footerPadding} >
        <Footer />
      </div>
    </Dialog>
  ) : (
    <></>
  );
}
