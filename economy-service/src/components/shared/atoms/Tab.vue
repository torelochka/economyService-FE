<template>
    <div :class="[{ active: isActive }, 'tabWrapper']" @click="$emit('tab-change', { name, route })">
        <p>
            {{ name }}
        </p>
    </div>
</template>

<script>
    export default {
        name: "Tab",
        props: {
            name: {
                type: String
            },
            route: {
                type: String,
            },
            isActive: {
                type: Boolean,
                default: false,
            },
        },
    }
</script>

<style scoped>
.tabWrapper {
    box-sizing: content-box;
    cursor: pointer;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: stretch;
    justify-self: stretch;
    font-weight: bold;
    transition: all 0.3s;
    background: none;
    border-bottom-color: #E2E2E2;
}

.tabWrapper:hover {
    background-color: #b1b1b1;
}

.active {
    border-bottom: 3px solid black;
}
</style>