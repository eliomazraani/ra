<template>
  <!-- Testimonials -->
  <section :class="['testimonials', color]">
    <div class="title">Our Happy Clients</div>
    <div class="testimonialTab">
      <div class="wrap">
        <div
          v-for="(testimonial, index) in testimonials"
          :class="['clientTestimonial', 'fade', { 'd-none': testimonialIndex != index }]"
        >
          <img :src="testimonial.image" alt="Img" />
          <div class="testimonial">{{ testimonial.testimonial }}</div>
          <div class="name">{{ testimonial.name }}</div>
        </div>
      </div>
    </div>
    <div class="dots">
      <span
        v-for="i in testimonials.length"
        :class="['dot', { active: testimonialIndex == i - 1 }]"
      ></span>
    </div>
  </section>
</template>

<script>
import { testimonials } from '@/assets/js/data'

export default {
  data() {
    return {
      testimonials: testimonials,
      testimonialIndex: 0,
    }
  },
  mounted() {
    setInterval(() => {
      this.updateTestimonial()
    }, 15000)
  },
  computed: {
    color() {
      const path = this.$route.path
      const ctg = this.$route.query.ctg

      if (path === '/choreography' || ctg === 'choreography') return 'green'
      if (path === '/design' || ctg === 'design') return 'pink'
      if (path === '/art' || ctg === 'art') return 'purple'
      if (path === '/coaching') return 'peach'
      return ''
    },
  },
  methods: {
    updateTestimonial() {
      this.testimonialIndex++
      if (this.testimonialIndex > this.testimonials.length - 1) {
        this.testimonialIndex = 0
      }
    },
  },
}
</script>
