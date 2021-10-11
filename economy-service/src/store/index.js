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

            formData.append("groupNumbers", groups);
            formData.append("studentsImages", photos);
            console.log(groups);
            console.log(photos);

            let response = await fetch(`${process.env.VUE_APP_CORS_URL}${process.env.VUE_APP_BASE_URL}check`, {
                method: "POST",
                body: formData,
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                }
            });
            let result = await response;

            console.log(result);
        }
    }
})