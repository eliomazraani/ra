<template>
  <!-- Bread Crumbs -->
  <section :class="['breadCrumbs', color]">
    <div class="serviceName">Our Service / {{ service }} / {{ tab }}</div>
    <div class="projectName">{{ project }}</div>
  </section>
</template>

<script>
import { choreoTabs } from '@/assets/js/data'
import { designTabs } from '@/assets/js/data'
import { artTabs } from '@/assets/js/data'

export default {
  computed: {
    color() {
      const category = this.$route.query.ctg
      if (category == 'choreography') return 'green'
      if (category == 'design') return 'pink'
      if (category == 'art') return 'purple'
      return ''
    },
    service() {
      const service = this.$route.query.ctg
      if (service == 'choreography') return 'Movement & Choreography'
      if (service == 'design') return 'Costume Design & Styling'
      if (service == 'art') return 'Artistic Direction'
      return ''
    },
    tab() {
      const category = this.$route.query.ctg
      const id = this.$route.query.id
      if (category == 'choreography') {
        const tab = choreoTabs.find((tabs) => tabs.id == id)
        return tab.name
      }
      if (category == 'design') {
        const tab = designTabs.find((tabs) => tabs.id == id)
        return tab.name
      }
      if (category == 'art') return 'Our Projects'
      return ''
    },
    project() {
      const category = this.$route.query.ctg
      const id = this.$route.query.id
      const projID = this.$route.query.projID
      if (category == 'choreography') {
        const tab = choreoTabs.find((tabs) => tabs.id == id)
        const project = tab.elements.find((projects) => projects.id == projID)
        return project.name
      }
      if (category == 'design') {
        const tab = designTabs.find((tabs) => tabs.id == id)
        const project = tab.elements.find((projects) => projects.id == projID)
        return project.name
      }
      if (category == 'art') {
        const project = artTabs.find((projects) => projects.id == projID)
        return project.name
      }
      return ''
    },
  },
}
</script>
