// global 统一出口

import { App } from 'vue'
import registerElement from './register-element'

export function registerApp(app: App): void {
  registerElement(app)
}
