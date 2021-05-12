import React from "react";
import Switch from "@material-ui/core/Switch";
import MuiThemeProvider from "@material-ui/core/styles";
import createMuiTheme from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#0067AB",
      dark: "#002884",
      contrastText: "#fff"
    },
    secondary: {
      light: "#ff7961",
      main: "#02B66A",
      dark: "#ba000d",
      contrastText: "#000"
    }
  }
});
export default function SLSwitches() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <MuiThemeProvider theme={theme}>
      <div>
        <Switch
          checked={state.checkedA}
          onChange={handleChange}
          name="checkedA"
          inputProps={{ "aria-label": "secondary checkbox" }}
        />
        <Switch
          checked={state.checkedB}
          onChange={handleChange}
          color="primary"
          name="checkedB"
          inputProps={{ "aria-label": "primary checkbox" }}
        />
        <Switch inputProps={{ "aria-label": "primary checkbox" }} />
        <Switch disabled inputProps={{ "aria-label": "disabled checkbox" }} />
        <Switch
          disabled
          checked
          inputProps={{ "aria-label": "primary checkbox" }}
        />
        <Switch
          defaultChecked
          color="default"
          inputProps={{ "aria-label": "checkbox with default color" }}
        />
      </div>
    </MuiThemeProvider>
  );
}
