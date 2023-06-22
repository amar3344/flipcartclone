import {Text, View, Image, TouchableOpacity,StyleSheet} from 'react-native';
import React, {Component} from 'react';
import { TextInput } from 'react-native-gesture-handler';

interface IProps{
    navigation:{
        navigate:(arg:string)=>void
    }
}

interface IState{
  isPhonenumber:boolean,
}

export class LoginPage extends Component<IProps,IState> {

  state:IState = {isPhonenumber:false}

    handleLoginPage=()=>{ 
        this.props.navigation.navigate('BottomTab')
    }

    handleInputs=()=>{
      this.setState(p=>({isPhonenumber:!p.isPhonenumber}))
    }
  render() {
    return (
      <View style={styles.loginCon}>
        <View style={styles.headerCont}>
          <Text style={styles.flipcartText}>Flipkart</Text>
          <Image style={styles.logostyle} source={require("../assets/loginimg/logo2.png")}/>
        </View>
        <View style={styles.detailsCont}>
            <Text style={styles.line1}>Log in for the best experience</Text>
            <Text style={styles.line2}>Enter your<Text>{this.state.isPhonenumber ? " Email ID " : " Phone Number "}</Text> to continue</Text>
            <TextInput placeholder={this.state.isPhonenumber ? " Email ID " : " Phone Number "} style={styles.inputCont} inputMode={this.state.isPhonenumber ? 'email' : 'tel'} keyboardType='numeric' autoComplete='tel-country-code'/>
            <Text style={styles.emailText} onPress={this.handleInputs}>{this.state.isPhonenumber ? " Use Phone Number" : " Use Email ID"}</Text>
            <Text style={styles.lastLine}> By continuing you agree to Flipcart's <Text style={styles.termsPolicy}>Terms of Use</Text> and <Text style={styles.termsPolicy}>Privacy Policy</Text></Text>
            <View style={styles.buttonCont}>
              <TouchableOpacity onPress={this.handleLoginPage} style={styles.continueButton}>
                  <Text style={styles.continueText}>Continue</Text>
              </TouchableOpacity>
            </View>
        </View>
      </View>
    );
  }
}

export default LoginPage;


const styles = StyleSheet.create({

    loginCon:{
        flex:1,
        backgroundColor:'#1E90FF',
        alignContent: 'center',
        color:'#1E90ff',

    },

    logostyle:{
      width:50,
      height:50,
    },

    flipcartText:{
      color:'#fff',
      fontSize:30,
      fontWeight:'600',
      fontStyle:'italic',
      paddingRight:20,
    },

    headerCont:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center',
      padding:15,

    },

    detailsCont:{
      backgroundColor:"#fff",
      borderTopLeftRadius:20,
      borderTopRightRadius:20,
      flex:1,
      padding:30,
      gap:20,
    },

    line1:{
      fontSize:20,
      fontWeight:'400',
      color:'#000',
      fontStyle:'normal',
      fontFamily:'Roboto',
    },

    line2:{
      fontSize:16,
      fontWeight:'400',
      color:'grey',
      fontStyle:'normal',
      fontFamily:'Roboto',
    },

    inputCont:{
      borderWidth:2,
      borderColor:'#1E90FF',
      borderRadius:10,
    },

    emailText:{
      textAlign:'right',
      color:"#1E90FF",
      fontStyle:"normal",
      fontSize:16,
      fontFamily:'Roboto',
    },

    lastLine:{
      color:'grey',
      fontStyle:'normal',
      fontSize:13,
      fontFamily:"Roboto",
      fontWeight:'400',
    },

    termsPolicy:{
      color:'#1E90FF',

    },

    buttonCont:{
      flex:1,
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'flex-end',
      flexGrow:1,
    },

    continueButton:{
      backgroundColor:'lightgrey',
      padding:10,
      borderRadius:2,
      justifyContent:'center',
      alignItems:'center',
      flexGrow:1,
      
    },

    continueText:{
      color:'#fff'
    }
})