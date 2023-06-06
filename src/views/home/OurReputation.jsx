import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "../../components/containers/Container";

import SectionTitle from "../../components/typography/SectionTitle";
import ReputationCard from "../../components/cards/ReputationCard";

import bg from "../../assets/svg/Group43.svg";

const useStyles = makeStyles((theme) => ({
  our_reputations: {
    backgroundColor: theme.palette.secondary.main,
    width: "100%",
    padding: "150px 0px 150px 0px",

    backgroundImage:`url(${bg})`,
    backgroundPosition:"left center",
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat",
    backgroundAttachment:"fixed",

    [theme.breakpoints.down("lg")]: {
      padding: "120px 0px 120px 0px",
    },

    [theme.breakpoints.down("sm")]: {
      padding: "60px 0px 60px 0px",
    },

    "& .reputations":{
      marginTop:"100px",
      [theme.breakpoints.down("lg")]: {
        marginTop:"50px",
      },
    }
  },


}));

function OurReputation() {
  const cs = useStyles();
  return (
    <div className={cs.our_reputations}>
      <Container>

        <SectionTitle part1="Our" part2="Reputation." />

        <div>

        </div>

        <div className="reputations" >
        {<Grid container spacing={0}>
          {reputations.map((reput, key) => {
            return (
              <Grid key={key} item xl={4} lg={4} md={4}>
                <ReputationCard reput={reput} />
              </Grid>
            );
          })}
        </Grid>}
        </div>
      </Container>
    </div>
  );
}

export default OurReputation;


const reputations=[
    {
        text:[`Great support, like i have never seen before. 
        Thanks to the support team, they are very 
        helpfull.`,`
        This company provide customers great solution, 
        that makes them best.`],
        writer:"Mohamed Aziz Gattoussi",
        company:"Pikoro",
        border:true
    },{
       text:[`Great support, like i have never seen before. 
        Thanks to the support team, they are very 
        helpfull.`,`
        This company provide customers great solution, 
        that makes them best.`],
        writer:"Mohamed Aziz Gattoussi",
        company:"Pikoro",
        border:true
    },{
       text:[`Great support, like i have never seen before. 
        Thanks to the support team, they are very 
        helpfull.`,`
        This company provide customers great solution, 
        that makes them best.`],
        writer:"Mohamed Aziz Gattoussi",
        company:"Pikoro",
        border:true
    }
]

