<template>
  <component :is="layout">
    <slot />
  </component>
</template>

<script lang="ts">
import AppLayoutDefault from './default.vue'
import { markRaw, watch, defineComponent } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'AppLayout',
  setup() {
    const layout = markRaw(AppLayoutDefault)
    const route = useRoute()

    watch(
      () => route.meta,
      async meta => {
        try {
          const component = await import(`@/layouts/${meta.layout}.vue`)
          layout.value = component?.default || AppLayoutDefault
        } catch (e) {
          layout.value = AppLayoutDefault
        }
      },
      { immediate: true }
    )

    return { layout }
  }
})
</script>
