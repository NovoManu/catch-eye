<template>
  <div class="start">
    <div class="start__title">Catch Eye</div>
    <div class="start__block">
      <div class="start__background">
        <img src="@/assets/img/pixel-bg.jpg" />
      </div>
      <button class="start__button" @click="$router.push('/game')">Start game</button>
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Index'
})
</script>
<style lang="scss" scoped>
$button-background: $red;
$button-padding: $size-5 $size-2;
$button-border: 2px solid $button-background;
$button-color: $white;
$button-radius: $radius-rounded;

.start {
  margin: auto;
  &__title {
    @extend %title;
    text-align: center;
    color: $red;
  }
  &__block {
    @extend %box;
    display: flex;
    position: relative;
    overflow: hidden;
  }
  &__background {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    img {
      object-fit: cover;
      height: 100%;
    }
  }
  &__button {
    padding: $button-padding;
    border: $button-border;
    margin: auto;
    border-radius: $button-radius;
    background-color: $button-background;
    color: $button-color;
    font-weight: $weight-bold;
    position: relative;
    z-index: 2;
    font-family: inherit;
    text-transform: uppercase;
    cursor: pointer;
    outline: none;
    transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
    &:hover {
      transform: scale(1.2);
    }
  }
}
</style>
