<template>

  <div>
    <div>
      <button @click.prevent="goBack()">
        Go back
      </button>
    </div>
    <spinner v-if="attemptLoading"/>
    <div v-else>
      {{ vacancy.title }}
      <div v-html="vacancy.description">
      </div>
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
  methods: {
    goBack () {
      this.$router.back()
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
