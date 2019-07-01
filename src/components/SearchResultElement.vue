<template>
    <div @click.prevent="click()">
        <span>
            {{ position.title }}
        </span>
    </div>
</template>
<script>
export default {
  props: {
    position: {
      type: Object
    }
  },
  methods: {
    click () {
      this.$emit('click')
    }
  }
}
</script>
<style>

</style>
