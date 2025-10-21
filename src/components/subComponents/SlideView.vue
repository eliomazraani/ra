<template>
  <div
    v-for="(list, index) in array"
    class="galleryProject"
    :style="index === array.length - 1 ? { paddingBottom: '16px' } : {}"
    ref="projects"
  >
    <img
      @click="updateGallery(index, -1)"
      class="leftArrowLite"
      :src="getImagePath('left')"
      alt="Img"
    />
    <div class="gallery" ref="galleries">
      <img v-for="img in list" @click="showModal(img, list)" :src="img" alt="Img" />
    </div>
    <img
      @click="updateGallery(index, 1)"
      class="rightArrowLite"
      :src="getImagePath('right')"
      alt="Img"
    />
  </div>
  <Modal :array="selectedList" />
</template>

<script>
import Modal from '@/components/subComponents/Modal.vue'

export default {
  components: {
    Modal,
  },
  props: {
    array: Array,
  },
  data() {
    return {
      galleryPages: [],
      selectedList: [],
    }
  },
  mounted() {
    this.galleryPages = this.array.map(() => 0)
  },
  methods: {
    getImagePath(direction) {
      return new URL(`../../assets/img/${direction}ArrowLite.svg`, import.meta.url).href
    },
    showModal(img, list) {
      const modal = $('#galleryModal')
      const modalImg = $('#galleryImg')
      if (modal && modalImg) {
        modal.css('display', 'flex')
        modalImg.attr('src', img)
      }
      this.selectedList = list
    },
    updateGallery(index, direction) {
      const gallery = this.$refs.galleries[index]
      const project = this.$refs.projects[index]

      if (!gallery || !project) return

      const parentWidth = project.offsetWidth
      const scrollWidth = gallery.scrollWidth
      const totalPages = Math.ceil(scrollWidth / parentWidth)

      let currentPage = this.galleryPages[index] || 0

      if (direction === 1) {
        currentPage = Math.min(currentPage + 1, totalPages - 1)
      } else if (direction === -1) {
        currentPage = Math.max(currentPage - 1, 0)
      }

      const translateX = currentPage * parentWidth
      const maxTranslate = scrollWidth - parentWidth

      gallery.style.transform = `translateX(-${Math.min(translateX, maxTranslate)}px)`
      this.galleryPages[index] = currentPage
    },
  },
}
</script>
