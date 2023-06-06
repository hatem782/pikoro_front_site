import React from 'react'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    card:{
        color:theme.palette.white.main,
        padding:"10px 40px 40px 10px",

        [theme.breakpoints.down("lg")]: {
            padding:"10px 20px 20px 10px",
        },

        [theme.breakpoints.down("sm")]: {
            margin:"20px 0px",
        },

        "& p":{
            fontWeight: "300",
            fontSize: "16px",
            lineHeight: "25px",

            [theme.breakpoints.down("lg")]: {
                fontSize: "14px",
                lineHeight: "20px",
            },
        },

        "& h4":{
            margin:"50px 0px 0px 0px",
            fontWeight: "600",
            fontSize: "15px",
            lineHeight: "18px",

            [theme.breakpoints.down("lg")]: {
                margin:"20px 0px 0px 0px",
                fontWeight: "600",
                fontSize: "14px",
                lineHeight: "16px",
            },
        },

        "& span":{

        },
    },
    border:{
        borderLeft:`solid 1px white`,
    }
}))


function ReputationCard(props) {
  const cs = useStyles();
  const {text,writer,company,border}=props.reput;

    return (
        <div className={cs.card + " " + (border ? cs.border :"")} >
            {text.map((t,key)=>{
                return <p key={key} >{t}</p>
            })}
            <h4>{writer} <span>,{company}</span></h4>
        </div>
    )
}

export default ReputationCard
