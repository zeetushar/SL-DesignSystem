import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";
import AddIcon from "@material-ui/icons/Add";
import Icon from "@material-ui/core/Icon";
import SendIcon from '@material-ui/icons/Send';
import SaveIcon from "@material-ui/icons/Save";

const useStyles = makeStyles((theme) => ({
  root2: {

    "& > *": {
      margin: theme.spacing(1),
    color: "#0067AB",
    backgroundColor: "white",
    boxShadow: "none",
      fontFamily: 'Roboto, Sans Serif'
    },
    "&>*:hover": {
      backgroundColor: "#3B7AB1",
      color:"white",
    }
  },
 
}));

export default function IconLabelButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root2}>
      <Button
        variant="contained"
        className={classes.button}
        startIcon={<DeleteIcon />}
      >
        Delete
      </Button>
    
      <Button
        variant="contained"
        className={classes.button}
        startIcon={<SendIcon />}
      >
        Send
      </Button>
      <Button
        variant="contained"
        className={classes.button}
        startIcon={<CloudDownloadIcon />}
      >
        Load
      </Button>
      <Button
        variant="contained"
        className={classes.button}
        startIcon={<AddIcon />}
      >
        Create
      </Button>
      <Button
        variant="contained"
        className={classes.button}
        startIcon={<CloudUploadIcon/>}
      >
        Save
      </Button>
    </div>
  );
}
