<template>
  <div>
    <h1 class="list-title">list of students:</h1>
    <p class="reference">№/name/similarity</p>
    <table class="students-list">
      <tr
        v-for="({ similarity, student }, index) in students"
        :key="index"
        class="item"
      >
        <td class="index">{{ index + 1 }}</td>
        <td class="name">{{ student.firstname }} {{ student.lastname }}</td>
        <td
          class="similarity"
          :class="{ lowSimilariry: Math.round(similarity) < 50 }"
        >
          {{ similarity | shortSimilarity }}%
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "StudentsList",
  props: {
    students: {
      type: Array,
      default: () => [],
    },
  },
  filters: {
    shortSimilarity: function (value) {
      value = value.toString();
      return value.slice(0, 7);
    }
  },
};
</script>

<style scoped>
.list-title {
  font-size: 30px;
  font-weight: 500;
  margin-bottom: 30px;
}

.reference {
  text-align: center;
  font-weight: bold;
  margin-bottom: 20px;
}

.students-list {
  font-size: 16px;
  width: 100%;
  margin-bottom: 30px;
}

.students-list .item {
  min-height: 35px;
  padding: 10px;
}

.students-list .name {
  width: 70%;
}

.students-list .similarity,
.students-list .index {
  text-align: center;
}

.similarity {
  background-color: purple;
  color: white;
}

.lowSimilariry {
  background-color: #ba9eed;
}

th,
td {
  border: 2px solid black;
  padding: 5px;
}

table {
  border-collapse: collapse;
}
</style>
