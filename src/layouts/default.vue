<template>
  <div class="app-layout-default">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'AppLayoutDefault'
}
</script>

<style lang="scss">
$body-background: $white-bis;

.app-layout-default {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: $body-background;
  font-family: $font-family;
  position: relative;
}
</style>
