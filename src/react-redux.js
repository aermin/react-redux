import React, { Component } from 'react'
import PropTypes from 'prop-types'

export const connect = (mapStateToProps, mapDispatchToProps) => (WrappedComponent) => {
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
        // 防止 mapStateToProps 没有传入;额外传入 props，让获取数据更加灵活方便
        let stateProps = mapStateToProps ? mapStateToProps(store.getState(), this.props) : {} ; 
        // 防止 mapDispatchToProps 没有传入;额外传入 props，让获取数据更加灵活方便
        let dispatchProps = mapDispatchToProps ? mapDispatchToProps(store.dispatch, this.props) : {} ;
        this.setState({
          allProps: { // 整合普通的 props 和从 state 生成的 props
            ...stateProps,
            ...dispatchProps,
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