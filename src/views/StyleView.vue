<template>
  <BoxHeader
    :icon="icon"
    @update:icon="updateIcon"
    :closeMenu="closeMenu"
    @update:closeMenu="updateCloseMenu"
    :arrow="arrow"
    @update:arrow="updateArrow"
    :closeDropDown="closeDropDown"
    @update:closeDropDown="updateCloseDropDown"
  />
  <AlternateRow
    :icon="icon"
    @update:icon="updateIcon"
    :closeMenu="closeMenu"
    @update:closeMenu="updateCloseMenu"
    :arrow="arrow"
    @update:arrow="updateArrow"
    :closeDropDown="closeDropDown"
    @update:closeDropDown="updateCloseDropDown"
  />
  <Contact />
  <ThankYou />
</template>

<script>
import BoxHeader from '../components/subComponents/BoxHeader.vue'
import AlternateRow from '../components/subComponents/AlternateRow.vue'
import Contact from '../components/Contact.vue'
import ThankYou from '../components/TY.vue'

export default {
  props: {
    icon: String,
    closeMenu: Boolean,
    arrow: String,
    closeDropDown: Boolean,
  },
  components: {
    BoxHeader,
    AlternateRow,
    Contact,
    ThankYou,
  },
  methods: {
    updateIcon(value) {
      this.$emit('update:icon', value)
    },
    updateCloseMenu(value) {
      this.$emit('update:closeMenu', value)
    },
    updateArrow(value) {
      this.$emit('update:arrow', value)
    },
    updateCloseDropDown(value) {
      this.$emit('update:closeDropDown', value)
    },
  },
}
</script>
