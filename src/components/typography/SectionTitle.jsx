import React from 'react'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    titles:{
        "& h1":{
            fontStyle: "normal",
            fontWeight:" bold",
            fontSize: "72px",
            lineHeight: "70px",
            margin:"0px",

            [theme.breakpoints.down("lg")]: {
                fontSize: "45px",
                lineHeight: "42px",
            },

            [theme.breakpoints.down("md")]: {
                fontSize: "40px",
                lineHeight: "35px",
            },
        },

        "& .primary":{
            color:theme.palette.primary.main,
        },
        "& .secondary":{
            color:theme.palette.secondary.main,
        },
        "& .black":{
            color:theme.palette.black.main,
        },
        "& .white":{
            color:theme.palette.white.main,
        },

        
        "& .center":{
            textAlign:"center",
        }
    },

    
}));

// color : primary/secondary/black/white
function SectionTitle(props) {
    const {part1,part2,color="white",center=false}=props;
    const cs=useStyles();
    return (
        <div className={cs.titles} >
            <h1 className={color + ` ${center? "center" : ""}`}  >{part1}</h1>
            <h1 className={color + ` ${center? "center" : ""}`} >{part2}</h1>
        </div>
    )
}

export default SectionTitle
