<template>
  <div class="button-wrapper">
    <button
      :type="type"
      :disabled="disabled"
      :name="name"
      @click="onClick()"
      :class="['button', getButtonStateClass, getButtonSizeClass]">
      <div class="button-inner">
        <slot/>
      </div>
    </button>
  </div>
</template>
<script>
const COLOR_VARIANTS = [
  'success',
  'warning',
  'disabled',
  'danger',
  'default',
  'dark'
]

export default {
  props: {
    type: {
      type: String,
      default: 'button'
    },
    name: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'md'
    },
    variant: {
      type: String,
      default: 'default',
      validator: (value) => {
        return COLOR_VARIANTS.includes(value)
      }
    }
  },
  computed: {
    getButtonStateClass () {
      return `state-${this.variant}`
    },
    getButtonSizeClass () {
      return `size-${this.size}`
    }
  },
  methods: {
    onClick () {
      this.$emit('click')
    }
  }
}
</script>
<style>
  .button-wrapper {
    display: inline-block;
    margin: 0.5em 1em;
  }
  .button {
    outline: none;
    border: none;
    border-radius: 0.5em;
    transition: color 0.25s linear, background 0.25s linear, transform 0.1s linear;
  }
  .button.size-lg {
    font-size: 2em;
    padding-left: 1em;
    padding-right: 1em;
  }
  .button-inner {
    padding: 0.25em 0.5em;
  }
  .button:hover {
    cursor: pointer;
  }
  .button:focus:active {
    transform: scale(0.9);
  }

  .button.state-default {
    background: var(--white-color);
    color: var(--default-state-color);;
    border: 2px solid var(--default-state-color);;
  }
  .button.state-default:hover {
    background: var(--default-state-color);
    color: var(--white-color);
  }
  .button.state-danger {
    background: var(--white-color);
    color: var(--danger-state-color);;
    border: 2px solid var(--danger-state-color);;
  }
  .button.state-danger:hover {
    background: var(--danger-state-color);
    color: var(--white-color);
  }
  .button.state-success {
    background: var(--white-color);
    color: var(--success-state-color);;
    border: 2px solid var(--success-state-color);;
  }
  .button.state-success:hover {
    background: var(--success-state-color);
    color: var(--white-color);
  }
  .button.state-dark {
    background: var(--white-color);
    color: var(--dark-state-color);;
    border: 2px solid var(--dark-state-color);;
  }
  .button.state-dark:hover {
    background: var(--dark-state-color);
    color: var(--white-color);
  }
</style>
