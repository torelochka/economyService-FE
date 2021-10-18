<template>
    <button :type="type" @click="onClick" :disabled="isDisabled" class="button" :class="isDisabled ? 'disabled' : ''">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: "Button",
        props: {
            type: {
                type: String,
                default: "button"
            },
            onClick: {
                type: Function,
                default: () => {},
            },
            isDisabled: {
                type: Boolean,
                default: false,
            }
        }
    }
</script>

<style scoped>
.button {
    background-color: black;
    border: none;
    color: white;
    padding: 7px;
    font-size: 18px;
    cursor: pointer;
}

.button:focus {
    outline-offset: 5px;
}

.disabled {
    background-color: #a8a8a8;
}
</style>