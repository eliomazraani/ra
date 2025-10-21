<template>
  <!-- Clients -->
  <section class="clients">
    <div v-if="windowWidth > 1024" class="wide" ref="wideContainer">
      <i @click="plusSlides(-1)" class="fas fa-angle-left leftArrow"></i>
      <div class="fader" style="width: 100%">
        <div
          v-for="(group, index) in clientGroups"
          :class="['clientLogo', 'fade', { 'd-none': clientGroupIndex != index }]"
        >
          <img v-for="client in group" :src="client.src" :class="client.scale || ''" alt="Img" />
        </div>
      </div>
      <i @click="plusSlides(1)" class="fas fa-angle-right rightArrow"></i>
    </div>
    <div v-else class="narrow">
      <div class="clientLogo">
        <img
          v-for="client in clients"
          :src="client.src || client"
          :class="client.scale || ''"
          alt="Img"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { clients } from '@/assets/js/data'

export default {
  data() {
    return {
      windowWidth: window.innerWidth,
      clients: clients,
      clientGroups: [],
      clientGroupIndex: 0,
    }
  },
  mounted() {
    window.addEventListener('resize', this.updateWindowWidth)
    this.$nextTick(() => {
      this.renderClients()
    })
  },
  methods: {
    async renderClients() {
      if (this.windowWidth <= 1024) {
        return
      }

      const faderEl = this.$refs.wideContainer
      if (!faderEl) return

      const faderWidth = faderEl.offsetWidth
      const columnGap = 80

      const normalizedClients = this.clients.map((c) =>
        typeof c === 'string' ? { src: c, scale: '' } : { ...c },
      )

      const loadedClients = await Promise.all(
        normalizedClients.map((client) => {
          return new Promise((resolve) => {
            const img = new Image()
            img.src = client.src
            img.onload = () => {
              resolve({ ...client, width: img.width })
            }
            img.onerror = () => {
              console.error('Failed to load image:', client.src)
              resolve(null)
            }
          })
        }),
      )

      const groups = []
      let currentGroup = []
      let currentWidth = 0

      for (const client of loadedClients) {
        if (!client) continue

        if (currentWidth + client.width + columnGap > faderWidth) {
          if (currentGroup.length) groups.push(currentGroup)
          currentGroup = []
          currentWidth = 0
        }

        currentGroup.push(client)
        currentWidth += client.width + columnGap
      }

      if (currentGroup.length) {
        groups.push(currentGroup)
      }

      this.clientGroups = groups
    },
    plusSlides(num) {
      this.clientGroupIndex += num

      if (this.clientGroupIndex < 0) {
        this.clientGroupIndex = this.clientGroups.length - 1
      }

      if (this.clientGroupIndex > this.clientGroups.length - 1) {
        this.clientGroupIndex = 0
      }
    },
    updateWindowWidth() {
      this.windowWidth = window.innerWidth
    },
  },
  watch: {
    windowWidth() {
      this.renderClients()
    },
  },
}
</script>
