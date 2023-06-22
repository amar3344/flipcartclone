import {Text,View,Image,StyleSheet,ImageStyle} from "react-native"
import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

import Icon from "react-native-vector-icons/AntDesign"
import Question from "react-native-vector-icons/EvilIcons"
import Shop from "react-native-vector-icons/Entypo"
import IonIcons from "react-native-vector-icons/Ionicons"


export class Account extends Component {
  render() {
    return (
      <View>
        <View style={styles.accCard}>
          <Text style={styles.accountText}>Account</Text>
          <View style={styles.btnCont}>
            <Text style={styles.tagText}>Log in to get exclusive offers</Text>
            <TouchableOpacity style={styles.btnLogin}>
              <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.accCard}>
          <Text>Account Settings</Text>
          <View style={styles.btnCont}>
            <View style={styles.rowCont}>
              <IonIcons name="language-outline" size={30} color={"blue"}/>
              <Text>Select Language</Text>
            </View>
            <Icon name="right" size={20} color={"#000"}/>
          </View>
          <View>
            <Image source={require('../assets/accountimg/nsetting.png')} style={styles.headsetIcon} tintColor="blue"/>
            <Text>Notifications Settings</Text>
          </View>
          <View>
            <Image source={require('../assets/accountimg/headtset.png')} style={styles.headsetIcon} tintColor="blue"/>
            <Text>Help Center</Text>
          </View>
        </View>
        <View style={styles.accCard}>
          <Text>Earn with Flipkart</Text>
          <View>
            <Shop name="shop" color={"blue"} size={30}/>
            {/* <Image source={require('../assets/accountimg/sell.jpeg')} style={styles.headsetIcon} /> */}
          </View>
        </View>
        <View style={styles.accCard}>
          <Text>Feedback & Ingormation</Text>
          <View>
            <Image source={require('../assets/accountimg/terms.png')} style={styles.headsetIcon} tintColor="blue"/>
            <Text>Terms, Policies and Licenses</Text>
          </View>
          <View>
            <Question name="question" color={"blue"} size={30}/>
            {/* <Image source={require('../assets/accountimg/download.png')} style={styles.headsetIcon} /> */}
            <Text>Browse FAQs</Text>
          </View>
        </View>
      </View>
    )
  }
}

export default Account

const styles = StyleSheet.create({

  rowCont:{
    flexDirection:'row',
    alignItems:'center',
  },

  tagText:{
    fontSize:15,
    fontFamily:'Roboto',
    fontWeight:'500',
    fontStyle:'normal',
    color:'#000',
  },

  loginText:{
    color:"#fff",
    fontWeight:'500',
    fontSize:15,
  },

  btnLogin:{
    padding:10,
    backgroundColor:'blue',
    borderRadius:5,
  },

  btnCont:{
    flexDirection:'row',
    justifyContent:"space-between",
    alignItems:'center'
  },

  accCard:{
    padding:10,
    marginBottom:10,
    backgroundColor:'#fff',
  },

  headsetIcon:{
    width:30,
    height:30,
  },

  accountText:{
    fontSize:30,
    fontFamily:'Roboto',
    fontWeight:'500',
    fontStyle:'normal',
    color:'#000',
  },
})