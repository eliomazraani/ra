<template>
  <!-- About -->
  <section :class="['ourStory', { drop: $route.path == '/about' }]">
    <div class="wrap">
      <div class="left">
        <div class="headline">Our Story</div>
        <div class="information">
          A highly disciplined and experienced team, including coordinators, wardrobe supervisor,
          assistant choreographers, makeup artist, collaborates seamlessly with love, passion, and
          respect. This close-knit, detail-oriented group shares the same values and ethics, forming
          a caring and dedicated family that prioritizes delivering the best experiences.
        </div>
        <div v-if="$route.path == '/'" class="button">
          <a href="/about">Read More <i class="fas fa-angle-right"></i></a>
        </div>
      </div>
      <div class="right">
        <img :src="getImagePath('About.jpg')" alt="Img" />
      </div>
      <div class="button mobile">
        <a @click="scrollToContact()">Get In Touch</a>
      </div>
    </div>
  </section>
  <!-- Founder -->
  <section v-if="$route.path == '/about'" class="ourStory founder">
    <div class="wrap">
      <div class="left">
        <img :src="getImagePath('Founder.JPG')" alt="Img" />
      </div>
      <div class="right">
        <div class="headline">Our Founder</div>
        <div class="information">
          Artistic director, Choreographer and Costume designer certified in event styling and
          design, style coaching and fashion design. For the past 10 years, Rachel has worked on a
          career path to influence and leave exceptional impact with all people she has worked with.
          Passionate about Art in all its conditions; music, dance, décor, costumes, lighting and
          visuals, Rachel takes a concept and makes it a reality. This process involves everything
          from generating ideas, assembling the right team to seeing the project through to the
          final stages of production. Rachel has been recognized in her field for taking many
          projects inside and outside the country. She has been the ambassador of her self identity.
          Combining her skills all together to make the best customer experience unforgettable.
        </div>
      </div>
      <div class="button mobile">
        <a @click="scrollToContact()">Get In Touch</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    icon: String,
    closeMenu: Boolean,
    arrow: String,
    closeDropDown: Boolean,
  },
  methods: {
    getImagePath(name) {
      return new URL(`../assets/img/${name}`, import.meta.url).href
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
  },
}
</script>
