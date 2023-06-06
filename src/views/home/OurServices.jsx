import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "../../components/containers/Container";
import ServiceCard from "../../components/cards/ServiceCard";

import web from "../../assets/images/servicesImgs/web.png";
import design from "../../assets/images/servicesImgs/design.png";
import mobile from "../../assets/images/servicesImgs/mobile.png";
import SectionTitle from "../../components/typography/SectionTitle";

import { FadeUp} from "../../Animations/Fade"

import bg from "../../assets/svg/Group44.svg";

const useStyles = makeStyles((theme) => ({
  our_services: {
    backgroundColor: theme.palette.secondary.main,
    width: "100%",
    margin: "-80px 0px 0px 0px",
    padding: "150px 0px 200px 0px",
    //clipPath: "polygon(0 10%, 100% 0, 100% 100%, 0% 100%)",

    backgroundImage:`url(${bg})`,
    backgroundPosition:"left center",
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat",
    backgroundAttachment:"fixed",


    [theme.breakpoints.down("lg")]: {
      padding: "150px 0px 100px 0px",
    },

    [theme.breakpoints.down("sm")]: {
      clipPath: "polygon(0 5%, 100% 0, 100% 100%, 0% 100%)",
      padding: "100px 0px 100px 0px",
    },




    "& h2":{
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "36px",
      lineHeight: "50px",
      color:theme.palette.white.main,
      marginBottom:"100px",

      [theme.breakpoints.down("lg")]: {
        fontSize: "30px",
        wordSpacing:"5px",
        margin:"0px 0px 30px 0px",
      },

      [theme.breakpoints.down("md")]: {
        fontSize: "25px",
        wordSpacing:"3px",
        margin:"0px 0px 30px 0px",
      },

    }
  },


}));

function OurServices() {
  const cs = useStyles();
  return (
    <div className={cs.our_services}>
      <Container>

        <SectionTitle part1="Our" part2="Services." />
        <h2>All you need is here !</h2>

        <Grid container spacing={0}>
          {services.map((service, key) => {
            return (
              <Grid key={key} item xl={4} lg={4} md={4} sm={12}>
                <FadeUp >
                <ServiceCard service={service} />
                </FadeUp>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
}

export default OurServices;

const services = [
  {
    title: "WEB DEVELOPEMENT",
    img: web,
    text: `We provide a hight quality websites 
        with clean UI and greate User 
        Experience.`,
  },
  {
    title: "MOBILE DEVELOPEMENT",
    img: mobile,
    text: `We provide a cross platform mobile 
        application that works on both 
        Android and IOS.`,
  },
  {
    title: "DESIGN SERVICES",
    img: design,
    text: `We will give you the hands of the 
        most creative designers so you 
        can be stunning !`,
  },
];
