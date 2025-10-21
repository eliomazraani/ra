<template>
  <!-- Services -->
  <section class="services" ref="servicesSection">
    <div v-if="windowWidth > 767" class="wide">
      <div
        v-for="service in services"
        :key="service.link"
        :class="[service.class, 'block']"
        @click="goTo(service.link)"
      >
        <img :src="service.image" alt="Img" />
        <div class="paragraph">
          <div class="title">{{ service.title }}</div>
          <div class="description">{{ service.teaser }}</div>
        </div>
      </div>
    </div>

    <div v-else class="narrow">
      <img @click="nextService(-1)" class="leftArrowBack" :src="getImagePath('left')" alt="Img" />
      <div class="fader">
        <div
          v-for="(service, index) in services"
          :key="service.link"
          :class="[service.class, 'block', 'fade', { 'd-none': serviceIndex != index }]"
        >
          <img :src="service.image" alt="Img" @click="goTo(service.link)" />
          <div class="paragraph">
            <div class="title">{{ service.title }}</div>
            <div class="description">{{ service.teaser }}</div>
            <div :class="['button', service.color]">
              <a @click="scrollToContact()">Get In Touch</a>
            </div>
          </div>
        </div>
      </div>
      <img @click="nextService(1)" class="rightArrowBack" :src="getImagePath('right')" alt="Img" />
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
  data() {
    return {
      windowWidth: window.innerWidth,
      services: services,
      serviceIndex: 0,
    }
  },
  mounted() {
    window.addEventListener('resize', this.updateWindowWidth)
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    goTo(page) {
      this.$router.push('/' + page)
    },
    getImagePath(direction) {
      return new URL(`../assets/img/${direction}ArrowBack.svg`, import.meta.url).href
    },
    nextService(num) {
      this.serviceIndex += num

      if (this.serviceIndex < 0) {
        this.serviceIndex = this.services.length - 1
      }

      if (this.serviceIndex > this.services.length - 1) {
        this.serviceIndex = 0
      }
    },
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
    updateWindowWidth() {
      this.windowWidth = window.innerWidth
    },
    handleResize() {
      this.updateWindowWidth()
      this.updateServicesHeight()
    },
    updateServicesHeight() {
      const currentUrl = window.location.href
      const servicesEl = this.$refs.servicesSection

      if (!servicesEl) return

      if (currentUrl.endsWith('/') && this.windowWidth > 1440) {
        servicesEl.style.height = `${window.innerHeight - 92}px`
      } else {
        servicesEl.style.height = 'unset'
      }
    },
  },
}
</script>
