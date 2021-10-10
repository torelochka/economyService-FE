<template>
    <div class="nav-wrapper">
        <Tab
           @tab-change="handleTabChange"
           v-for="tab in tabs"
           :key="tab.name"
           :name="tab.name"
           :route="tab.route"
           :is-active="tab.name === activeTab"
        />
    </div>
</template>

<script>
    import Tab from "../atoms/Tab";
    export default {
        name: "Navigation",
        data() {
            return {
                activeTab: this.activeTabInit || "",
                tabs: [
                    {name: "Groups", route: '/add-group'},
                    {name: "Mates", route: '/add-m8'},
                ]
            }
        },
        components: {
            Tab,
        },
        props: {
            activeTabInit: {
                type: String,
            }
        },
        methods: {
            handleTabChange({ name, route }) {
                this.activeTab = name;
                if (this.$route.path !== route) {
                    this.$router.push(route)
                }
            }
        }
    }
</script>

<style scoped>
.nav-wrapper {
    width: 100%;
    min-height: 7vh;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: #E2E2E2;

    position: fixed;
    z-index: 10;
    bottom: 0;
}
    
@media (min-width: 1000px) {
    .nav-wrapper {
        width: 300px;
        left: calc(50% - 150px);
    }
}
</style>