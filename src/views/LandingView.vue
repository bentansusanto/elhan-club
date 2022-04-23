<template>
    <div id="LandingView">
      <app-header />
      <router-view/>
      <app-footer />
    </div>
</template>

<script>
import AppHeader from '@/views/AppHeader.vue'
import AppFooter from '@/views/AppFooter.vue'

export default {
  name : "LandingView",
  components : {
    AppHeader,
    AppFooter
  }
}
</script>
