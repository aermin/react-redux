import React, { Component } from 'react'
import PropTypes from 'prop-types'

//Dumb组件（只会接受 props 并且渲染确定结果）复用性强
//最好不要依赖除了 React.js 和 Dumb 组件以外的内容
export default class Header extends Component { 
  static propTypes = {
    themeColor: PropTypes.string
  }

  render () {
    return (
      <h1 style={{ color: this.props.themeColor }}>React.js 小书</h1>
    )
  }
}