<template>
  <!-- Header -->
  <section class="serviceHeader">
    <div :class="['background', color]">
      <div class="wrap">
        <div class="title">{{ serviceShow.title.toUpperCase() }}</div>
        <div class="details">{{ serviceShow.description }}</div>
        <div :class="['button', color, 'mobile']">
          <a @click="scrollToContact()">Get In Touch</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { services } from '@/assets/js/data'

export default {
  props: {
    icon: String,
    closeMenu: Boolean,
    arrow: String,
    closeDropDown: Boolean,
  },
  computed: {
    serviceShow() {
      const path = this.$route.path.replace(/^\//, '')
      return services.filter((service) => service.link == path)[0]
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
