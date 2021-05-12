import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/AddCircle";
import NormalAdd from "@material-ui/icons/Add"
import EditIcon from "@material-ui/icons/Edit";
import PeopleIcon from "@material-ui/icons/People";
import WebFont from 'webfontloader'

const useStyles = makeStyles((theme) => ({
  
  root3: {
    backgroundColor: "#333333",
    "& > *": {
      margin: theme.spacing(2),
      backgroundColor: "#85C1E6",
      color: "black",
    
      fontFamily: 'Nunito Sans, sans-serif'
    },
    "&:hover>*": {
      backgroundColor: "#ACDCFF",
    
    }
  },
  AddIcon:{

  paddingRight:'10px'
  },

  extendedIcon: {
    padding: '20px',
    borderRadius:'29px'
  }
}));

export default function FloatingActionButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root3}>
      <Fab color="white" aria-label="add">
        <NormalAdd />
      </Fab>
      <Fab>
        <EditIcon />
      </Fab>
      <Fab variant="extended" style={{borderRadius:'32px', padding: '30px'}}>
        <AddIcon className={classes.AddIcon} />
        Create
      </Fab>
      <Fab>
        <PeopleIcon />
      </Fab>
    </div>
  );
}