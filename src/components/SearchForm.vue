<template>
    <form @submit.prevent="submit()">
        <input
            class="search-text-field"
            type="text"
            v-model="description">
        <input
        type="submit"
        class="">
    </form>
</template>
<script>
export default {
    data () {
        return {
            description: ''
        }
    },
    methods: {
        submit() {
            this.$emit('submit', {
                description: this.description
            })
        }
    }
}
</script>
<style>

</style>
