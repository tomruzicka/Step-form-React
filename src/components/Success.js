import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";

export class Success extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Úspěch" />
          <h1>Děkujeme za registraci</h1>
          <p>Přijde Vám email s dalšími informacemi</p>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Success;
