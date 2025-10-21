<template>
  <Jobs />
  <Testimonials />
  <Contact />
  <ThankYou />
</template>

<script>
import Jobs from '../components/Jobs.vue'
import Testimonials from '../components/Testimonials.vue'
import Contact from '../components/Contact.vue'
import ThankYou from '../components/TY.vue'

export default {
  components: {
    Jobs,
    Testimonials,
    Contact,
    ThankYou,
  },
}
</script>
