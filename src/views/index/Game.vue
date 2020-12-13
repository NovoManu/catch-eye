<template>
  <div class="game-block">
    <AppTimer :start="isVisible" :initialTime="5000" @timeExpired="handleRound(false)" />
    <h1 class="game-block__title">Round: {{ round }}</h1>
    <div class="game-block__user">
      Name:
      <input v-model="name" class="game-block__input" type="text" />
    </div>
    <transition name="switch">
      <div v-if="isVisible" class="game-block__wrapper">
        <div
          v-for="({ color, winner }, index) in blocks"
          :key="index"
          class="game-block__item"
          :style="{ ...blockStyles, backgroundColor: `rgba(${color})` }"
          @click="handleRound(winner)"
        />
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, computed } from 'vue'
import { useRouter, Router } from 'vue-router'
import { saveLocalData } from '@/services/storage-manager'
import AppTimer from '@/common/components/AppTimer.vue'
import { GameBlock } from '@/types'

export default defineComponent({
  name: 'Game',
  components: { AppTimer },
  setup() {
    const round = ref(1)
    const blocks = ref([])
    const name = ref('Anonymous User')
    const opacity = 0.8
    const router: Router = useRouter()
    const isVisible = ref(true)

    const blockStyles = computed(() => {
      const value = `${100 / (round.value + 1)}%`
      return { width: value, height: value }
    })

    /**
     *@description Get random number in range
     *@param { Number } min
     *@param { Number } max
     *@return { Number }
     */
    const getRandomNumber = (min: number, max: number): number => Math.floor(Math.random() * (max - min) + min)

    /**
     * @description Create array of blocks with rgba color and winner mark
     * @param { Number } quantity
     * @return { Array }
     */
    const createBlocks = (quantity: number): GameBlock[] => {
      const winIndex = getRandomNumber(0, quantity - 1)
      const red = getRandomNumber(0, 255)
      const blue = getRandomNumber(0, 255)
      const green = getRandomNumber(0, 255)
      return Array(quantity)
        .fill(null)
        .map((_, index) => {
          const winner = index === winIndex
          return {
            color: `${red}, ${blue}, ${green}, ${winner ? opacity : 1}`,
            winner
          }
        })
    }

    const setNextRound = (): void => {
      isVisible.value = false
      round.value++
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      blocks.value = createBlocks(Math.pow(round.value + 1, 2))
      setTimeout(() => {
        isVisible.value = true
      }, 200)
    }

    const endTheGame = (): void => {
      isVisible.value = false
      saveLocalData({
        name: name.value,
        score: round.value
      })
      router.push('/results')
    }

    const handleRound = (winner: boolean): void => {
      winner ? setNextRound() : endTheGame()
    }

    onMounted(() => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      blocks.value = createBlocks(4)
    })

    return {
      round,
      blocks,
      name,
      blockStyles,
      isVisible,
      handleRound
    }
  }
})
</script>

<style lang="scss" scoped>
.game-block {
  margin: auto;
  &__title {
    @extend %title;
  }
  &__user {
    padding-bottom: $size-7;
    font-size: $size-6;
    display: flex;
    align-items: center;
  }
  &__input {
    padding: $size-7;
    border: 1px solid $grey-lighter;
    border-radius: $radius;
    outline: none;
    font-family: inherit;
    color: $blue;
    &:focus {
      box-shadow: $box-shadow;
      border-color: rgba($blue, 0.3);
    }
  }
  &__wrapper {
    @extend %box;
    display: flex;
    flex-wrap: wrap;
  }
  &__item {
    border-radius: $radius;
    border: 2px solid $white;
  }
}

.switch-enter-active,
.switch-leave-active {
  transition: all 0.5s ease-in-out;
}

.switch-enter-from,
.switch-leave-to {
  opacity: 0;
}
</style>
