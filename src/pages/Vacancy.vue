<template>
  <div>Hello from vacancy page! {{ vacancy.title }}</div>
</template>
<script>

import API from '@/api/index.js'

export default {
  data () {
    return {
      vacancy: {}
    }
  },
  created () {
    API.positions.read(this.$route.params.id)
      .then(positions => {
        this.vacancy = positions
      })
  }
}
</script>
<style>

</style>
