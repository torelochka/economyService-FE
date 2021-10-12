<template>
    <Container :width="300">
        <h1 class="list-title">list of students:</h1>
        <p class="reference">№/name/similarity</p>
        <table class="students-list">
            <tr v-for="({ similarity, student }, index) in mockedStudents" :key="index" class="item">
                <td class="index">{{ index }}</td>
                <td class="name">{{ student.firstname }} {{ student.lastname }}</td>
                <td class="similarity">{{ similarity }}%</td>
            </tr>
        </table>
    </Container>
</template>

<script>
    import Container from "../components/shared/atoms/Container";
    export default {
        components: {
            Container,
        },
        name: "StudentsList",
        data() {
            return {
                mockedStudents: [
                    { name: "Sample Example", similarity: 77 },
                    { name: "Sample Example", similarity: 77 },
                    { name: "Sample Example", similarity: 77 },
                    { name: "Sample Example", similarity: 77 },
                    { name: "Sample Example", similarity: 77 },
                    { name: "Sample Example", similarity: 77 },
                    { name: "Sample Example", similarity: 77 },
                    { name: "Sample Example", similarity: 77 },
                    { name: "Sample Example", similarity: 77 },
                    { name: "Sample Example", similarity: 77 },
                    { name: "Sample Example", similarity: 77 },
                    { name: "Sample Example", similarity: 77 },
                ]
            }
        }
    }
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
    font-size: 20px;
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

.students-list .similarity, .students-list .index {
    text-align: center;
}

th, td {
    border: 3px solid black;
    padding: 5px;
}

table {
    border-collapse: collapse;
}
</style>