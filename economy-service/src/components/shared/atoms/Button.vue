<template>
    <button :type="type" @click="onClick" class="button">
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
</style>