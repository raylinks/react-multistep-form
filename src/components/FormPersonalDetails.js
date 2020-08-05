import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar   from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

export class FormPersonalDetails extends Component {
    continue = e => {
        e.preventDefault(); 
        this.props.nextStep();
    }
    render() {
        const { values , handleChange} = this.props
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Enter user details"/>
                    <TextField hintText="Enter  your First Name" floatingLabelFixed="First Name" onChange={handleChange("firstName")} defaultValue={values.firstName} />
                   <br/>
                    <TextField hintText="Enter  your Last Name" floatingLabelFixed="Last Name" onChange={handleChange("lastName")} defaultValue={values.lastName} />
                    <br/>
                    <TextField hintText="Enter  your email" floatingLabelFixed="email" onChange={handleChange("email")} defaultValue={values.email} />
                    <br/>
                    <RaisedButton label="Continue" primary={true} style={styles.button}/>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default FormPersonalDetails
