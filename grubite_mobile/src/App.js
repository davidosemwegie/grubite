import React, { Component } from 'react';
//import firebase from 'firebase';
import { View } from 'react-native';
import { Header, Button, Card, CardSection, Spinner } from './components/common';
import LoginForm from './components/loginForm';


class App extends Component {

  //state = { loggedIn: null }

  // componentWillMount() {
  //   firebase.initializeApp({
  //     apiKey: 'AIzaSyDB5xLO0lt-bWnpgNIOAImAaChfGRWne4E',
  //     authDomain: 'auth2-7e47f.firebaseapp.com',
  //     databaseURL: 'https://auth2-7e47f.firebaseio.com',
  //     projectId: 'auth2-7e47f',
  //     storageBucket: 'auth2-7e47f.appspot.com',
  //     messagingSenderId: '468545826839'
  //   });

  //   firebase.auth().onAuthStateChanged((user) => {
  //     if (user) {
  //       this.setState({ loggedIn: true });
  //     } else {
  //       this.setState({ loggedIn: false });
  //     }
  //   });
  // }

  // renderLoginForm() {
  //   switch (this.state.loggedIn) {
  //     case true:
  //       return (
  //         <Card>
  //           <CardSection>
  //             <Button onPress={() => firebase.auth().signOut()}>
  //               Log Out
  //             </Button>
  //           </CardSection>
  //         </Card>
  //       );
  //     case false:
  //       return <LoginForm />; 
  //     default:
  //       return <Spinner size='large' />;     
  //   }
  // }

    render() {
      return (
        <View>
          <Header headerText="Authentication" />
          {/* {this.renderLoginForm()} */}
          <LoginForm />
        </View>
      );
    }
}

export default App;
