import { connect } from 'react-redux'
import ThemeSwitch from '../components/ThemeSwitch'

const mapStateToProps = (state) => { //让connect给它注入store的state，然后把它注入 给组件的props
  return {
    themeColor: state.themeColor
  }
}
const mapDispatchToProps = (dispatch) => { // 让connect给它注入store的dispatch，然后把它注入 给组件的props
  return {
    onSwitchColor: (color) => {
      dispatch({ type: 'CHANGE_COLOR', themeColor: color })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ThemeSwitch) //connect函数其实就是把store的东西注入传进来的参数函数，然后在注入组件提供调用
