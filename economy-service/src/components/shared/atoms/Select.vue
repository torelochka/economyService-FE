<template>
  <div class="select-container">
    <v-select
      class="style-chooser"
      :placeholder="placeholder"
      :options="options"
      :multiple="isMultiple"
      v-model="currentOption"
      @input="handleChangeOption"
      label="label"
    />
    <button
      v-if="all"
      :class="['select-all-button', { deselect: isAll }]"
      @click="selectAll"
    >
      {{ isAll ? "&#10006;" : "all" }}
    </button>
  </div>
</template>

<script>
import "vue-select/dist/vue-select.css";

export default {
  name: "Select",
  data() {
    return {
      currentOption: "",
    };
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
    },
    all: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleChangeOption() {
      this.$emit("update-option", this.currentOption);
    },
    selectAll() {
      if (this.currentOption.length !== this.options.length) {
        this.currentOption = this.options;
      } else {
        this.currentOption = "";
      }
      this.$emit("update-option", this.currentOption);
    },
  },
  computed: {
    isAll() {
      return this.currentOption.length === this.options.length;
    },
  },
};
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

.select-container {
  display: flex;
  flex-direction: row;
  gap: 10px;
  width: 100%;
}

.style-chooser {
  flex-grow: 1;
}

.select-all-button {
  /*border-radius: 50%;*/
  height: 45px;
  width: 45px;
  cursor: pointer;
  font-weight: bold;
  flex-shrink: 0;
  background-color: white;
  font-size: 15px;
  border: 4px solid black;
  transition: background-color 0.2s;
}

.deselect {
  margin-top: 8px;
  background-color: red;
  color: white;
  height: 25px;
  width: 25px;
  border: 2px solid black;
}
</style>
