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
        <p>
          Company: {{ position.company }}
        </p>
        <p>
          Location: {{ position.location }}
        </p>
        <p>
          Position type: {{ position.type }}
        </p>
      </div>
      <div class="vacancy-footer">
        <span>
            Created: {{ getPrettyDate }}
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
  computed: {
    getPrettyDate () {
      const CURRENT_DATE = new Date(this.position.created_at)
      let day = CURRENT_DATE.getDate()
      let month = CURRENT_DATE.getMonth() + 1
      let year = CURRENT_DATE.getFullYear()
      return `${day < 10 ? '0' + String(day) : day}.${month < 10 ? '0' + String(month) : day}.${String(year).split(0, 2)[1]}`
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
    padding: 0.5em;
    background-color: #FFF;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    border: #DDD solid 1px;
    border-radius: 0.5em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  .vacancy-wrapper div {
    width: 100%;
  }

  .vacancy-header {
    text-align: center;
  }

  .vacancy-body {
    text-align: left;
  }

  .vacancy-footer {
    text-align: right;
  }

  .vacancy-wrapper:hover {
    cursor: pointer;
    transition: box-shadow linear 0.25s;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
</style>
