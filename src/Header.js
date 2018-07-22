import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from './react-redux'

class Header extends Component {
  static contextTypes = {
    store: PropTypes.object
  }

  render () {
    return (
      <h1 style={{ color: this.props.themeColor }}>React.js 小书</h1>
    )
  }
}

const mapStateToProps = (state) => { // 将store的某state通过connect方法(将传入的state通过props)传给Header组件
  return {
    themeColor: state.themeColor
  }
}
Header = connect(mapStateToProps)(Header)

export default Header
