import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import Help from "@material-ui/icons/Help";
import { makeStyles } from "@material-ui/core/styles";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
  expandbutton: {
    background: "#0067AB",
    color: "white",
    fontFamily: "Roboto",
    "&:hover": {
      background: "#057CCB"
    }
  },
  button: {
    color: "#0067AB",
    backgroundColor: "#E4F4FF",
    "&:hover": {
        background: "#0067AB",
        color: "white"
  }
},
  buttonsettings: {
    justifyContent: "center",
    
  },
  HelpIcon:{
    color: "#0067AB",
    justifyContent: "center",
    width: "1.5em",
    height:"1.5em",
    margin: "-10px"
    
    
  },
  divclass:{
    justify:"center",
  
  }
}));
export default function AlertDialogSlide() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();
  return (
    <div >
      <Button
        variant="outlined"
        className={classes.expandbutton}
        onClick={handleClickOpen}
      >
        Click to see alert 
      </Button>
      <Dialog 
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        
      >
        <DialogTitle align="center">
        <Help className={classes.HelpIcon} />
        </DialogTitle>
        
        <DialogContent align="center">
       
          <DialogContentText id="alert-dialog-slide-description">
          Are you sure you want to make changes?
          </DialogContentText>
        </DialogContent>
        <DialogActions className={classes.buttonsettings}>
          <Button className={classes.button} onClick={handleClose}>
            No
          </Button>
          <Button onClick={handleClose} className={classes.button}>
           Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
