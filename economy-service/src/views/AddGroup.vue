<template>
  <Container :width="300">
    <h1 class="add-group-title">attach group's photo:</h1>
    <FileInput placeholder="d&d or click & select a photo..." name="group" @change-file="handleChangeFile"/>
    <Select class="select" placeholder="select a group" :options="mockedOptions" @update-option="handleChangeOption"/>
    <Button class="button">submit</Button>
  </Container>
</template>

<script>
import Container from "../components/shared/atoms/Container";
import FileInput from "../components/shared/atoms/FileInput";
import Select from "../components/shared/atoms/Select";
import Button from "../components/shared/atoms/Button";

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
      files: [],
      mockedOptions: ['11-901', '11-902', '11-903', '11-904', '11-905'],
    }
  },
  methods: {
    handleChangeFile(value) {
      this.files = value;
    },
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