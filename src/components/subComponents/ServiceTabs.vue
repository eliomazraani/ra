<template>
  <!-- Tabs -->
  <div class="tabs">
    <a
      v-if="this.$route.path !== '/art'"
      v-for="(tab, index) in tabs"
      @click="serviceShow(index + 1)"
      :class="[{ [color]: index == counter }]"
      >{{ tab.name }}</a
    >
    <a v-else :class="[{ [color]: counter == 0 }]">OUR PROJECTS</a>
  </div>
</template>

<script>
import { choreoTabs } from '@/assets/js/data'
import { designTabs } from '@/assets/js/data'
import { artTabs } from '@/assets/js/data'

export default {
  props: {
    counter: Number,
  },
  computed: {
    tabs() {
      const path = this.$route.path
      if (path === '/choreography') return choreoTabs
      if (path === '/design') return designTabs
      if (path === '/art') return artTabs
      return ''
    },
    color() {
      const path = this.$route.path
      if (path === '/choreography') return 'green'
      if (path === '/design') return 'pink'
      if (path === '/art') return 'purple'
      return ''
    },
  },
  methods: {
    serviceShow(num) {
      this.$emit('update:counter', num - 1)
    },
  },
}
</script>
