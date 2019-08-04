<template>
    <div class="input-wrapper">
        <input
            v-model="inputValue"
            @input="onInput"
            :placeholder="placeholder"
            class="input" 
            :type="type"/>    
    </div>    
</template>
<script>
export default {
    props: {
        value: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            default: 'text'
        },
        placeholder: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            inputValue: this.value
        }
    },
    methods: {
        onInput() {
            this.$emit('input', this.inputValue)
        }
    }
}
</script>
<style>
    .input {
        outline: none;
        padding: 0.25em 0.25em 0.25em 0.25em;
        border: none;
        background-color: #EEE;
        border: 1px solid #DDD;
        border-radius: 0.5em;
        font-size: 1.5em;
    }
    .input::placeholder {
        color: 999;
    }
</style>
