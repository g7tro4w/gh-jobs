<template>
    <div
      class="vacancy-wrapper"
      @click.prevent="click()">
      <div class="vacancy-header">
        <h3>
          {{ position.title }}
        </h3>
      </div>
      <div class="vacancy-body">
        <span>
          {{ position.company }}
        </span>
        <span>
          {{ position.location }}
        </span>
        <span>
          {{ position.type }}
        </span>
      </div>
      <div class="vacancy-footer">
        <span>
            {{ position.created_at }}
        </span>
      </div>
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
    padding: 1em;
    background-color: #FFF;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    height: 20vh;
    border: #DDD solid 1px;

    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
  }
  .vacancy-wrapper:hover {
    cursor: pointer;
    transition: box-shadow linear 0.25s;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
</style>
