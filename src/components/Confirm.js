import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import { List, ListItem } from "material-ui/List";
import RaisedButton from "material-ui/RaisedButton";

export class FormUserDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    // Process form //
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { firstName, lastName, email, occupation, city, bio },
    } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Potvrzení uživatelských údajů" />
          <List>
            <ListItem primaryText="Jméno" secondaryText={firstName} />
            <ListItem primaryText="Přijmení" secondaryText={lastName} />
            <ListItem primaryText="Email" secondaryText={email} />
            <ListItem primaryText="Povolání" secondaryText={occupation} />
            <ListItem primaryText="Město" secondaryText={city} />
            <ListItem primaryText="Popis" secondaryText={bio} />
          </List>
          <br />
          <RaisedButton
            label="Potvrdit a pokračovat"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
          <RaisedButton
            label="Zpět"
            primary={false}
            style={styles.button}
            onClick={this.back}
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15,
  },
};

export default FormUserDetails;
