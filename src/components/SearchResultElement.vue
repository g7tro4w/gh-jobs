<template>
    <div
      class="vacancy-wrapper"
      @click.prevent="click()">
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
  .vacancy-wrapper {
    display: block;
    background-color: #FFF;

  }
  .vacancy-wrapper:hover {
    cursor: pointer;
    transition: background-color linear 0.5s;
    background-color: #DDD;
  }
</style>
