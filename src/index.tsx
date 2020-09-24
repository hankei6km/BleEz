import * as React from "react";
import { render } from "react-dom";

import { ThemeProvider, createMuiTheme, CssBaseline } from "@material-ui/core";

import App from "./App";

const theme = createMuiTheme({
  // palette: {
  //   type: "dark"
  // }
});

const rootElement = document.getElementById("root");
render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  rootElement
);
