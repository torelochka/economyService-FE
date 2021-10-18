<template>
    <input type="text" :name="name" :placeholder="placeholder" class="input">
</template>

<script>
    export default {
        name: "TextInput",
        props: {
            name: {
                type: String,
            },
            placeholder: {
                type: String,
            },
        },
    }
</script>

<style scoped>
.input {
    border: 4px solid black;
    height: 20px;
    padding: 5px;
    font-size: 18px;
    color: black;
}

.input::placeholder {
    font-size: 18px;
    color: #5a5a5a;
}

.input:focus {
    outline-offset: 5px;
}
</style>