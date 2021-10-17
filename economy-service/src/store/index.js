import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        recognizedStudents: [],
        disciplines: [],
    },
    actions: {
        async sendGroupData(ctx, { groups, photos, discipline }) {
            let formData = new FormData();

            formData.append("groupNumbers", groups);
            formData.append("discipline", discipline);

            for (let i = 0; i < photos.length; i++) {
                formData.append("studentsImages", photos[i]);
            }

            fetch(`${process.env.VUE_APP_CORS_URL}${process.env.VUE_APP_BASE_URL}check`, {
                method: "POST",
                body: formData,
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                }
            })
                .then(response => response.json())
                .then(result => {
                    ctx.commit('updateStudents', result.faceMatches);
                })
                .catch(err => {
                    if (err.response) {
                        console.error('Oh, we get an error response (5xx, 4xx)')
                    } else if (err.request) {
                        console.error('Some troubles with a network, pls check your connection')
                    } else {
                        console.error('Something went wrong, pls refresh the page')
                    }
                });
        },
        loadDisciplines(ctx) {
            fetch(`${process.env.VUE_APP_CORS_URL}${process.env.VUE_APP_BASE_URL}disciplines`)
                .then(response => response.json())
                .then(result => {
                    console.log(result);
                    ctx.commit('updateDisciplines', result);
                })
                .catch(err => {
                    if (err.response) {
                        console.error('Oh, we get an error response (5xx, 4xx)')
                    } else if (err.request) {
                        console.error('Some troubles with a network, pls check your connection')
                    } else {
                        console.error('Something went wrong, pls refresh the page')
                    }
                });
        },

    },
    mutations: {
        updateStudents(state, students) {
            state.recognizedStudents = students;
        },
        updateDisciplines(state, disciplines) {
            state.disciplines = disciplines;
        }
    }
})
