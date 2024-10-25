<template>
    <section class="generator_container">
        <div class="generator_content">
            <PasswordDisplay :generatedPassword="generatedPassword" />
            <PasswordOptions
                @includeUppercases="toggleOption('uppercases', true)"
                @excludeUppercases="toggleOption('uppercases', false)"
                @includeLowercases="toggleOption('lowercases', true)"
                @excludeLowercases="toggleOption('lowercases', false)"
                @includeNumbers="toggleOption('numbers', true)"
                @excludeNumbers="toggleOption('numbers', false)"
                @includeSymbols="toggleOption('symbols', true)"
                @excludeSymbols="toggleOption('symbols', false)"
            />
            <PasswordLength @password-length="updatePasswordLength" />
            <GenerateBtn @generetePassword="generatePassword" />
        </div>
    </section>
</template>   

<script setup>
import { ref, onMounted } from "vue";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

import PasswordDisplay from "./PasswordDisplay.vue";
import PasswordOptions from "./PasswordOptions.vue";
import PasswordLength from "./PasswordLength.vue";
import GenerateBtn from "./GenerateBtn.vue";

const uppercasesArray = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", 
    "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", 
    "U", "V", "W", "X", "Y", "Z"
];

const lowercasesArray = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", 
    "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", 
    "u", "v", "w", "x", "y", "z"
];

const numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const symbolsArray = ["!", "@", "#", "$", "%", "^", "&", "*", "-", "+"];

const selectedOptions = ref({
    uppercases: true,
    lowercases: true,
    numbers: true,
    symbols: true,
});

const selectedCharacters = ref([
    ...uppercasesArray,
    ...lowercasesArray,
    ...numbersArray,
    ...symbolsArray,
]);

const passwordLength = ref(8);
const generatedPassword = ref("");

function updateSelectedCharacters() {
    selectedCharacters.value = [];

    if (selectedOptions.value.uppercases) {
        selectedCharacters.value.push(...uppercasesArray);
    }
    if (selectedOptions.value.lowercases) {
        selectedCharacters.value.push(...lowercasesArray);
    }
    if (selectedOptions.value.numbers) {
        selectedCharacters.value.push(...numbersArray);
    }
    if (selectedOptions.value.symbols) {
        selectedCharacters.value.push(...symbolsArray);
    }
}

const toggleOption = (option, isActive) => {
    selectedOptions.value[option] = isActive;
    updateSelectedCharacters();
};

const generatePassword = () => {
    let password = "";
    for (let i = 0; i < passwordLength.value; i++) {
        const randomIndex = Math.floor(Math.random() * selectedCharacters.value.length);
        password += selectedCharacters.value[randomIndex];
    }
    generatedPassword.value = password;
};

const updatePasswordLength = (newLength) => {
    passwordLength.value = newLength;
};

onMounted(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".generator_container", {
        borderRadius: "0px",
        scrollTrigger: {
            trigger: ".generator_container",
            start: "top 5%",
            end: "50% 50%",
            scrub: true,
            pinSpacing: true,
        },
    });
});
</script>

<style lang="scss">
.generator_container {
    position: relative;
    width: 100vw;
    height: 100vh;

    z-index: 99;
    padding: 0px 20px;
    background: $primary_black;
    border-radius: 40px 40px 0px 0px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.generator_content {
    width: 500px;
}
</style>
