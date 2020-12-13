<template>
  <div class="timer">{{ formattedTime }}</div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, watch } from 'vue'

export default defineComponent({
  name: 'AppTimer',
  props: {
    start: {
      type: Boolean,
      default: false
    },
    initialTime: {
      type: Number,
      default: 5000
    }
  },
  setup(props, { emit }) {
    let interval: number | undefined = undefined
    const time = ref(props.initialTime)
    const formattedTime = computed(() => {
      return (time.value / 1000).toFixed(2).replace('.', ':')
    })

    const stopTimer = (): void => {
      clearInterval(interval)
    }

    const startTimer = (): void => {
      interval = setInterval(() => {
        time.value -= 100
        if (time.value <= 0) {
          stopTimer()
          time.value = 0
          emit('timeExpired')
        }
      }, 100)
    }

    watch(
      () => props.start,
      value => {
        if (value) {
          time.value = props.initialTime
          startTimer()
        } else {
          stopTimer()
        }
      }
    )

    return { formattedTime }
  }
})
</script>

<style lang="scss" scoped>
.timer {
  position: absolute;
  top: 0;
  right: 0;
  padding: $size-5;
  font-size: $size-2;
}
</style>
