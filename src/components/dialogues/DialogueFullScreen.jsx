import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";

import Fab from "@material-ui/core/Fab";

const useStyles = makeStyles((theme) => ({
  close: {
    position: "absolute",
    bottom: "5%",
    right: "2.5%",
    "& *": {
      fontSize: "30px",
    },
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogueFullScreen(props) {
  const { open, handleClose , children } = props;
  const classes = useStyles();


  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <Fab
        color="secondary"
        onClick={handleClose}
        aria-label="add"
        className={classes.close}
      >
        <CloseIcon />
      </Fab>
      
    </Dialog>
  );
}
