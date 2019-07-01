<template>
    <div id="search-page">
        <header>
            <h1>GitHub Jobs</h1>
            <h2>GitHub Jobs</h2>
        </header>
        <main>
            <div class="search-form">
                <search-form
                    @submit="onFormSubmit"/>
            </div>
            <spinner v-if="isVisibleSpinner"/>
            <div
                class="search-results"
                v-else-if="isSearchResultsExists">
                <search-result-element
                    v-for="position in positions"
                    :position="position"
                    :key="position.id"
                    @click="goToVacancyPage(position.id)"
                    />
            </div>
        </main>
    </div>
</template>
<script>

import API from '@/api/index.js'

import SearchForm from '@/components/SearchForm'
import SearchResultElement from '@/components/SearchResultElement'
import Spinner from '@/components/Spinner'

export default {
  components: {
    'search-form': SearchForm,
    'search-result-element': SearchResultElement,
    'spinner': Spinner
  },
  data () {
    return {
      positions: [],
      attemptSubmit: false
    }
  },
  created () {
    if (this.$route.query.description) {
      this.searchVacancy({
        description: this.$route.query.description
      })
    }
  },
  watch: {
    $route () {
      this.searchVacancy({
        description: this.$route.query.description
      })
    }
  },
  computed: {
    isSearchResultsExists () {
      return this.positions.length > 0
    },
    isVisibleSpinner () {
      return this.attemptSubmit
    }
  },
  methods: {
    onFormSubmit (searchParams) {
      this.$router.push({
        query: searchParams
      })
    },
    searchVacancy (searchParams) {
      this.attemptSubmit = true
      API.positions.list(searchParams)
        .then(positions => {
          this.positions = positions
          this.attemptSubmit = false
        })
    },
    goToVacancyPage (id) {
      this.$router.push(`/${id}`)
    }
  }
}
</script>
<style>

</style>
