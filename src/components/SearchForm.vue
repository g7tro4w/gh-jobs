<template>
    <form
        class="form-wrapper"
        @submit.prevent="submit()">
        <input
            class="form-text-field"
            type="text"
            v-model="textField"
            @input="updateField()">
        <input
        class="form-button-submit"
        :disabled="isEmptyDescription"
        value="Search"
        type="submit">
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
    .form-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        height: 15vh;
    }

    .form-button-submit {
        border: none;
        outline: none;
        color: #FFF;
        padding: 1em;
        border-radius: 0.5em;
        width: 250px;
        background-color: #24292e;
        transition: all 0.25s linear;
    }

    .form-button-submit:disabled {
        background-color: gray;
    }

    .form-button-submit:hover {
        cursor: pointer;
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    }

</style>
