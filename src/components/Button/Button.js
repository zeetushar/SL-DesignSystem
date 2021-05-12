import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/AddCircle";
import NormalAdd from "@material-ui/icons/Add"
import EditIcon from "@material-ui/icons/Edit";
import FavoriteIcon from "@material-ui/icons/Favorite";
import NavigationIcon from "@material-ui/icons/Navigation";
import PeopleIcon from "@material-ui/icons/People";
import { fontFamily } from "@material-ui/system";

const useStyles = makeStyles((theme) => ({
  root: {

    "& > *": {
      margin: theme.spacing(2),
      backgroundColor: "#0067AB",
      color: "white",
      padding: '20px',
      fontFamily: 'Roboto, Sans Serif'
    },
    "&:hover>*": {
      backgroundColor: "#3B7AB1"
    }
  },
  AddIcon:{
padding: '0px 10px 0px 0px'
  },

  extendedIcon: {
    padding: '20px'
  }
}));

export default function FloatingActionButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Fab color="white" aria-label="add">
        <NormalAdd />
      </Fab>
      <Fab>
        <EditIcon />
      </Fab>
      <Fab variant="extended" style={{padding: '30px', borderRadius:'32px'}}>
        <AddIcon className={classes.AddIcon} />
        Create
      </Fab>
      <Fab>
        <PeopleIcon />
      </Fab>
    </div>
  );
}