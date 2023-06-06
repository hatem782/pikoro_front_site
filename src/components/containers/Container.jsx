import React from 'react'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    container:{
        width:"1140px",
        position:"relative",
        margin:"auto",

        [theme.breakpoints.down("lg")]: {
            width:"960px",
        },

        [theme.breakpoints.down("md")]: {
            width:"760px",
        },

        [theme.breakpoints.down("sm")]: {
            width:"480px",
        },

        [theme.breakpoints.down("xs")]: {
            width:"320px",
        },
    }
}));

function Container(props) {
    const cs = useStyles();
    const {children}=props
    return (
        <div className={cs.container} >
            {children}
        </div>
    )
}

export default Container
