<template>
  <div class="results">
    <h1 class="results__title">Top players</h1>
    <div class="results__table">
      <div v-for="({ name, score }, index) in topResults" :key="index" class="results__row">
        <span>{{ index + 1 }}.</span>
        <span>{{ name }}</span>
        <span>{{ score }}</span>
      </div>
    </div>
    <div v-if="!topResults.length" class="results__no-results">No results yet</div>
    <div class="results__action">
      <button class="results__button" @click="$router.push('/')">Home</button>
      <button class="results__button" @click="$router.push('/game')">New Game</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { getLocalData } from '@/services/storage-manager'

export default defineComponent({
  name: 'Results',
  setup() {
    const results = getLocalData()
    const resultsToShow = 20
    const topResults = computed(() => {
      return results.reverse().slice(0, resultsToShow)
    })
    return { topResults }
  }
})
</script>

<style lang="scss" scoped>
.results {
  margin: $size-1 auto;
  &__title {
    @extend %title;
  }
  &__table {
    padding-top: $size-5;
  }
  &__row {
    display: flex;
    color: $red;
    span {
      padding: 0.5rem;
      flex: none;
    }
    span:first-child {
      width: 4rem;
    }
    span:last-child {
      margin-left: auto;
    }
  }
  &__action {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__button {
    padding: $size-7 $size-5;
    margin: 1rem 0.5rem;
    cursor: pointer;
    border: 2px solid $blue;
    border-radius: $radius;
    background: transparent;
    text-transform: uppercase;
    font-family: inherit;
    color: $blue;
    transition: background-color $speed $easing;
    outline: none;
    &:hover {
      background-color: rgba($blue, 0.2);
    }
  }
  &__no-results {
    text-align: center;
  }
}
</style>
