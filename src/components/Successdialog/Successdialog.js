import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import Check from "@material-ui/icons/CheckCircle";
import { makeStyles } from "@material-ui/core/styles";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
  expandbutton: {
    background: "#048212",
    color: "white",
    fontFamily: "Roboto",
    borderColor: "transparent",
    "&:hover": {
      background: "#048212"
    }
  },
  button: {
    color: "#75A77A",
    backgroundColor: "#e9f6eb",
    "&:hover": {
      background: "#048212",
      color: "white"
    }
  },
  buttonsettings: {
    justifyContent: "center"
  },
  CheckIcon: {
    color: "#048212",
    justifyContent: "center",
    width: "1.5em",
    height: "1.5em",
    margin: "-10px"
  },
  divclass: {
    justify: "center"
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
    <div>
      <Button
        variant="outlined"
        className={classes.expandbutton}
        onClick={handleClickOpen}
      >
        Click to view warning dialog
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
          <Check className={classes.CheckIcon} />
        </DialogTitle>

        <DialogContent align="center">
          <DialogContentText id="alert-dialog-slide-description">
          Work Order Created Successfully!
          </DialogContentText>
        </DialogContent>
        <DialogActions className={classes.buttonsettings}>
          <Button onClick={handleClose} className={classes.button}>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
