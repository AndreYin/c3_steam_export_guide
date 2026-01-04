import Theme from 'vitepress/theme'
import EventSheet from './components/EventSheet.vue'
import EventBlock from './components/EventBlock.vue'
import EventCondition from './components/EventCondition.vue'
import EventAction from './components/EventAction.vue'
import EventComment from './components/EventComment.vue'
import './custom.css'

export default {
  extends: Theme,
  enhanceApp({ app }) {
    app.component('EventSheet', EventSheet)
    app.component('EventBlock', EventBlock)
    app.component('EventCondition', EventCondition)
    app.component('EventAction', EventAction)
    app.component('EventComment', EventComment)
  }
}
