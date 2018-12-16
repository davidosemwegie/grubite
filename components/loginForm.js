import React, { Component } from 'react';
//import firebase from 'firebase';
import axios from 'axios'
import { Text } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
    state = { email: '', password: '', error: '', message: '', loading: false };

    // onButtonPress() {
    //     const { email, password, } = this.state;
    //     this.setState({ error: '', message: '', loading: true });

    //     firebase.auth().signInWithEmailAndPassword(email, password)
    //         .then(this.onLoginSuccess.bind(this))
    //         .catch(() => {
    //             firebase.auth().createUserWithEmailAndPassword(email, password)
    //                 .then(this.onLoginSuccess.bind(this))
    //                 .catch(this.onLoginFail.bind(this));
    //         });
    // }

    // onLoginSuccess() {
    //     this.setState({
    //         loading: false,
    //         message: 'Signed In',
    //         error: '',
    //         email: '',
    //         password: ''
    //     });
    // }

    // onLoginFail() {
    //     this.setState({
    //         loading: false,
    //         message: '',
    //         error: 'Authenication Failed',
    //         email: '',
    //         password: ''
    //     });
    // }

    // loginAttempt(email, password) {
    //     firebase.auth().signInWithEmailAndPassword(email, password)
    //     .then(() => {
    //         this.onLoginSuccess();
    //     })
    //     .catch(() => {
    //         this.createAccount(email, password);
    //     });
    // }

    // createAccount(email, password) {
    //     firebase.auth().createUserWithEmailAndPassword(email, password)
    //         .then(this.onLoginSuccess().bind(this))
    //         .catch(this.onLoginFail().bind(this));
    // }

    renderButton() {
        if (this.state.loading) {
            return <Spinner size='small' />;
        }

        return (
            <Button onPress={this.createUser.bind(this)} >Log In</Button>
        );
    }

    async createUser() {
        const { email, password, } = this.state;
        console.log(email)

        const user = {
            email: 'david',
            password: 'david'
        }

        //console.log(`the user email is ${user.email} and the password is ${password}`)
        
        axios.post('http://localhost:3001/create_restaurant_owner', {user})
         .then(function(response){
            console.log('saved successfully')
          })
        .catch(function (error) {
            console.log(error);
        })
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input 
                        label='Email'
                        name="email"
                        placeholder="Enter your email here"
                        onChangeText={email => this.setState({ email })}
                        value={this.state.email} 
                    />
                </CardSection> 
                
                <CardSection>
                    <Input 
                        label='Password'
                        name="password"
                        placeholder="password"
                        onChangeText={password => this.setState({ password })}
                        value={this.state.password}
                        secureTextEntry
                    />
                </CardSection>

                <Text style={styles.errorStyle}>{this.state.error}</Text>
                <Text style={styles.messageStyle}>{this.state.message}</Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    textInputStyle: {
        height: 20,
        width: 100,
        borderWidth: 2,
    },
    errorStyle: {
        color: 'red',
        fontSize: 20,
        alignSelf: 'center',
    },
    messageStyle: {
        color: 'green',
        fontSize: 20,
        alignSelf: 'center',
    }
};

export default LoginForm;
