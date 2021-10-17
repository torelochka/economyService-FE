<template>
  <div>
    <Container :width="300">
      <div v-if="isFetching">
        <div v-if="recognizedStudents.length">
          <StudentsList
                  :students="recognizedStudents"
          />
          <p class="back-link" @click="goBack">&#8656; back to form</p>
        </div>
        <div class="loader" v-else>
          <PulseLoader :loading="true" color="#81007f"/>
          <p>Processing <br> images...</p>
        </div>
      </div>
      <div v-else>
        <h1 class="add-group-title">attach group's photo:</h1>
        <FileInput is-multiple placeholder="d&d or click & select a photo..." name="group" @change-file="handleChangeFile"/>
        <Select is-multiple class="select" placeholder="select a group" :options="mockedGroupOptions" @update-option="handleChangeGroupOption"/>
        <Select class="select" placeholder="select a discipline" :options="getDisciplines" @update-option="handleChangeDisciplineOption"/>
        <Button :on-click="submit" class="button">submit</Button>
      </div>
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
import StudentsList from "../components/shared/molucules/StudentsList";
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

import { mapActions, mapState } from 'vuex'

export default {
  name: "AddGroup",
  components: {
    Container,
    FileInput,
    Select,
    Button,
    Navigation,
    StudentsList,
    PulseLoader,
  },
  data() {
    return {
      isFetching: false,
      groups: '',
      photos: [],
      discipline: '',
      mockedGroupOptions: ['11-901', '11-902', '11-903', '11-904', '11-905'],
    }
  },
  methods: {
    ...mapActions(["sendGroupData", "loadDisciplines"]),
    handleChangeFile(value) {
      this.photos = value;
    },
    handleChangeGroupOption(value) {
      this.groups = value;
    },
    handleChangeDisciplineOption(value) {
      this.discipline = value;
    },
    async submit() {
      this.isFetching = true;
      await this.sendGroupData({ groups: this.groups, photos: this.photos, discipline: this.discipline });
    },
    goBack() {
      this.isFetching = false;
    }
  },
  mounted() {
    this.loadDisciplines();
  },
  computed: {
    ...mapState(['recognizedStudents', 'disciplines']),
    getDisciplines() {
      return this.disciplines.map(item => item.title);
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

.loader {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  height: 80vh;
  justify-content: center;
}

.back-link {
  text-align: center;
  font-size: 20px;
  text-decoration: underline;
  font-weight: bold;
}
</style>