// 导入element-plus

import { App } from 'vue'
import { ElButton } from 'element-plus'

const components = [ElButton]

export default function (app: App): void {
  components.forEach((cpn) => {
    app.component(cpn.name, cpn)
  })
}
