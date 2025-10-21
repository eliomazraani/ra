<template>
  <!-- Service -->
  <section class="serviceOptions">
    <div class="servicesList">
      <div
        v-for="(topic, index) in topics"
        :class="['list', index % 2 == 0 ? startWith : alternateWith]"
        :key="index"
      >
        <div class="wrap">
          <div class="demo">
            <img :src="topic.img" alt="Img" />
          </div>
          <div class="information">
            <div class="name">{{ topic.name }}</div>
            <div class="summary">{{ topic.summary }}</div>
            <div :class="['button', `${color}Btn`]">
              <a @click="scrollToContact()">{{ topic.button }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { styleCoaching as topics } from '@/assets/js/data'

export default {
  props: {
    icon: String,
    closeMenu: Boolean,
    arrow: String,
    closeDropDown: Boolean,
  },
  data() {
    return {
      topics: topics,
    }
  },
  computed: {
    startWith() {
      return topics.length % 2 === 0 ? 'odd' : 'even'
    },
    alternateWith() {
      return topics.length % 2 === 0 ? 'even' : 'odd'
    },
    color() {
      const path = this.$route.path
      if (path === '/choreography') return 'green'
      if (path === '/design') return 'pink'
      if (path === '/art') return 'purple'
      if (path === '/coaching') return 'peach'
      return ''
    },
  },
  methods: {
    scrollToContact() {
      this.$emit('update:icon', 'bars')
      this.$emit('update:closeMenu', true)
      this.$emit('update:arrow', 'down')
      this.$emit('update:closeDropDown', true)

      $('html, body').animate(
        {
          scrollTop: $('.contact').offset().top - 92,
        },
        1000,
      )
    },
  },
}
</script>
