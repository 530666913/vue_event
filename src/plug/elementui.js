import { Form, FormItem, Input, Button, Link, Message } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/global.less'

const elementui = {
  install (Vue) {
    Vue.use(Form)
    Vue.use(FormItem)
    Vue.use(Input)
    Vue.use(Button)
    Vue.use(Link)
    Vue.prototype.$message = Message
  }
}

export default elementui
