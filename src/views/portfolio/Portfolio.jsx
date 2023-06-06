import React,{useState,useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";

import Container from "../../components/containers/Container";
import SectionTitle from "../../components/typography/SectionTitle";
import ProjectCard from "../../components/cards/ProjectCard";

import logoImg from "../../assets/svg/Logowhite.svg";
import Button2 from "../../components/buttons/Button2";



import {GetProjectsFromRedux,getProjects,getOneProject} from "../../store/actions/Projects.action";
import { useDispatch } from "react-redux";


import Project from "./Project";

const useStyles = makeStyles((theme) => ({
  main: {
    "& .logo": {
      height: "63px",
      width: "223px",
      display: "block",
      margin: "0px auto 100px auto",

      [theme.breakpoints.down("lg")]: {
        margin: "0px auto 60px auto",
        //height: "45px",
      },
    },

    "& .head": {
      backgroundColor: theme.palette.secondary.main,
      padding: "30px 0px 200px 0px",


      "& h1":{
        marginTop:"10px",
      },


      "& p": {
        width: "724px",
        color: theme.palette.white.main,
        fontSize: "24px",
        fontWeight: "400",
        lineHeight: "36px",

        [theme.breakpoints.down("lg")]: {
          width: "600px",
          fontSize: "20px",
          fontWeight: "400",
          lineHeight: "30px",
        },

        [theme.breakpoints.down("lg")]: {
          width: "100%",
        },

      },
    },
    "& .button": {
      padding: "60px 0px",
      display: "flex",
      justifyContent: "center",

      [theme.breakpoints.down("lg")]: {
        padding: "30px 0px",
      },

      "& .btn": {
        padding: "15px 100px",
        fontSize: "24px",

        [theme.breakpoints.down("lg")]: {
          padding: "10px 100px",
          fontSize: "20px",
        },

        [theme.breakpoints.down("md")]: {
          padding: "6px 50px",
          fontSize: "18px",
        },
      },
    },
  },
}));

function Portfolio() {
  const cs = useStyles();
  const [more,setMore]= useState(4);
  
  const dispatch = useDispatch();
  const projects = GetProjectsFromRedux();

  useEffect(()=>{
    dispatch(getProjects());
  },[])

  const openProject = (id) => {
    dispatch(getOneProject(id));
  };

  const addMore=()=>{
    if(more<projects.length){
      setMore(more+4)
    }
  }


  return (
    <div className={cs.main}>
      <div className="head">
        <img className="logo" src={logoImg} />
        <Container>
          <SectionTitle color="white" part1="Go Digital" part2="With Pikoro." />
          <p>
            In Pikoro we believe in technology and we trust their builders. Our
            goal is to make everything simple, clean, and digital. We can
            provide any type of digital solutions, from a mini shop management
            system to an Artificial intelligence -powered system to make it easy
            for you.
          </p>
        </Container>
      </div>
      <div className="projecrs">
        {projects.map((project, key) => {
          if(key<more){
            return (
              <ProjectCard onClick={()=>{openProject(project._id)}} left={key % 2 == 1}  project={project} />
            );
          }
        })}
      </div>
      <div className="button">
        <Button2 className="btn" onClick={addMore} >See more</Button2>
      </div>

      <Project />

    </div>
  );
}

export default Portfolio;
