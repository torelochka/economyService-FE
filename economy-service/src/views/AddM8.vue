<template>
    <div>
        <Container :width="300">
            <h1 class="add-group-title">attach photo of each student from the group:</h1>
            <FileInput isMultiple name="mates" placeholder="d&d or click & select a photos of students..."/>
            <Select class="select" placeholder="select a group" :options="mockedOptions" @update-option="handleChangeOption"/>
            <Button class="button">submit</Button>
        </Container>
        <Navigation active-tab-init="Mates" />
    </div>
</template>

<script>
    import Container from "../components/shared/atoms/Container";
    import FileInput from "../components/shared/atoms/FileInput";
    import Select from "../components/shared/atoms/Select";
    import Button from "../components/shared/atoms/Button";
    import Navigation from "../components/shared/molucules/Navigation";

    export default {
        name: "AddGroup",
        components: {
            Container,
            FileInput,
            Select,
            Button,
            Navigation,
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