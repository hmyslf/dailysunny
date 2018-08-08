/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, {
  PureComponent,
} from 'react'

import {
  StackNavigator,
} from 'react-navigation'

import Home from './Home'

import Viewer from './Pdf'


const Navigator = new StackNavigator({
  Home: {screen: Home},
  HomeDetail: {screen: Viewer},
}, {initialRouteName: 'Home'})

/**
 * App its Main Class
 * Main Application
 * Render Navigation
 */
export default class App extends PureComponent {
  /**
   * @return {object} Navigator Element
   */
  render() {
    return <Navigator/>
  }
}
