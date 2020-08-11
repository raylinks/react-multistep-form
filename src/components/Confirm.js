import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar   from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import { List , ListItem} from 'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton'

export class Confirm extends Component {
    continue = e => {
        e.preventDefault(); 

        //processs to api 
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault(); 
        this.props.prevStep();
    }


    render() {
        const { values: { firstName, lastName, email, occupation, city, bio , experience, workplace, skills, location} } = this.props
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Confirm User Data"/>
                    <List>
                        <ListItem primaryText="First Name"  secondaryText={firstName}/>
                        <ListItem primaryText="Last Name"  secondaryText={lastName}/>
                        <ListItem primaryText="Email"  secondaryText={email}/>
                        <ListItem primaryText="Occupation"  secondaryText={occupation}/>
                        <ListItem primaryText="City"  secondaryText={city}/>
                        <ListItem primaryText="Bio"  secondaryText={bio}/>
                        <ListItem primaryText="Experience"  secondaryText={experience}/>
                        <ListItem primaryText="Location"  secondaryText={location}/>
                        <ListItem primaryText="Skills"  secondaryText={skills}/>
                        <ListItem primaryText="WORKPLACE"  secondaryText={workplace}/>
                    </List>
                   
                    <br/>
                    <RaisedButton label="Confirm Continue" primary={true} style={styles.button} onClick={this.continue} />
                    <RaisedButton label="Back" primary={false} style={styles.button}  onClick={this.back}/>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles  = { 
    button: { margin: 15 } 
 };

export default Confirm
