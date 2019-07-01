<template>
    <div id="search-page">
        <header>
            <h1>Greatest header of ALL!!!</h1>
        </header>
        <main>
            <div class="search-form">
                <search-form
                    @submit="onFormSubmit"/>
            </div>
            <div 
                class="search-results"
                v-if="isSearchResultsExists">
                <search-result-element
                    v-for="position in positions"
                    :position="position"
                    :key="position.id"/>
            </div>
        </main>
    </div>
</template>
<script>

import API from '@/api/index.js'
import SearchForm from '@/components/SearchForm'
import SearchResultElement from '@/components/SearchResultElement'

export default {
    components: {
        'search-form': SearchForm,
        'search-result-element': SearchResultElement
    },
    data () {
        return {
            positions: []
        }
    },
    created() {
        if (this.$route.query.description) {
            this.searchVacancy({
                description: this.$route.query.description
            })
        }
    },
    watch: {
        $route() {
            this.searchVacancy({
                description: this.$route.query.description
            })
        }
    },
    computed: {
        isSearchResultsExists () {
            return this.positions.length > 0
        }
    },
    methods: {
        onFormSubmit(searchParams) {
            this.$router.push({
                query: searchParams
            })
        },
        searchVacancy(searchParams) {
            API.positions.list(searchParams)
            .then((positions => {
                this.positions = positions
            }))
        }
    }
}
</script>
<style>

</style>
