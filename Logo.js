import React, {Component} from 'react'
import {
  Image,
  Dimensions,
  View,
} from 'react-native'

const {width, height} = Dimensions.get('window')

const logo = require('./DSNY_LOGO-4C.png')
/**
 * Logo Image On Navigation Header
 */
export class Logo extends Component {
  /**
   * Render Logo Image
   * @return {object} Image
   */
  render() {
    return (
      <View style={{
        flex: 1,
        alignItems: 'center',
        top: 10,
      }}>
        <Image
          source={logo}
          resizeMode='contain'
          style={{
            width: width * 35/100,
            height: height* 35/100,
          }}
        />
      </View>
    )
  }
}

export default {
  Logo,
}
