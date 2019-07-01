<template>
    <form @submit.prevent="submit()">
        <input
            class="search-text-field"
            type="text"
            v-model="textField"
            @input="updateField()">
        <input
        :disabled="isEmptyDescription"
        type="submit"
        class="">
    </form>
</template>
<script>
export default {
  props: ['value'],
  data () {
    return {
      textField: this.value
    }
  },
  computed: {
    isEmptyDescription () {
      return this.textField === ''
    }
  },
  methods: {
    updateField () {
      this.$emit('input', this.textField)
    },
    submit () {
      this.$emit('submit', {
        description: this.textField
      })
    }
  }
}
</script>
<style>

</style>
