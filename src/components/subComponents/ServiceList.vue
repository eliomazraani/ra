<template>
  <div
    v-if="$route.path !== '/art'"
    v-for="(tab, index) in tabs"
    :class="[
      'grid',
      { ['service-' + (index + 1)]: $route.path !== '/art' },
      { 'd-none': index != counter },
      { displayCatalogue: tab.name == 'Our Weddings & Events' },
    ]"
  >
    <a
      v-if="tab.name != 'Our Weddings & Events'"
      v-for="element in tab.elements"
      :href="element.href || element.redirect"
      :target="element.href ? '_blank' : null"
    >
      <div class="service">
        <img :src="element.image" alt="Img" />
        <div v-if="element.name || element.summary" class="information">
          <div v-if="element.name" class="name">{{ element.name }}</div>
          <div v-if="element.summary" class="summary">{{ element.summary }}</div>
        </div>
      </div>
    </a>
    <template v-else>
      <GridView :array="tab.elements" />
      <Modal :array="tab.elements" />
    </template>
  </div>
  <div v-else class="grid">
    <a v-for="element in tabs" :href="element.redirect">
      <div class="service">
        <img :src="element.image" alt="Img" />
        <div class="information">
          <div class="name">{{ element.name }}</div>
          <div class="summary">{{ element.summary }}</div>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
import { choreoTabs } from '@/assets/js/data'
import { designTabs } from '@/assets/js/data'
import { artTabs } from '@/assets/js/data'
import GridView from '@/components/subComponents/GridView.vue'
import Modal from '@/components/subComponents/Modal.vue'

export default {
  components: {
    GridView,
    Modal,
  },
  props: {
    counter: Number,
  },
  computed: {
    tabs() {
      const path = this.$route.path
      if (path === '/choreography') return choreoTabs
      if (path === '/design') return designTabs
      if (path === '/art') return artTabs
      return ''
    },
  },
}
</script>
