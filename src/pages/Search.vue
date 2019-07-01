<template>
    <div id="search-page">
        <div class="search-form">
            <search-form
                v-model="searchField"
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
            <!-- <div v-else>
                <span>
                    Enter the job information you are interested in and click on "Search" button!
                </span>
            </div> -->
        </div>
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
      searchField: '',
      attemptSubmit: false
    }
  },
  created () {
    if (this.$route.query.description) {
      this.searchField = this.$route.query.description
      this.searchVacancy({
        description: this.$route.query.description
      })
    } else {
      this.searchField = ''
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
    .content-wrapper {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    .search-results {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
        grid-gap: 2vh;
    }
</style>
