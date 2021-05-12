import React from "react";
import clsx from "clsx";
import ListSubheader from "@material-ui/core/ListSubheader";
import { fade, makeStyles, createMuiTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import { ReactComponent } from "./logo.svg";
import Box from "@material-ui/core/Box";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import AccountCircle from "@material-ui/icons/AccountCircle";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import BusinessIcon from "@material-ui/icons/Business";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";

const drawerWidth = 180;

const useStyles = makeStyles((theme) => ({
  width: "102%",
  shadow: "0px ",
  paddingLeft: "0px",
  justifyContent: "flex-end",
  display: "block",
  "&.MuiListItem-button": {},
  root: {
    fontFamily: "Roboto",
    color: "white",

    "& .MuiDrawer-paper": {
      backgroundColor: "#0166A9",
      color: "white",
      marginTop: "65px",
      flex: "1"
    },
    "&.MuiListItem-button": {
      backgroundColor: "black"
    },
    nested: {
      paddingLeft: theme.spacing(4)
    }
  },
  grow: {
    backgroundColor: "#0166A9",
    flexGrow: 3,
    color: "white",
    maxHeight: "70px",
    boxShadow: "0px",
    outline: "0px"
  },
  menuButton: {
    marginRight: theme.spacing(2)
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
  },
  menuButton: {
    padding: "16px",
    marginRight: theme.spacing(0),

    height: "70px"
  },
  menubuttonclicked: {
    padding: "16px",
    backgroundColor: "rgba(255, 255, 255, 0.3)"
  },
  hide: {
    display: "none"
  },
  drawer: {
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-start"
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    width: "60px",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    "&.Listitemcollapsed": {
      marginLeft: theme.spacing(4)
    }
  },
  divdrawer: {
    marginTop: "70px"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  },
  List: {
    fontFamily: "Roboto",
    justifyContent: "flex-end",
    marginTop: "250px"
  },
  Listitem: {
    color: "white"
  },
  Listitemtext: {
    color: "white",
    marginLeft: theme.spacing(-0.5),
    fontSize: "10px",
    flexDirection: "row"
  },
  Listitembutton: {
    verticalAlign: "middle"
  },
  Listitemcollapsed: {
    color: "white",
    marginLeft: theme.spacing(1)
  },
  Listitemiconwhite: {
    marginTop: "-35px",
    backgroundColor: "white",
    padding: "23px",
    marginLeft: theme.spacing(5),
    borderRadius: "10px",
    position: "fixed",
    boxShadow: "rgb(0 74 140 / 16%) 0px 2px 6px",
    color: "#0067AB"
  },
  Listitemiconhover: {
    marginTop: "-35px",
    position: "fixed",
    backgroundColor: "white",
    padding: "23px",
    marginLeft: theme.spacing(4),
    borderRadius: "10px",
    zIndex: 10,
    boxShadow: "rgb(0 74 140 / 16%) 0px 2px 6px",
    color: "#0067AB"
  },
  Listitemtextclose: {
    marginLeft: theme.spacing(-20)
  },
  Listitemclicked: {},
  Listitemicon1: {
    color: "white",
    padding: "40px",
    marginLeft: theme.spacing(11)
  },
  Listitemiconclose: {
    color: "white",
    padding: "0px",
    marginLeft: "29px"
  }
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [collapse, setCollapse] = React.useState(false);
  const [click, setClick] = React.useState(true);
  const [click2, setClick2] = React.useState(false);
  const [click3, setClick3] = React.useState(false);
  const onClick = () => {
    setCollapse(!collapse);
    alert("Hello!");
  };

  function button1() {
    if (!click || !click2 || !click3) {
      setClick(!click);
    }

    setClick(!click);
    setClick2(click2);
    setClick3(click3);
  }

  function button2() {
    if (!click2 && !click && !click3) {
      setClick2(!click2);
    }
    setClick2(!click2);
    setClick3(click3);
    setClick(click);
  }

  function button3() {
    if (!click3) {
      setClick3(click3);
    }
    setClick3(!click3);
  }

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className="PrimarySearchAppBar">
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

      <div>
        <Drawer
          onMouseEnter={handleDrawerOpen}
          onMouseLeave={handleDrawerClose}
          edge="start"
          variant="permanent"
          className={clsx(classes.root, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open
            })
          }}
        >
          <List
            className={classes.List}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader
                component="div"
                id="nested-list-subheader"
              ></ListSubheader>
            }
          >
            <ListItem
              button
              className={clsx({
                [classes.menuButton]: !click,
                [classes.menubuttonclicked]: click
              })}
              onClick={button1}
            >
              <ListItemText
                primary="Profile Info"
                className={[
                  !open ? classes.Listitemtextclose : classes.Listitemtext
                ]}
              />
              <ListItemIcon>
                <AccountCircle
                  className={clsx(classes.root, {
                    [classes.Listitemiconwhite]: click,
                    [classes.Listitemicon1]: !click,
                    [classes.Listitemiconhover]: click & open,
                    [classes.Listitemiconclose]: !click & !open
                  })}
                />
              </ListItemIcon>
            </ListItem>
            <ListItem button className={classes.menuButton} onClick={button2}>
              <ListItemText
                primary="Manage Organization"
                className={[
                  !open ? classes.Listitemtextclose : classes.Listitemtext
                ]}
              />
              <ListItemIcon>
                <BusinessIcon
                  className={clsx(classes.root, {
                    [classes.Listitemiconwhite]: click2,
                    [classes.Listitemicon1]: !click2,
                    [classes.Listitemiconhover]: click2 & open,
                    [classes.Listitemiconclose]: !click2 & !open
                  })}
                />
              </ListItemIcon>
            </ListItem>
            <ListItem button className={classes.menuButton} onClick={button3}>
              <ListItemText
                primary="Manage Users"
                className={[
                  !open ? classes.Listitemtextclose : classes.Listitemtext
                ]}
              />
              <ListItemIcon>
                <PeopleAltIcon
                  className={clsx(classes.root, {
                    [classes.Listitemiconwhite]: click3,
                    [classes.Listitemicon1]: !click3,
                    [classes.Listitemiconhover]: click3 & open,
                    [classes.Listitemiconclose]: !click3 & !open
                  })}
                />
              </ListItemIcon>
            </ListItem>
          </List>
        </Drawer>
      </div>
    </div>
  );
}
