import React, {Component} from 'react';
import { View, StyleSheet, Text,TouchableOpacity, Alert, KeyboardAvoidingView, TextInput} from 'react-native';
import AppHeader from './AppHeader'
import firebase from 'firebase';
import db from '../config';

export default class SignupLoginScreen extends Component {
    constructor(){
      super();
      this.state={
        emailId : '',
        password: ''
      }
    }

    userLogin = (emailId, password)=>{
        firebase.auth().signInWithEmailAndPassword(emailId, password).then(()=>{
        return alert("Successfully Logged In")
    }).catch((error)=> {
        var errorMessage = error.message;
        return alert(errorMessage)
    })
    }

    userSignUp = (emailId, password) =>{
        firebase.auth().createUserWithEmailAndPassword(emailId, password).then((response)=>{
        return alert("Successfully Signed Up")
    }).catch(function(error) {
        // Handle Errors here.
        var errorMessage = error.message;
        return alert(errorMessage)
    });
    }

    render(){
        return(
            <KeyboardAvoidingView>
            <View style = {styles.container}>
                <AppHeader />
                <TextInput
                    style={styles.input}
                    placeholder="example@bartertech.com"
                    placeholderTextColor = "#dceacf"
                    keyboardType ='email-address'
                    onChangeText={(text)=>{
                        this.setState({
                            emailId: text
                        })
                    }}
                />

                <TextInput
                    style={styles.input}
                    secureTextEntry = {true}
                    placeholder="password"
                    placeholderTextColor = "#dceacf"
                    onChangeText={(text)=>{
                        this.setState({
                            password: text
                        })
                    }}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress = {()=>{this.userLogin(this.state.emailId, this.state.password)}}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={()=>{this.userSignUp(this.state.emailId, this.state.password)}}
                >
                    <Text style={styles.buttonText}>SignUp</Text>
                </TouchableOpacity>
            </View>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        width:100,
        height:'40',
        marginBottom:20,
        marginTop:20,
        borderRadius:10,
        backgroundColor:'#FEC601',
        alignSelf:'center'
    },
    container:{
        height:'100%',
        width:'100%',
        backgroundColor:'#2364AA'
    },
    input:{
        width: 300,
        height: 40,
        borderBottomWidth: 1.5,
        borderColor : '#61F2C2',
        fontSize: 20,
        margin:10,
        paddingLeft:10,
        alignSelf:'center'        
    },
    buttonText:{
        color:'#fff',
        fontWeight:'200',
        fontSize:20,
        alignSelf:'center',
        fontWeight:'bold'
    }
});

//2364AA 
//91F291
//61F2C2
//FEC601