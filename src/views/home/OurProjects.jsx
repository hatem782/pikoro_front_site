import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import withWidth from '@material-ui/core/withWidth';
import { Grid } from "@material-ui/core";
import { useHistory } from "react-router";

import SectionTitle from "../../components/typography/SectionTitle";
import ProjectScard from "../../components/cards/ProjectScard";
import Button from "../../components/buttons/Button";

import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

import {ZoomIn} from "../../Animations/Zoom";


import {
  GetProjectsFromRedux,
  getProjects,
  getOneProject,
} from "../../store/actions/Projects.action";
import { useDispatch } from "react-redux";
import Project from "../portfolio/Project";
import Container from "../../components/containers/Container";

const useStyles = makeStyles((theme) => ({
  our_services: {
    width: "100%",
    padding: "100px 0px 100px 0px",

    [theme.breakpoints.down("lg")]: {
      padding: "100px 0px 100px 0px",
    },

    [theme.breakpoints.down("md")]: {
      padding: "50px 0px 100px 0px",
    },

    "& .btnContainer":{
      width:"100%",
      display:"flex",
      justifyContent:"flex-end",
    },

    "& .container":{
      margin:"0px 0px 0px 388px",
      [theme.breakpoints.down("lg")]: {
        margin: "0px 0px 0px 150px",
      },

      [theme.breakpoints.down("md")]: {
        margin: "0px 0px 0px 50px",
      },

      [theme.breakpoints.down("xs")]: {
        margin: "0px 0px 0px 0px",
      },
    },

    "& .carosselCont": {
      margin: "100px 0px 0px 0px",
      width: "100%",
      overflow: "hidden",
      position: "relative",

      [theme.breakpoints.down("lg")]: {
        marginTop: "50px",
      },

      [theme.breakpoints.down("xs")]: {
        margin: "50px auto 0px auto",
        width: "300px",
        borderRadius:"10px",
      },

      "& span": {
        position: "absolute",
        borderRadius: "500px",
        zIndex: "20",
        transform: "translate(0px,-50%)",
        top: "50%",
        backgroundColor: "rgba(0,0,0,0.6)",
        transition: "all 0.2s",


        "&:hover": {
          transform: "translate(0px,-50%) scale(1.1)",
          cursor: "pointer",
          backgroundColor: theme.palette.primary.main,
          "& *": {
            color: "white",
          },
        },

        "& *": {
          color: theme.palette.primary.main,
          fontSize: "50px",

          [theme.breakpoints.down("lg")]: {
            fontSize: "30px",
          },

          [theme.breakpoints.down("md")]: {
            fontSize: "20px",
          },
        },
      },
      "& .left": {
        left: "50px",
        padding: "15px 20px 10px 15px",
        [theme.breakpoints.down("xs")]: {
          left: "20px",
        },
      },
      "& .right": {
        right: "50px",
        padding: "15px 15px 10px 20px",
        [theme.breakpoints.down("xs")]: {
            right: "20px",
        },
      },
    },

    "& .carossel": {
      display: "flex",
      transition: "all 0.5s",
    },
  },

  btn:{
    width:"100%",
    height:"100%",
    display:"flex",
    justifyContent:"flex-end",
    alignItems:"center",
    [theme.breakpoints.down("sm")]: {
      paddingTop:"30px",
      justifyContent:"center",
    },
  }
}));

function OurProjects(props) {
  const cs = useStyles();
  const {width} = props;
  const [position, setposition] = useState(0);
  const [trans, setTrans] = useState(540);
  const [nbItems, setnbItems] = useState(2);
  const dispatch = useDispatch();
  const projects = GetProjectsFromRedux();
  const history = useHistory();

  useEffect(() => {
    console.log(position);
  }, [position]);

  // to calculate the value of the translation
  useEffect(()=>{
    if(width==="xl"){
      setTrans(540);
      setposition(0);
      setnbItems(2)
    }

    if(width==="lg"){
      setTrans(340);
      setposition(0);
      setnbItems(3)
    }

    if(width==="md"){
      setTrans(340);
      setposition(0);
      setnbItems(2)
    }

    if(width==="sm"){
      setTrans(340);
      setposition(0);
      setnbItems(1)
    }

    if(width==="xs"){
      setTrans(300);
      setposition(0);
      setnbItems(1)
    }

  },[width])

  useEffect(() => {
    dispatch(getProjects());
  }, []);

  const openProject = (id) => {
    dispatch(getOneProject(id));
  };

  const ToProjectPage = () => {
    history.push("/portfolio");
  };

  const toRight = () => {
    if (position < 0) {
      setposition(position + trans);
    }
  };

  const toLeft = () => {
    let max =-1 *(projects.filter((proj) => {return proj.fetched;}).length *trans -trans * nbItems);

    if (position > max) {
      setposition(position - trans);
    }
  };

  return (
    <div className={cs.our_services}>
      <Container>
      <Grid container spacing={0}>
        <Grid item xl={4} lg={4} md={4} sm={12} xs={12} >
          <SectionTitle part1="Our" part2="Projects." color="primary" />
        </Grid>
        <Grid item xl={8} lg={8} md={8} sm={12} xs={12}  >
        <div className={cs.btn} >
          <Button  onClick={ToProjectPage}> Discover more projects </Button>
          </div>
        </Grid>
      </Grid>
      </Container>

      <div className="container" >
      <div className="carosselCont">
        <div
          className="carossel"
          style={{ transform: `translate(${position}px,0px)` }}
        >
          {projects.map((project, key) => {
            if (project.fetched) {
              return (
                <ZoomIn key={key}>
                <ProjectScard
                  onClick={() => openProject(project._id)}
                  project={project}
                />
                </ZoomIn>
              );
            }
          })}
        </div>

        <span onClick={toRight} className="left">
          <ArrowForwardIosIcon
            fontSize="large"
            style={{ transform: "rotate(180deg)" }}
          />
        </span>
        <span onClick={toLeft} className="right">
          <ArrowForwardIosIcon fontSize="large" />
        </span>
      </div>
      </div>

      <Project />
    </div>
  );
}

export default withWidth()(OurProjects);
