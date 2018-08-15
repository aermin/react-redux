import { connect } from 'react-redux'
import Header from '../components/Header'

//Smart组件，专门做数据相关的应用逻辑，和各种数据打交道、和 Ajax 打交道，
//然后把数据通过 props 传递给 Dumb，它们带领着 Dumb 组件完成了复杂的应用程序逻辑。
//复用性差，依赖应用场景
const mapStateToProps = (state) => {
  return {
    themeColor: state.themeColor
  }
}
export default connect(mapStateToProps)(Header)