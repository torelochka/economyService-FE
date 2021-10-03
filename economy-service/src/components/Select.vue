<template>
    <v-select
            class="style-chooser"
            :placeholder="placeholder"
            :options="options"
    />
</template>

<script>
    import 'vue-select/dist/vue-select.css';

    export default {
        name: "Select",
        props: {
            placeholder: {
                type: String,
            },
            options: {
                type: Array,
            }
        }
    }
</script>

<style>
.style-chooser .vs__dropdown-toggle {
    background: white;
    border: 4px solid black;
    color: black;
}

.style-chooser .vs__dropdown-menu {
    border-left: 4px solid black;
    border-bottom: 4px solid black;
    border-right: 4px solid black;
    font-weight: 500;
    font-size: 20px;
}

.style-chooser .vs__selected-options {
    color: black;
    font-weight: 500;
    font-size: 20px;
}

.style-chooser .vs__search::placeholder {
    color: black;
    font-weight: 500;
    font-size: 20px;
}
</style>