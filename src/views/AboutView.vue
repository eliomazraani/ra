<template>
  <About />
  <Values />
  <Testimonials />
  <Contact />
  <ThankYou />
</template>

<script>
import About from '../components/About.vue'
import Values from '../components/Values.vue'
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
    About,
    Values,
    Testimonials,
    Contact,
    ThankYou,
  },
}
</script>
