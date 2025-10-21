<template>
  <!-- Overlay -->
  <section class="msgSumbmission">
    <div class="overlay thanks">
      <div class="popUp">
        <i @click="closeTY()" class="fas fa-close"></i>
        <img :src="getImagePath('Sent.svg')" alt="Img" />
        <div class="thankYou">Thank You</div>
        <div class="soon">You will be hearing from us soon!</div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    getImagePath(name) {
      return new URL(`../assets/img/${name}`, import.meta.url).href
    },
    closeTY() {
      var thankYou = $('.thanks')
      thankYou.removeClass('open')
    },
  },
}
</script>
