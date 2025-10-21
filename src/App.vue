<template>
  <Navigation
    :icon="icon"
    @update:icon="icon = $event"
    :closeMenu="closeMenu"
    @update:closeMenu="closeMenu = $event"
    :arrow="arrow"
    @update:arrow="arrow = $event"
    :closeDropDown="closeDropDown"
    @update:closeDropDown="closeDropDown = $event"
  />

  <main>
    <RouterView
      :icon="icon"
      @update:icon="icon = $event"
      :closeMenu="closeMenu"
      @update:closeMenu="closeMenu = $event"
      :arrow="arrow"
      @update:arrow="arrow = $event"
      :closeDropDown="closeDropDown"
      @update:closeDropDown="closeDropDown = $event"
    />
  </main>

  <Footer />
</template>

<script>
import Navigation from './components/Navigation.vue'
import { RouterView } from 'vue-router'
import Footer from './components/Footer.vue'

export default {
  data() {
    return {
      icon: 'bars',
      closeMenu: true,
      arrow: 'down',
      closeDropDown: true,
    }
  },
  components: {
    Navigation,
    RouterView,
    Footer,
  },
  beforeUnmount() {
    document.removeEventListener('click', this.handleActionOutside)
    window.removeEventListener('scroll', this.handleActionOutside)
  },
  mounted() {
    document.addEventListener('click', this.handleActionOutside)
    window.addEventListener('scroll', this.handleActionOutside)
  },
  methods: {
    handleActionOutside(event) {
      const serviceBtn = $('.links.service')[0]
      const burgerMenu = $('.narrow .menu')[0]
      const navLinks = $('.narrow .navLinks ')[0]
      if ($(window).width() > 1024 && serviceBtn && !serviceBtn.contains(event.target)) {
        this.icon = 'bars'
        this.closeMenu = true
        this.arrow = 'down'
        this.closeDropDown = true
      } else if (
        $(window).width() < 1024 &&
        burgerMenu &&
        navLinks &&
        !burgerMenu.contains(event.target) &&
        !navLinks.contains(event.target)
      ) {
        this.icon = 'bars'
        this.closeMenu = true
        this.arrow = 'down'
        this.closeDropDown = true
      }
    },
  },
}
</script>
