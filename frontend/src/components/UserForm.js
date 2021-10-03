import React, { Component } from 'react'
import FormEmail from './FormEmail';
import FormSource from './FormSource';
import FormUserDetails from './FormUserDetails';
import FormPeople from './FormPeople';
import Confirm from './Confirm';

export class UserForm extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        sourceControl: '',
        teamMembers: ''
    }

    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }
    render() {
        const { step } = this.state;
        const { firstName, lastName, email, teamMembers, sourceControl } = this.state
        const values = { firstName, lastName, email, teamMembers, sourceControl}

        switch(step) {
            case 1:
                return (
                    <FormUserDetails
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                        />
                )
            case 2:
                return <FormEmail
                            nextStep={this.nextStep}
                            prevStep={this.prevStep}
                            handleChange={this.handleChange}
                            values={values}
                        />


            case 3:
                return <FormSource
                            nextStep={this.nextStep}
                            prevStep={this.prevStep}
                            handleChange={this.handleChange}
                            values={values}
                        />
            case 4:
                return <FormPeople
                            nextStep={this.nextStep}
                            prevStep={this.prevStep}
                            handleChange={this.handleChange}
                            values={values}
                                    />
            case 5:
                return <Confirm
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                        />
            
        }

        return (
            <div>
                
            </div>
        )
    }
}

export default UserForm
