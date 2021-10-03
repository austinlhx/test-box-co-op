import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

export class Confirm extends Component {
    continue = async(e) => {
        e.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.props.values)
        }
        await fetch ('http://localhost:5000/submit/', requestOptions);
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        const { values: { firstName, lastName, email, teamMembers, sourceControl} } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Confirm Survey Info" />
                    <List>
                        <ListItem
                            primaryText= "First Name"
                            secondaryText= { firstName }
                        />
                        <ListItem
                            primaryText= "Last Name"
                            secondaryText= { lastName }
                        />
                        <ListItem
                            primaryText= "Email"
                            secondaryText= { email }
                        />
                        <ListItem
                            primaryText= "Team Members"
                            secondaryText= { teamMembers }
                        />
                        <ListItem
                            primaryText= "Source Control"
                            secondaryText= { sourceControl }
                        />
                    </List>
                    <br />
                    <RaisedButton
                        label="Back"
                        primary={false}
                        style={styles.button}
                        onClick={this.back}
                    />
                    <RaisedButton
                        label="Confirm & Continue"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button:{
        margin: 15
    }
}

export default Confirm
