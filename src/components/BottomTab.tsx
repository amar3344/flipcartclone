import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React, { Component } from 'react'

import FeatherIcon from "react-native-vector-icons/Feather"
import Micons from "react-native-vector-icons/MaterialCommunityIcons"
import AntDesignIcons from "react-native-vector-icons/AntDesign"

import Home from './Home'
import Categories from './Categories'
import Notifications from './Notifications'
import Account from './Account'
import Cart from './Cart'
import { Image,StyleSheet} from 'react-native'

const Tab = createBottomTabNavigator()

interface Iprops{
  navigation:{
    navigate:(arg:string)=>void
  }
}

export class BottomTab extends Component {
  render() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} 
        options={{
          headerShown:false,
          tabBarIcon:({color,size})=>(
            <FeatherIcon name="home" color={color} size={size}/>
          )
        }}
        />
        <Tab.Screen name="Categories" component={Categories}
        options={{
          headerShown:false,
          tabBarIcon:({color,size})=>(
            <Image source={require('../assets/cate.png')} style={styles.catImage} />
          )
        }}
        />
        <Tab.Screen name="Notifications" component={Notifications}
        options={{
          headerShown:false,
          tabBarIcon:({color,size})=>(
            <FeatherIcon name="bell" color={color} size={size}/>
          )
        }}
        />
        <Tab.Screen name="Account" component={Account}
        options={{
          headerShown:false,
          tabBarIcon:({size,color})=>(
            <Micons name="account-circle-outline" size={size} color={color}/>
          )
        }}/>
        <Tab.Screen name="Cart" component={Cart}
        options={{
          headerShown:false,
          tabBarIcon:({color,size})=>(
            <AntDesignIcons name="shoppingcart" color={color} size={size}/>
          )
        }}/>
      </Tab.Navigator>
    )
  }
}

export default BottomTab

const styles = StyleSheet.create({
  catImage:{
    width:30,
    height:30,

  }
})