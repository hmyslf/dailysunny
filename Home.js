import React, {Component} from 'react'

import {
  object,
} from 'prop-types'

import {
  StyleSheet,
  View,
  Dimensions,
  TouchableHighlight,
  ScrollView,
} from 'react-native'

import rnfetch from 'react-native-fetch-blob'

import OneSignal from 'react-native-onesignal'

import ScaledImage from './ScaledImage'

import {Logo} from './Logo'

const {width} = Dimensions.get('window')

const oneSlID = 'd8e22c9f-2ccb-4c57-883f-22f13119fdfc'

const url = 'https://www.dailysunny.com/dailysunny_mobile_apps/newsurl.txt'


/**
 * First Application running
 */
export default class Main extends Component {
  /** react-navigation **/
  static navigationOptions = {
    headerTitle: <Logo/>,
    headerTintColor: '#fff',
    headerStyle: {
      height: 63,
    },
  }

  /** prop-types **/
  static propTypes = {
    navigation: object,
  }

  /** default state of component **/
  state = {
    pdfSelect: null,
    source: [],
  }

  /**
   * Constructor
   * @param {object} props
   */
  constructor(props) {
    super(props)
  }

  /**
   * will mount component react-cycle
   */
  componentWillMount() {
    OneSignal.init(oneSlID)
    OneSignal.addEventListener('received', this.onReceived)
    OneSignal.addEventListener('opened', this.onOpened)
  }

  /**
   * will unmount component react-cycle
   */
  componentWillUnmount() {
    OneSignal.removeEventListener('received', this.onReceived)
    OneSignal.removeEventListener('opened', this.onOpened)
  }

  /**
   * Handle received signal
   * @param {object} notification
   */
  onReceived(notification) {
    console.log('Notification received: ', notification)
  }

  /**
   * Handle Opened Push
   * @param {object} openResult
   */
  onOpened(openResult) {
    console.log('Message: ', openResult.notification.payload.body)
    console.log('Data: ', openResult.notification.payload.additionalData)
    console.log('isActive: ', openResult.notification.isAppInFocus)
    console.log('openResult: ', openResult)
  }

  /**
   * componentDidmount react cycle
   * fetch new-url.txt from aws
   * daily sun ny
   */
  async componentDidMount() {
    const source = await rnfetch.fetch('GET', url)
    const result = source.text()
    this.setState({
      source: result.split('\n').map((res, i)=>{
        return {
          name: 'Daily Sun NY',
          image: res,
          source: {
            uri: res.replace(/(.*)\.[^.]+$/, `$1.pdf`),
            cache: true,
          },
        }
      }),
    })
  }

  /**
   * Element in array key
   * @param {int} key
   */
  onClick(key) {
    this.props.navigation.navigate('HomeDetail', {
      ...this.state.source[key],
    })
  }

  /**
   * Render App
   * @return {object} Component
   */
  render() {
    const {
      onClick,
    } = this

    const {
      source,
    } = this.state

    return (
      <ScrollView style={{backgroundColor: '#fff'}}>
        <View style={styles.container}>
          {source.map((data, key) => {
            return (
              <TouchableHighlight
                onPress={onClick.bind(this, key)}
                key={key}>
                <ScaledImage
                  uri={data.image}
                  width={width*92/100}
                  key={key}
                />
              </TouchableHighlight>
            )
          })}
        </View>
      </ScrollView>
    )
  }
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: '5%',
  },
})
