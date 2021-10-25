<template>
    <v-select
            class="style-chooser"
            :placeholder="placeholder"
            :options="options"
            :multiple="isMultiple"
            v-model="currentOption"
            @input="handleChangeOption"
    />
</template>

<script>
    import 'vue-select/dist/vue-select.css';

    export default {
        name: "Select",
        data() {
            return {
                currentOption: '',
            }
        },
        methods:  {
            handleChangeOption() {
                this.$emit('update-option', this.currentOption)
            }
        },
        props: {
            placeholder: {
                type: String,
            },
            options: {
                type: Array,
            },
            isMultiple: {
                type: Boolean,
                default: false,
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

.style-chooser .vs__selected {
    color: black;
    background-color: white;
    border: 1px solid black;
    border-radius: 0;
    font-weight: 500;
    font-size: 16px;
}
</style>