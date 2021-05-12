import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import { ReactComponent } from "./logo.svg";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import HelpIcon from "@material-ui/icons/Help";
import customer from "./customer.svg";
import NotificationsIcon from "@material-ui/icons/Notifications";
import DashboardIcon from '@material-ui/icons/Dashboard';

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
    marginLeft: "20px",
    fontWeight: "500"
  },
  buttons: {
    justifyContent: "flex-end",
    marginRight: "10px"
  },
  label: {
    marginLeft: theme.spacing(2)
  },
  logo: {
    paddingLeft: "0px",
    marginLeft: "-25px"
  },
  singleicons: {
    marginTop: "10px",
    marginLeft: theme.spacing(2),
    color: "white"
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
                <Avatar
            
                  src="../Dashboardheader/sal.jpg"
                //   className={classes.avatar}
                />
                <p className={classes.label}>Hi Sal!</p>
              </IconButton>
            </div>
            <div>
              <IconButton variant="contained" className={classes.icon}>
                <DashboardIcon />
                <p className={classes.label}>Dashboard</p>
              </IconButton>
            </div>
            <div>
              <IconButton variant="contained" className={classes.icon}>
                <HelpIcon />
                <p className={classes.label}>Help</p>
              </IconButton>
            </div>
            <div>
              <IconButton variant="contained" className={classes.icon}>
                <img src={customer} alt="React Logo" />
                <p className={classes.label}>Support</p>
              </IconButton>
            </div>
            <div>
              <IconButton variant="contained" className={classes.icon}>
                <PowerSettingsNewIcon />
                <p className={classes.label}>Logout</p>
              </IconButton>
            </div>
            <div>
              <IconButton variant="contained" className={classes.singleicons}>
                <NotificationsIcon />
              </IconButton>
            </div>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}
