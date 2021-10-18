<template>
    <div>
        <Container :width="300">
            <div v-if="isLoading">
                <div class="loader">
                    <PulseLoader :loading="true" color="#81007f"/>
                    <p>Saving <br> discipline...</p>
                </div>
            </div>
            <div class="discipline-wrapper" v-else>
                <h1 class="add-group-title">add new discipline:</h1>
                <p>type a name of the dicipline you teach:</p>
                <input class="input" id="discipline" name="discipline" placeholder="discipline name" v-model="discipline"/>
                <Button :is-disabled="discipline.trim().length === 0" :on-click="submit">submit</Button>
            </div>
        </Container>
        <Navigation active-tab-init="Subject"/>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    import Container from "../components/shared/atoms/Container";
    import Navigation from "../components/shared/molucules/Navigation";
    import Button from "../components/shared/atoms/Button";
    import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

    export default {
        name: "AddDiscipline",
        components: {
            Container,
            Navigation,
            Button,
            PulseLoader
        },
        data() {
            return {
                discipline: '',
                isLoading: false,
            }
        },
        methods: {
            ...mapActions(['sendDiscipline']),
            async submit() {
                this.isLoading = true;
                await this.sendDiscipline({ discipline: this.discipline, flag: this.isLoading });
                this.isLoading = false;
                this.discipline = '';
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

.discipline-wrapper {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.input {
    border: 4px solid black;
    height: 20px;
    padding: 5px;
    font-size: 18px;
    color: black;
}

.input::placeholder {
    font-size: 18px;
    color: #5a5a5a;
}

.input:focus {
    outline-offset: 5px;
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
</style>