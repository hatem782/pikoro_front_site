import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Button } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({

    button:{
        outline:"none",
        border:`solid 2px ${theme.palette.primary.main}`,
        borderRadius:"50px",
        backgroundColor:"white",
        padding:"10px 60px",

        color:theme.palette.primary.main,
        fontWeight:500,
        fontSize:"36px",
        lineHeight:"54px",
        transition:"all 0.2s",

        "&:hover":{
            cursor:"pointer",
            backgroundColor:theme.palette.primary.main,
            color:"white",
        },

        [theme.breakpoints.down("lg")]: {
            padding:"10px 40px",
            fontSize:"25px",
            lineHeight:"30px",
        },

        [theme.breakpoints.down("md")]: {
            padding:"10px 20px",
            fontSize:"20px",
            lineHeight:"20px",
        },

        [theme.breakpoints.down("xs")]: {
            padding:"10px",
            fontSize:"16px",
            lineHeight:"16px",
        },
    }

}))

function CustomButton(props) {
    const {children,onClick,className}=props;
    const cs = useStyles();
    return (
        <Button className={className} onClick={onClick} className={cs.button} >
            {children}
        </Button>
    )
}

export default CustomButton
