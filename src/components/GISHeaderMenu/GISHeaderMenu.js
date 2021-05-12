import React from "react";
import clsx from "clsx";
import ListSubheader from "@material-ui/core/ListSubheader";
import Collapse from "@material-ui/core/Collapse";
import { fade, makeStyles, createMuiTheme } from "@material-ui/core/styles";
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
import DashboardIcon from "@material-ui/icons/Dashboard";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import ShowChartIcon from "@material-ui/icons/ShowChart";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import EditIcon from "@material-ui/icons/Edit";
import TableChartIcon from "@material-ui/icons/TableChart";
import SettingsIcon from "@material-ui/icons/Settings";
import workorder from "./line-md_construction.png";
import FilterListIcon from "@material-ui/icons/FilterList";
import PrintIcon from "@material-ui/icons/Print";
import FormatPaintIcon from "@material-ui/icons/FormatPaint";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import TextureIcon from "@material-ui/icons/Texture";
import PaletteIcon from "@material-ui/icons/Palette";
import BookmarkIcon from "@material-ui/icons/Bookmark";

const drawerWidth = 180;

const useStyles = makeStyles((theme) => ({
  width: "102%",
  shadow: "0px ",
  paddingLeft: "0px",
  justifyContent: "flex-end",
  display: "block",
  "&.MuiListItem-button": {
    backgroundColor: "black"
  },
  root: {
    fontFamily: "Roboto",
    color: "white",
    backgroundColor: "black",
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
    marginRight: theme.spacing(2)
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
    justifyContent: "flex-end"
  },
  Listitem: {
    color: "white",
    marginTop: "15px"
  },
  Listitemtext: {
    marginLeft: theme.spacing(-1.5),
    fontSize: "10px",
    marginTop: "13px",
    flex: "4"
  },
  Listitembutton: {
    marginTop: "5px",
    verticalAlign: "middle"
  },
  Listitemcollapsed: {
    color: "white",
    marginLeft: theme.spacing(1)
  },
  Listitemiconclose: {
    marginLeft: theme.spacing(-1)
  },
  Listitemtextclose: {}
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [collapse, setCollapse] = React.useState(false);
  const handleClick = () => {
    setCollapse(!collapse);
  };

  const handleDrawerOpen1 = () => {
    setOpen(!open);
  };

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

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
            <ListItem button marginTop="20px">
              <ListItemIcon>
                <CalendarTodayIcon className={classes.Listitem} />
              </ListItemIcon>
              <ListItemText
                primary="Dashboard"
                className={classes.Listitemtext}
              />
            </ListItem>
            <ListItem button className={classes.Listitembutton}>
              <ListItemIcon>
                <ShowChartIcon className={classes.Listitem} />
              </ListItemIcon>
              <ListItemText primary="Charts" className={classes.Listitemtext} />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <AttachMoneyIcon className={classes.Listitem}>
                  if
                </AttachMoneyIcon>
              </ListItemIcon>
              <ListItemText
                primary="Budgeting"
                className={classes.Listitemtext}
              />
            </ListItem>
            <ListItem
              button
              onClick={handleClick}
              className={classes.Listitembutton}
            >
              <ListItemIcon className={classes.Listitem}>
                <EditIcon />
              </ListItemIcon>
              <ListItemText
                primary="Editing"
                className={classes.Listitemtext}
              />
              {collapse ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={collapse} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button className={classes.nested}>
                  <ListItemIcon className={classes.Listitemcollapsed}>
                    <TextureIcon
                      className={
                        open ? classes.Listitem : classes.Listitemiconclose
                      }
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="Texture"
                    className={classes.Listitemtext}
                  />
                </ListItem>
                <ListItem button className={classes.nested}>
                  <ListItemIcon className={classes.Listitemcollapsed}>
                    <PaletteIcon
                      className={
                        open ? classes.Listitem : classes.Listitemiconclose
                      }
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="Symbology Editor"
                    className={classes.Listitemtext}
                  />
                </ListItem>
                <ListItem button className={classes.nested}>
                  <ListItemIcon className={classes.Listitemcollapsed}>
                    <BookmarkIcon
                      className={
                        open ? classes.Listitem : classes.Listitemiconclose
                      }
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="Management Section Editor"
                    className={classes.Listitemtext}
                  />
                </ListItem>
              </List>
            </Collapse>

            <ListItem button className={classes.Listitembutton}>
              <ListItemIcon>
                <SettingsIcon className={classes.Listitem} />
              </ListItemIcon>
              <ListItemText
                primary="Settings"
                className={classes.Listitemtext}
              />
            </ListItem>
            <ListItem button className={classes.Listitembutton}>
              <ListItemIcon>
                <img src={workorder} alt="React Logo" />
              </ListItemIcon>
              <ListItemText
                primary="Work Orders"
                className={
                  open ? classes.Listitemtext : classes.Listitemtextclose
                }
              />
            </ListItem>
            <ListItem button className={classes.Listitembutton}>
              <ListItemIcon>
                <FilterListIcon className={classes.Listitem} />
              </ListItemIcon>
              <ListItemText primary="Filter" className={classes.Listitemtext} />
            </ListItem>
            <ListItem button className={classes.Listitembutton}>
              <ListItemIcon>
                <PrintIcon className={classes.Listitem} />
              </ListItemIcon>
              <ListItemText primary="Print" className={classes.Listitemtext} />
            </ListItem>
            <ListItem button className={classes.Listitembutton}>
              <ListItemIcon>
                <FormatPaintIcon className={classes.Listitem} />
              </ListItemIcon>
              <ListItemText primary="Draw" className={classes.Listitemtext} />
            </ListItem>
          </List>
        </Drawer>
      </div>
    </div>
  );
}
