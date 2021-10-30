<template>
  <div>
    <Container :width="300">
      <div v-if="isFetching">
        <div class="loader">
          <Complete />
          <p>
            Handling images<br />g-table will be<br />
            updated soon...
          </p>
        </div>
      </div>
      <form v-else>
        <h1 class="add-group-title">attach group's photo:</h1>
        <FileInput
          is-multiple
          placeholder="d&d or click & select a photo..."
          name="group"
          @change-file="handleChangeFile"
        />
        <Select
          all
          is-multiple
          class="select"
          placeholder="select a group"
          :options="getGroups"
          @update-option="handleChangeGroupOption"
        />
        <Select
          class="select"
          placeholder="select a discipline"
          :options="getDisciplines"
          @update-option="handleChangeDisciplineOption"
        />
        <Button
          type="submit"
          :is-disabled="!isFormFilled"
          :on-click="submit"
          class="button"
          >submit</Button
        >
      </form>
    </Container>
    <Navigation active-tab-init="Groups" />
  </div>
</template>

<script>
import Container from "../components/shared/atoms/Container";
import FileInput from "../components/shared/atoms/FileInput";
import Select from "../components/shared/atoms/Select";
import Button from "../components/shared/atoms/Button";
import Navigation from "../components/shared/molucules/Navigation";
import Complete from "../components/shared/atoms/Complete";

import { mapActions, mapState } from "vuex";

export default {
  name: "AddGroup",
  components: {
    Container,
    FileInput,
    Select,
    Button,
    Navigation,
    Complete,
  },
  data() {
    return {
      isFetching: false,
      photos: [],
      selectedDiscipline: "",
      selectedGroups: [],
    };
  },
  methods: {
    ...mapActions(["sendGroupData", "loadDisciplines", "loadGroups"]),
    handleChangeFile(value) {
      this.photos = value;
    },
    handleChangeGroupOption(value) {
      this.selectedGroups = value;
    },
    handleChangeDisciplineOption(value) {
      this.selectedDiscipline = value;
    },
    async submit() {
      this.isFetching = true;
      await this.sendGroupData({
        groups: this.selectedGroups,
        photos: this.photos,
        discipline: this.selectedDiscipline,
      });
    },
    goBack() {
      this.isFetching = false;
      this.$router.go();
    }
  },
  mounted() {
    this.loadDisciplines();
    this.loadGroups();
  },
  computed: {
    ...mapState(["recognizedStudents", "disciplines", "groups"]),
    getDisciplines() {
      return this.disciplines.map((item) => item.title);
    },
    getGroups() {
      return this.groups.map((item) => item.title);
    },
    hasStudents() {
      return this.recognizedStudents?.length > 0;
    },
    isFormFilled() {
      return (
        this.photos.length > 0 &&
        this.selectedDiscipline.length > 0 &&
        this.selectedGroups.length > 0
      );
    }
  },
};
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
