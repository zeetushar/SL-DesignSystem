import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(2),
    backgroundColor: "#ED807D",
    padding: "10px",
    minWidth: "200px",
    maxWidth: "200px",
    color: "black"
  },

  "&>*:hover": {
    backgroundColor: "#FFFFFF",
    color: "white"
  },
  mediumpriority: {
    margin: theme.spacing(2),
    backgroundColor: "#63D4BB",
    padding: "10px",
    minWidth: "200px",
    maxWidth: "200px",
    color: "black"
  },
  "button:hover": {
    backgroundColor: "#ED807D"
  },
  highpriority: {
    margin: theme.spacing(2),
    backgroundColor: "#FBD64F",
    padding: "10px",
    minWidth: "200px",
    maxWidth: "200px",
    color: "black"
  },
  extendedIcon: {
    marginRight: theme.spacing(5)
  },
  Avatar: {
    color: "black",
    border: "2px solid white",
    marginRight: "20px",
    marginLeft: "-10px",
    backgroundColor:"#adebe0",
    fontWeight: 'light'
    
  }
}));

export default function IconLabelButtons() {
  const classes = useStyles();

  return (
    <div className={classes.lowpriority} >
      <Button
        variant="contained"
        color="primary"
        size="1000px"
        startIcon
        className={classes.button}
      >
        <Avatar className={classes.Avatar}>RV</Avatar>
        Work Order
      </Button>
      <Button
        variant="contained"
        color="primary"
        size="1000px"
        startIcon
        className={classes.mediumpriority}
      >
      <Avatar className={classes.Avatar}>TA</Avatar>
        Work Order
        
      </Button>
      <Button
        variant="contained"
        color="primary"
        size="1000px"
        startIcon
        className={classes.highpriority}
      > <Avatar className={classes.Avatar} src='./avatar.jpeg'></Avatar>
        Work Order
       
      </Button>
    </div>
  );
}
