import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import AccountCircle from "@material-ui/icons/AccountCircle";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import { ReactComponent } from "./logo.svg";
import Box from "@material-ui/core/Box";
const useStyles = makeStyles((theme) => ({
  width: "102%",
  shadow: "0px ",
  paddingLeft: "0px",
  grow: {
    backgroundColor: "#0166A9",
    flexGrow: 1,
    color: "white",
    maxHeight: "70px",
    boxShadow: "0px",
    outline: "0px"
  },
  menuButton: {
    marginRight: theme.spacing(0)
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
      paddingLeft: "0px",
      fontFamily: "Roboto"
    }
  },
  icon: {
    fontFamily: "Roboto",
    color: "rgba(255, 255, 255, 0.87)",
    fontSize: "14px",
    verticalAlign: "middle",
    marginLeft: "20px"
  },
  buttons: {
    justifyContent: "flex-end",
    marginRight: "10px"
  },
  label: {
    marginLeft: theme.spacing(3)
  },
  logo: {
    paddingLeft: "0px",
    marginLeft: "-25px"
  }
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  return (
    <div>
      <AppBar className={classes.grow}>
        <Toolbar>
          <Box display="flex" alignItems="center" className={classes.logo}>
            <ReactComponent height="44px" width="44px" />
            <Typography
              className={classes.title}
              variant="h6"
              marginLeft="100px"
            >
              streetlogix
            </Typography>
          </Box>
          <Box display="flex" flexGrow={3} className={classes.buttons}>
            <div>
              <IconButton className={classes.icon}>
                <BusinessCenterIcon />
                <p className={classes.label}>Partner Portal</p>
              </IconButton>
            </div>
            <div>
              <IconButton variant="contained" className={classes.icon}>
                <PowerSettingsNewIcon />
                <p className={classes.label}>Logout</p>
              </IconButton>
            </div>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}
