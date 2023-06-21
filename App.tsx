import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import React, { Component } from 'react'
import Home from './src/components/Home'
import BottomTab from './src/components/BottomTab'
import { Screen } from 'react-native-screens'
import LoginPage from './src/components/LoginPage'

const Stack = createStackNavigator()

export class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='LoginPage' options={{headerShown:false}} component={LoginPage}/>
          <Stack.Screen name="BottomTab" component={BottomTab}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

export default App