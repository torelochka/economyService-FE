<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
#app {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

@font-face {
  font-family: "Consolas";
  src: url("../public/fonts/Consolas.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}

* {
  font-family: Consolas, sans-serif;
  margin: 0;
  padding: 0;
}
</style>
