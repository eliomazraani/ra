<template>
  <!-- Values -->
  <section class="values">
    <div class="wrap">
      <div v-for="value in values" class="box">
        <img :src="value.image" alt="Img" />
        <div class="norm">{{ value.norm }}</div>
        <div class="detail">{{ value.detail }}</div>
      </div>
    </div>
  </section>
</template>

<script>
import { values } from '@/assets/js/data'

export default {
  data() {
    return {
      values: values,
      windowWidth: window.innerWidth,
    }
  },
  mounted() {
    this.normalizeHeights()
    window.addEventListener('resize', this.updateWindowWidth)
    window.addEventListener('resize', this.normalizeHeights)
  },
  methods: {
    normalizeHeights() {
      if (this.windowWidth > 1024) {
        let maxHeight = 0

        $('.values .detail').each(function () {
          let currentHeight = $(this).height()

          if (currentHeight > maxHeight) {
            maxHeight = currentHeight
          }
        })

        $('.values .detail').each(function () {
          $(this).height(maxHeight)
        })
      }
    },
    updateWindowWidth() {
      this.windowWidth = window.innerWidth
    },
  },
}
</script>
