import React, {
  Component,
} from 'react'

import {
  View,
  StyleSheet,
  Dimensions,
} from 'react-native'

import {
  object,
} from 'prop-types'

import Pdf from 'react-native-pdf'

import {
  styles as HomeStyle,
} from './Home'

/**
 * Component Viewer
 * for Render PDF
 * @return {object} Pdf viewer element
 */
export default class Viewer extends Component {
  /**
   * react-navigation
   * @return {object} title change by param
   */
  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.getParam('name', 'Pdf viewer'),
    }
  }

  /** prop-types **/
  static propTypes = {
    source: object,
    navigation: object,
  }

  /**
   * Constructor
   * @param {object} props
   */
  constructor(props) {
    super(props)
    this.loadComplete = this.loadComplete.bind(this)
    this.pageChanged = this.pageChanged.bind(this)
  }

  /**
   * @param {int} numberOfPages
   * @param {string} filePath
   */
  async loadComplete(numberOfPages, filePath) {
    await this.setState({
      filePath: filePath,
      numberOfPages: numberOfPages,
    })
  }

  /**
   * @param {int} page
   * @param {int} numberOfPages
   */
  pageChanged(page, numberOfPages) {
    this.setState({
      page: page,
      numberOfPages,
    })
  }

  /**
   * Render App
   * @return {object} Component
   */
  render() {
    const {
      params,
    } = this.props.navigation.state

    const {
      loadComplete,
      pageChanged,
    } = this

    return (
      <View style={styles.pdf}>
        <Pdf
          source={params.source}
          onLoadComplete={loadComplete}
          onPageChanged={pageChanged}
          style={styles.pdf}/>
      </View>
    )
  }
}

export const styles = StyleSheet.create({
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    alignItems: 'center',
  },
})
