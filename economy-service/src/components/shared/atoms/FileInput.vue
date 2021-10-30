<template>
  <div
    class="dnd-container"
    @dragover="dragover"
    @dragleave="dragleave"
    @drop="drop"
  >
    <input
      type="file"
      :multiple="isMultiple"
      :name="name"
      id="assetsFieldHandle"
      class="file-input"
      @change="onChange"
      ref="file"
      accept=".jpg,.jpeg,.png"
    />

    <label
      v-if="!filelist.length"
      for="assetsFieldHandle"
      class="block cursor-pointer"
    >
      <p class="file-input-placeholder">
        {{ placeholder }}
      </p>
    </label>
    <ul class="file-list" v-else>
      <li class="file-item" v-for="file in filelist" :key="file.name">
        <p class="file-item-name">{{ file.name }}</p>
        <button
          type="button"
          class="remove-button"
          @click="remove(filelist.indexOf(file))"
          title="Remove file"
        >
          &#10006;
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "FileInput",
  props: {
    placeholder: {
      type: String,
    },
    isMultiple: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
    },
  },
  data() {
    return {
      filelist: [], // uploaded files
    };
  },
  methods: {
    onChange() {
      this.filelist = [...this.$refs.file.files];
      // pbbly will emit native filelist
      this.$emit("change-file", this.filelist);
    },
    remove(i) {
      this.filelist.splice(i, 1);
      const dataTransfer = new DataTransfer();
      this.filelist.forEach((file) => dataTransfer.items.add(file));
      this.$refs.file.files = dataTransfer.files;
    },
    dragover(event) {
      event.preventDefault();
      event.currentTarget.classList.add("on-drag-area");
    },
    dragleave(event) {
      event.currentTarget.classList.remove("on-drag-area");
    },
    drop(event) {
      event.preventDefault();
      this.$refs.file.files = event.dataTransfer.files;
      this.onChange();
      event.currentTarget.classList.remove("on-drag-area");
    },
  },
};
</script>

<style scoped>
.dnd-container {
  background-color: white;
  border: 4px solid black;
  min-height: 200px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;
  position: relative;
  transition: all 0.3s;
}

.file-input {
  opacity: 0;
  position: absolute;
  overflow: hidden;
  height: 100%;
  width: 100%;
  cursor: pointer;
}

.file-input-placeholder {
  text-align: center;
  width: 150px;
  font-weight: 500;
  font-size: 20px;
}

.file-list {
  z-index: 5;
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.file-item {
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.file-item-name {
  overflow: hidden;
  width: 80%;
  word-break: keep-all;
  text-overflow: ellipsis;
  font-size: 20px;
}

.on-drag-area {
  background-color: purple;
  color: white;
}

.remove-button {
  border: 2px solid black;
  height: 25px;
  width: 25px;
  cursor: pointer;
  background-color: red;
  color: white;
  font-weight: bold;
  font-size: 15px;
}
</style>
