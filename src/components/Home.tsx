import { Text, View } from 'react-native'
import React, { Component } from 'react'

interface IProps{
    navigation:{
        navigate:(arg : string)=>void
    }

}

interface IState{

}

export class Home extends Component {
  render() {
    return (
      <View>
        <Text>Home</Text>
      </View>
    )
  }
}

export default Home