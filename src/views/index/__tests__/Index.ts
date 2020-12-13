import { mount } from '@vue/test-utils'
import Index from '../Index.vue'

describe('test Index.vue', () => {
  it('test is component rendered', () => {
    const wrapper = mount(Index, {
      global: {
        stubs: {
          'router-view': 'router-view'
        }
      }
    })
    expect(wrapper.exists()).toBeTruthy()
    const rootElement = wrapper.find('.start-block')
    expect(rootElement.exists()).toBeTruthy()
    const button = wrapper.find('.start-block__button')
    expect(button.text()).toBe('Start game')
  })
})
