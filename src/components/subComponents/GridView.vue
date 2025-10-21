<template>
  <div v-for="row in groupedRows" class="row">
    <div
      v-for="grid in row"
      :class="[grid.type, { scale: grid.scale }, { mobScale: grid.mobScale }]"
    >
      <img
        :src="grid.src"
        :alt="grid.type === 'image' ? 'Img' : 'Video'"
        @click="grid.type === 'image' ? showModal(grid.src) : socialMedia(grid.link)"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    array: Array,
  },
  computed: {
    groupedRows() {
      const rows = []
      let currentRow = []
      let rowFill = 0

      this.array.forEach((grid) => {
        const fill = grid.type === 'image' ? 25 : 50

        if (rowFill + fill > 100) {
          rows.push(currentRow)
          currentRow = []
          rowFill = 0
        }

        currentRow.push(grid)
        rowFill += fill
      })

      if (currentRow.length) {
        rows.push(currentRow)
      }

      return rows
    },
  },
  methods: {
    showModal(img) {
      var modal = $('#galleryModal')
      var modalImg = $('#galleryImg')
      modal.css('display', 'flex')
      modalImg.attr('src', img)
    },
    socialMedia(url) {
      window.open(url, '_blank')
    },
  },
}
</script>
