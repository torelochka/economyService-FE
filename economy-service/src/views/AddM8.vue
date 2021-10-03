<template>
    <Container :width="300">
        <h1 class="add-group-title">attach photo of each student from the group:</h1>
        <file-input multiple placeholder="d&d or click & select a photos of students..."/>
        <Select class="select" placeholder="select a group" :options="mockedOptions" @update-option="handleChangeOption"/>
        <Button class="button">submit</Button>
    </Container>
</template>

<script>
    import Container from "../components/Container";
    import FileInput from "../components/FileInput";
    import Select from "../components/Select";
    import Button from "../components/Button";

    export default {
        name: "AddGroup",
        components: {
            Container,
            FileInput,
            Select,
            Button,
        },
        data() {
            return {
                group: '',
                mockedOptions: ['11-901', '11-902', '11-903', '11-904', '11-905'],
            }
        },
        methods: {
            handleChangeOption(value) {
                this.group = value;
            }
        }
    }
</script>

<style scoped>
    .add-group-title {
        font-size: 30px;
        font-weight: 500;
        margin-bottom: 35px;
    }

    .select {
        margin: 20px 0;
    }

    .button {
        width: 100%;
        height: 40px;
    }
</style>