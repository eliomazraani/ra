<template>
  <section class="showService">
    <div v-if="project.type == 'grid'" class="displayProject">
      <div class="display wrap">
        <div v-if="project.description" class="projectDescription">
          {{ project.description }}
        </div>
        <div id="displayCatalogue">
          <div class="displayCatalogue displayCatalogue-1">
            <GridView :array="project.images" />
          </div>
        </div>
        <Modal :array="project.images" />
        <div :class="['button', color]">
          <a @click="scrollToContact()">Get In Touch</a>
        </div>
      </div>
    </div>
    <SlideView v-if="project.type == 'slide'" :array="project.images" />
  </section>
</template>

<script>
import { designTabs } from '@/assets/js/data'
import { artTabs } from '@/assets/js/data'
import DescriptiveView from '@/components/subComponents/DescriptiveView.vue'
import GridView from '@/components/subComponents/GridView.vue'
import SlideView from '@/components/subComponents/SlideView.vue'
import Modal from '@/components/subComponents/Modal.vue'

export default {
  components: {
    DescriptiveView,
    GridView,
    SlideView,
    Modal,
  },
  props: {
    icon: String,
    closeMenu: Boolean,
    arrow: String,
    closeDropDown: Boolean,
  },
  computed: {
    color() {
      const category = this.$route.query.ctg
      if (category == 'choreography') return 'green'
      if (category == 'design') return 'pink'
      if (category == 'art') return 'purple'
      return ''
    },
    project() {
      const category = this.$route.query.ctg
      const id = this.$route.query.id
      const projID = this.$route.query.projID
      if (category == 'design') {
        const tab = designTabs.find((tabs) => tabs.id == id)
        const project = tab.elements.find((projects) => projects.id == projID)
        return project
      }
      if (category == 'art') {
        const project = artTabs.find((projects) => projects.id == projID)
        return project
      }
      return ''
    },
  },
  methods: {
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
