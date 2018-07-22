import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ThemeSwitch extends Component {
  static contextTypes = {
    store: PropTypes.object
  }

  constructor () {
    super()
    this.state = { themeColor: '' }
  }

  _updateThemeColor () {
    const { store } = this.context
    const state = store.getState()
    this.setState({ themeColor: state.themeColor })
  }

  componentWillMount () {
    const { store } = this.context;
    this._updateThemeColor();
    store.subscribe(() => this._updateThemeColor());
  }

  changeColor(color){
     const {store}= this.context;
     store.dispatch({ //每次dispatch都会执行reducer函数返回新的state且执行订阅队列里的函数
       type:'CHANGE_COLOR',
       themeColor: color
     })
  }

  render () {
    return (
      <div>
        <button style={{ color: this.state.themeColor }}
        onClick={this.changeColor.bind(this,'red')}>Red</button>
        <button style={{ color: this.state.themeColor }}
        onClick={this.changeColor.bind(this,'blue')}>Blue</button>
      </div>
    )
  }
}

export default ThemeSwitch
