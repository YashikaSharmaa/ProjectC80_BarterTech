import React, { Component} from 'react';
import {View, Text,TouchableOpacity, Alert} from 'react-native';
import { DrawerItems} from 'react-navigation-drawer';
import firebase from 'firebase';
import styles from '../styles';

export default class CustomSideBarMenu extends Component {
    render(){
        return(
            <View style = {styles.container}>
                <DrawerItems {...this.props} />
                <View style = {styles.drawer}>
                    <TouchableOpacity
                        style = {styles.logout}
                        onPress = {()=>{
                            this.props.navigation.navigate('Welcomescreen')
                            firebase.auth().signOut()
                        }}
                    >
                        <Text style = {styles.logoutText}>LOGOUT</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}