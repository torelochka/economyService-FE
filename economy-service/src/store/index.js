import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        recognizedStudents: [],
    },
    actions: {
        sendGroupData(ctx, { groups, photos }) {
            console.log("groups: ", groups);
            console.log("photos: ", photos);
        }
    }
})