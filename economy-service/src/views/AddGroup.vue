<template>
  <div>
    <Container :width="300">
      <h1 class="add-group-title">attach group's photo:</h1>
      <FileInput is-multiple placeholder="d&d or click & select a photo..." name="group" @change-file="handleChangeFile"/>
      <Select is-multiple class="select" placeholder="select a group" :options="mockedOptions" @update-option="handleChangeOption"/>
      <Button :on-click="submit" class="button">submit</Button>
    </Container>
    <Navigation active-tab-init="Groups"/>
  </div>
</template>

<script>
import Container from "../components/shared/atoms/Container";
import FileInput from "../components/shared/atoms/FileInput";
import Select from "../components/shared/atoms/Select";
import Button from "../components/shared/atoms/Button";
import Navigation from "../components/shared/molucules/Navigation";

import { mapActions } from 'vuex'

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
      groups: '',
      photos: [],
      mockedOptions: ['11-901', '11-902', '11-903', '11-904', '11-905'],
    }
  },
  methods: {
    ...mapActions(["sendGroupData"]),
    handleChangeFile(value) {
      this.photos = value;
    },
    handleChangeOption(value) {
      this.groups = value;
    },
    submit() {
      this.sendGroupData({ groups: this.groups, photos: this.photos });
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