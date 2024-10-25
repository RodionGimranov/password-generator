<template>
    <Header />
    <Intro />
    <PasswordGenerator />
</template>

<script setup>
import Header from "./components/Header.vue";
import Intro from "./components/Intro.vue";
import PasswordGenerator from "./components/GeneratorСomponents/PasswordGenerator.vue";
</script>

<style lang="scss">
body {
    width: 100vw;
    height: 100vh;

    overflow-x: hidden;
    overflow-y: scroll;
    background: $primary_black;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    font-size: 16px;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    color: $primary_white;
}
</style>
