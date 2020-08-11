import React, { Component } from 'react'
import FormUserDetails from './FormUserDetails'
import FormPersonalDetails from './FormPersonalDetails'
import ProfessionalDetails  from './ProfessionalDetails'
import Confirm from './Confirm'
import Success from './Success'

export class UserForm extends Component {
    state = {
        step:1,
        firstname:'',
        lastname:'', 
        email:'',
        occupation:'',
        city:'',
        bio:'',
        experience:'',
        workplace:'',
        location:'',
        skills:'',
    }

    //proceed to next step
    nextStep = () => {
        const { step} = this.state;
        this.setState({
            step: step + 1
        });
    }

    //back to previous step
    prevStep = () => {
        const { step} = this.state;
        this.setState({
            step: step - 1
        });
    }

    //handle field change
    handleChange = input => e => {
        this.setState({[input] : e.target.value});
        
    }

    render() {
        const {step } = this.state;
        const { firstName, lastName, email, occupation, city, bio ,workplace, skills, experience,location} = this.state; 
        const values = {  firstName, lastName, email, occupation, city, bio, workplace, skills, location, experience};

            switch(step){
                case 1:
                        return (
                           <FormUserDetails 
                               nextStep={this.nextStep}
                               handleChange={this.handleChange}
                               values={values}
                           />
                        );
                        case 2:
                              return (
                           <FormPersonalDetails 
                               nextStep={this.nextStep}
                                prevStep={this.prevStep}
                               handleChange={this.handleChange}
                               values={values}
                           />
                        );
                        case 3:
                              return (
                           <ProfessionalDetails 
                               nextStep={this.nextStep}
                                prevStep={this.prevStep}
                               handleChange={this.handleChange}
                               values={values}
                           />
                        );
                            case 4:
                                  return (
                           <Confirm 
                               nextStep={this.nextStep}
                                prevStep={this.prevStep}
                               values={values}
                           />
                             );
                                case 5:
                                   return  <Success/>;
            }
       
    }
}

export default UserForm
