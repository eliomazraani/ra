<template>
  <!-- Header -->
  <header :class="['top', color]">
    <div v-if="windowWidth > 1024" class="wide">
      <div class="logo">
        <a href="/" class="toHome">
          <img :src="getImagePath" alt="Img" />
        </a>
      </div>
      <div class="navLinks">
        <a href="/" :class="['links', { selected: page == 'lp' }]">Home</a>
        <a href="/about" :class="['links', { selected: page == 'ap' }]">About Us</a>
        <div style="position: relative" @click="dropDownContent()">
          <a :class="['links', 'service', { selected: page == 'sp' }]">
            Our Services
            <i :class="['fas', `fa-caret-${arrow}`]"></i>
          </a>
          <div :class="['dropDownContent', 'fade', { show: closeDropDown == false }]">
            <a href="/choreography" class="chp">Movement & Choreography</a>
            <a href="/design" class="des">Costume Design & Styling</a>
            <a href="/art" class="art">Artistic Direction</a>
            <a href="/coaching" class="stl">Style Coaching</a>
          </div>
        </div>
        <a href="/joinUs" :class="['links', { selected: page == 'tp' }]">Join Our Team</a>
      </div>
      <div :class="['button', color]">
        <a @click="scrollToContact()">Get In Touch</a>
      </div>
    </div>
    <div v-else class="narrow">
      <div class="logo">
        <a href="/" class="toHome">
          <img :src="getImagePath" alt="Img" />
        </a>
      </div>
      <div class="menu" @click="dropDownMenu()">
        <i :class="['fas', `fa-${icon}`]"></i>
      </div>
      <div :class="['navLinks', 'fade', { show: closeMenu == false }]">
        <a href="/" class="links">Home</a>
        <a href="/about" class="links">About Us</a>
        <div class="dropDown" @click="dropDownContent()">
          <a class="links" style="padding: 0">Our Services</a>
          <i :class="['fas', `fa-caret-${arrow}`]"></i>
        </div>
        <div :class="['dropDownContent', 'fade', { show: closeDropDown == false }]">
          <a href="/choreography">Movement & Choreography</a>
          <a href="/design">Costume Design & Styling</a>
          <a href="/art">Artistic Direction</a>
          <a href="/coaching">Style Coaching</a>
        </div>
        <a href="/joinUs" class="links">Join Our Team</a>
        <div class="getInTouchButton">
          <div :class="['button', color]">
            <a @click="scrollToContact()">Get In Touch</a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    icon: String,
    closeMenu: Boolean,
    arrow: String,
    closeDropDown: Boolean,
  },
  data() {
    return {
      page: 'lp',
      color: '',
      logo: 'Logo',
      windowWidth: window.innerWidth,
    }
  },
  computed: {
    getImagePath() {
      return new URL(`../assets/img/${this.logo}.svg`, import.meta.url).href
    },
  },
  mounted() {
    window.addEventListener('resize', this.updateWindowWidth)
  },
  methods: {
    dropDownMenu() {
      this.$emit('update:icon', this.icon == 'bars' ? 'close' : 'bars')
      this.$emit('update:closeMenu', this.closeMenu == true ? false : true)
    },
    dropDownContent() {
      this.$emit('update:arrow', this.arrow == 'down' ? 'up' : 'down')
      this.$emit('update:closeDropDown', this.closeDropDown == true ? false : true)
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
  },
  watch: {
    $route(to) {
      const newPath = to.path
      if (newPath == '/') {
        this.page = 'lp'
        this.color = ''
        this.logo = 'Logo'
      } else if (newPath == '/about') {
        this.page = 'ap'
        this.color = ''
        this.logo = 'Logo'
      } else if (newPath == '/choreography' || to.query.ctg == 'choreography') {
        this.page = 'sp'
        this.color = 'green'
        this.logo = 'LogoGreen'
      } else if (newPath == '/design' || to.query.ctg == 'design') {
        this.page = 'sp'
        this.color = 'pink'
        this.logo = 'LogoPink'
      } else if (newPath == '/art' || to.query.ctg == 'art') {
        this.page = 'sp'
        this.color = 'purple'
        this.logo = 'LogoPurple'
      } else if (newPath == '/coaching') {
        this.page = 'sp'
        this.color = 'peach'
        this.logo = 'LogoPeach'
      } else if (newPath === '/joinUs') {
        this.page = 'tp'
        this.color = ''
        this.logo = 'Logo'
      }
    },
  },
}
</script>
