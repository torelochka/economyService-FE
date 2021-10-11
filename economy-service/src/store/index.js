import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        recognizedStudents: [],
    },
    actions: {
        async sendGroupData(ctx, { groups, photos }) {
            let formData = new FormData();

            formData.append("groupNumbers", [groups]);
            formData.append("studentsImages", photos);
            console.log(process.env.VUE_APP_CORS_URL);

            let response = await fetch(`${process.env.VUE_APP_BASE_URL}check`, {
                method: "POST",
                mode: "no-cors",
                body: formData,
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "*/*",
                }
            });
            let result = await response;

            console.log(result);
        }
    }
})