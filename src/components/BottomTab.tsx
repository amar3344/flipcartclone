import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React, { Component } from 'react'
import Home from './Home'
import Categories from './Categories'
import Notifications from './Notifications'
import Account from './Account'
import Cart from './Cart'

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
        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen name="Categories" component={Categories}/>
        <Tab.Screen name="Notifications" component={Notifications}/>
        <Tab.Screen name="Account" component={Account}/>
        <Tab.Screen name="Cart" component={Cart}/>
      </Tab.Navigator>
    )
  }
}

export default BottomTab