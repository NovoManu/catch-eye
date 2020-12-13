import { shallowMount } from '@vue/test-utils'
import AppTimer from '../AppTimer.vue'

describe('test AppTimer.vue', () => {
  it('test is component rendered', () => {
    const wrapper = shallowMount(AppTimer)
    expect(wrapper.exists()).toBeTruthy()
    expect(wrapper.html()).toBe('<div class="timer">5:00</div>')
    expect(wrapper.vm.$props.start).toBeFalsy()
    expect(wrapper.vm.$props.initialTime).toBe(5000)
  })

  it('test is props passed correctly', () => {
    const wrapper = shallowMount(AppTimer, {
      propsData: {
        start: true,
        initialTime: 10000
      }
    })
    expect(wrapper.vm.$props.start).toBeTruthy()
    expect(wrapper.vm.$props.initialTime).toBe(10000)
    expect(wrapper.html()).toBe('<div class="timer">10:00</div>')
  })

  it('test is component emit timeExpired event', async () => {
    const wrapper = shallowMount(AppTimer)
    wrapper.vm.$emit('timeExpired')
    await wrapper.vm.$nextTick()
    expect(wrapper.emitted().timeExpired).toBeTruthy()
  })
})
