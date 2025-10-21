<template>
  <section class="serviceOptions">
    <!-- Project Service -->
    <div class="servicesGrid">
      <div class="wrap">
        <ServiceTabs :counter="counter" @update:counter="counter = $event" />
        <ServiceList :counter="counter" @update:counter="counter = $event" />
      </div>
    </div>
  </section>
</template>

<script>
import ServiceTabs from './ServiceTabs.vue'
import ServiceList from './ServiceList.vue'

export default {
  data() {
    return {
      counter: 0,
    }
  },
  components: {
    ServiceTabs,
    ServiceList,
  },
}
</script>
