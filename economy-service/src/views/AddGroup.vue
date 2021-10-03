<template>
  <Container :width="300">
    <h1 class="add-group-title">attach group's photo:</h1>
    <file-input placeholder="d&d or select a photo..."/>
    <Select class="select" placeholder="select a group" :options="mockedOptions"/>
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
      mockedOptions: ['11-901', '11-902', '11-903', '11-904', '11-905'],
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