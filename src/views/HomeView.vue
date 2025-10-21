<template>
  <Services
    :icon="icon"
    @update:icon="updateIcon"
    :closeMenu="closeMenu"
    @update:closeMenu="updateCloseMenu"
    :arrow="arrow"
    @update:arrow="updateArrow"
    :closeDropDown="closeDropDown"
    @update:closeDropDown="updateCloseDropDown"
  />
  <Values />
  <About
    :icon="icon"
    @update:icon="updateIcon"
    :closeMenu="closeMenu"
    @update:closeMenu="updateCloseMenu"
    :arrow="arrow"
    @update:arrow="updateArrow"
    :closeDropDown="closeDropDown"
    @update:closeDropDown="updateCloseDropDown"
  />
  <Clients />
  <Testimonials />
  <Contact />
  <ThankYou />
</template>

<script>
import Services from '../components/Services.vue'
import Values from '../components/Values.vue'
import About from '../components/About.vue'
import Clients from '../components/Clients.vue'
import Testimonials from '../components/Testimonials.vue'
import Contact from '../components/Contact.vue'
import ThankYou from '../components/TY.vue'

export default {
  props: {
    icon: String,
    closeMenu: Boolean,
    arrow: String,
    closeDropDown: Boolean,
  },
  components: {
    Services,
    Values,
    About,
    Clients,
    Testimonials,
    Contact,
    ThankYou,
  },
  methods: {
    updateIcon(value) {
      this.$emit('update:icon', value)
    },
    updateCloseMenu(value) {
      this.$emit('update:closeMenu', value)
    },
    updateArrow(value) {
      this.$emit('update:arrow', value)
    },
    updateCloseDropDown(value) {
      this.$emit('update:closeDropDown', value)
    },
  },
}
</script>
