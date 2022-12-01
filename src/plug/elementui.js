import { Form, FormItem, Input, Button, Link } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

const elementui = {
  install (Vue) {
    Vue.use(Form)
    Vue.use(FormItem)
    Vue.use(Input)
    Vue.use(Button)
    Vue.use(Link)
  }
}

export default elementui
