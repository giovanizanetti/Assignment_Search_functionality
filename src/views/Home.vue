<template>
  <div class="container">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Search class="p-3" />
  </div>
</template>

<script>
import Search from '@/components/Search.vue'

export default {
  name: 'Home',
  components: {
    Search,
  },
}
</script>
