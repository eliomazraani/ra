<template>
  <!-- Footer -->
  <footer class="bottom">
    <div class="socialMedia">
      <a @click="socialMedia('https://www.instagram.com/rachelasmarworld/')">
        <i class="fa-brands fa-instagram"></i>
      </a>
      <a @click="socialMedia('https://www.youtube.com/@rachelasmar')">
        <i class="fa-brands fa-youtube"></i>
      </a>
      <a @click="socialMedia('https://www.tiktok.com/@rachelasmar')">
        <i class="fa-brands fa-tiktok"></i>
      </a>
    </div>
    <div class="copyRight">
      &copy; &nbsp; {{ currentYear }} &nbsp; Rachel Asmar. All Rights Reserved
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
    }
  },
  methods: {
    socialMedia(url) {
      window.open(url, '_blank')
    },
  },
}
</script>
