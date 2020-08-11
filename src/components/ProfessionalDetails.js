import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar   from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

export class ProfessionalDetails extends Component {
    continue = e => {
        e.preventDefault(); 
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault(); 
        this.props.prevStep();
    }

    render() {
        const { values , handleChange} = this.props
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Enter user Professional Drtails"/>
                    <TextField hintText="Enter  your years of experience" floatingLabelFixed="experience" onChange={handleChange("experience")} defaultValue={values.experience} />
                   <br/>
                    <TextField hintText="Enter  your Last working place" floatingLabelFixed="workplace" onChange={handleChange("workplace")} defaultValue={values.workplace} />
                    <br/>
                    <TextField hintText="Enter  your Job Location" floatingLabelFixed="location" onChange={handleChange("location")} defaultValue={values.location} />
                     <br/>
                    <TextField hintText="Enter  your other Skills" floatingLabelFixed="skills" onChange={handleChange("skills")} defaultValue={values.skills} />
                    <br/>
                    <RaisedButton label="Continue" primary={true} style={styles.button} onClick={this.continue}/>
                    <RaisedButton label="Back" primary={false} style={styles.button}  onClick={this.back}/>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles  = { 
    button: { margin: 15 } 
 };


export default ProfessionalDetails
