<template>
    <div>
        <Container :width="300">
            <h1 class="add-group-title">google form for students:</h1>
            <p>here u can find a google form which u can share between ur students:</p>
            <div class="link-block">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdUaz2ORkyPe3jXQ7hdrE3UxGTNV4QDHNduDPiVIAieSlXQuQ/viewform" class="link" target="_blank">Google Form</a>
                <input class="input" ref="formLink" value="https://docs.google.com/forms/d/e/1FAIpQLSdUaz2ORkyPe3jXQ7hdrE3UxGTNV4QDHNduDPiVIAieSlXQuQ/viewform">
                <button @click="copyLink" class="copy-button">copy link</button>
            </div>
        </Container>
        <Navigation active-tab-init="Mates" />
    </div>
</template>

<script>
    import Container from "../components/shared/atoms/Container";
    import Navigation from "../components/shared/molucules/Navigation";

    export default {
        name: "AddM8",
        components: {
            Container,
            Navigation,
        },
        methods: {
            handleChangeOption(value) {
                this.group = value;
            },
            copyLink() {
                let url = this.$refs.formLink;
                url.setAttribute('type', 'text');
                url.select();
                document.execCommand("copy");
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

    .link {
        font-size: 25px;
        font-weight: bold;
        margin-top: 40px;
    }

    .copy-button {
        padding: 10px;
        margin-top: 10px;
        box-sizing: content-box;
        height: 60px;
        width: 80px;
        font-size: 25px;
    }

    .link-block {
        margin-top: 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .input {
        opacity: 0;
    }
</style>