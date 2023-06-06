import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Button } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({

    button:{
        outline:"none",
        border:`solid 2px ${theme.palette.secondary.main}`,
        borderRadius:"50px",
        backgroundColor:"white",
        padding:"10px 60px",
        

        color:theme.palette.secondary.main,
        fontWeight:500,
        fontSize:"18px",
        lineHeight:"20px",
        transition:"all 0.2s",

        

        "&:hover":{
            cursor:"pointer",
            backgroundColor:theme.palette.secondary.main,
            color:"white",
        },



        [theme.breakpoints.down("lg")]: {
            padding:"10px 40px",
            fontSize:"25px",
            lineHeight:"30px",
        },
    },

    full:{
        width:"100%",
    }

}))

function Button2(props) {
    const {children,fullwidth=false,className,onClick}=props;
    const cs = useStyles();
    return (
        <Button onClick={onClick} className={cs.button + ` ${className} ${fullwidth ? cs.full :"" }`} >
            {children}
        </Button>
    )
}

export default Button2
