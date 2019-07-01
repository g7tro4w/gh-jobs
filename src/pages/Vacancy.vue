<template>

  <div>
    <spinner v-if="attemptLoading"/>
    <div v-else>
      Hello from vacancy page! {{ vacancy.title }}
    </div>
  </div>
</template>
<script>

import API from '@/api/index.js'

import Spinner from '@/components/Spinner'

export default {
  components: {
    'spinner': Spinner
  },
  data () {
    return {
      vacancy: {},
      attemptLoading: false
    }
  },
  created () {
    this.attemptLoading = true
    API.positions.read(this.$route.params.id)
      .then(positions => {
        this.vacancy = positions
        this.attemptLoading = false
      })
  }
}
</script>
<style>

</style>
