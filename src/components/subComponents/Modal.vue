<template>
  <div id="galleryModal" class="modal">
    <i @click="closeModal" class="fas fa-close"></i>

    <img
      v-if="currentIndex > 0"
      @click="prevImage"
      class="fa-arrow-left"
      :src="getImagePath('left')"
      alt="Img"
    />

    <div class="modal-content">
      <img id="galleryImg" />
    </div>

    <img
      v-if="currentIndex < modalArray.length - 1"
      @click="nextImage"
      class="fa-arrow-right"
      :src="getImagePath('right')"
      alt="Img"
    />
  </div>
</template>

<script>
export default {
  props: {
    array: Array,
  },
  data() {
    return {
      currentIndex: -1,
    }
  },
  computed: {
    modalArray() {
      return (this.array || [])
        .map((img) => {
          if (typeof img === 'string') {
            return { type: 'image', src: img } // normalize
          }
          return img
        })
        .filter((img) => img.type === 'image')
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.updateIndex()
    })
  },
  methods: {
    getImagePath(direction) {
      return new URL(`../../assets/img/${direction}ArrowLite.svg`, import.meta.url).href
    },
    updateIndex() {
      const currentSrc = $('#galleryImg').attr('src')
      this.currentIndex = this.modalArray.findIndex((img) => img.src === currentSrc)
    },
    closeModal() {
      $('#galleryModal').css('display', 'none')
      this.currentIndex = -1
    },
    nextImage() {
      this.updateIndex()
      if (this.currentIndex < this.modalArray.length - 1) {
        $('#galleryImg').attr('src', this.modalArray[this.currentIndex + 1].src)
        this.updateIndex()
      }
    },
    prevImage() {
      this.updateIndex()
      if (this.currentIndex > 0) {
        $('#galleryImg').attr('src', this.modalArray[this.currentIndex - 1].src)
        this.updateIndex()
      }
    },
  },
}
</script>
