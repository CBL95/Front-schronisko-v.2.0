<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logoSchronisko.png">
    <HomeSite msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeSite from '@/components/HomeSite.vue'

export default {
  name: 'HomeView',
  components: {
    HomeSite
  }
}
</script>
