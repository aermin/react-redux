import React, { Component } from 'react'
import PropTypes from 'prop-types'

export const connect = (mapStateToProps) => (WrappedComponent) => {
  class Connect extends Component {
    static contextTypes = {
      store: PropTypes.object
    }

    constructor () {
        super()
        this.state = { allProps: {} }
      }
  
      componentWillMount () {
        const { store } = this.context
        this._updateProps()
        store.subscribe(() => this._updateProps())
      }

      _updateProps () { // 因此函数已在上面添加进订阅队列里，所以有dispatch，此函数也会被执行，setState更新视图
        const { store } = this.context
        let stateProps = mapStateToProps(store.getState(), this.props) // 额外传入 props，让获取数据更加灵活方便
        this.setState({
          allProps: { // 整合普通的 props 和从 state 生成的 props
            ...stateProps,
            ...this.props
          }
        })
      }

    render () {
      // {...this.state.allProps} 意思是把这个对象里面的属性全部通过 `props` 方式传递进去
      return <WrappedComponent {...this.state.allProps} />
    }
  }

  return Connect
}