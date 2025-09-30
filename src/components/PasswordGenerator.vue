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
import { ref } from "vue";

import PasswordDisplay from "./PasswordDisplay.vue";
import PasswordOptions from "./PasswordOptions.vue";
import PasswordLength from "./PasswordLength.vue";
import GenerateBtn from "./GenerateBtn.vue";

import chars from "../data/characters.json";

const uppercasesArray = chars.uppercases;
const lowercasesArray = chars.lowercases;
const numbersArray = chars.numbers;
const symbolsArray = chars.symbols;

const selectedOptions = ref({
    uppercases: true,
    lowercases: true,
    numbers: true,
    symbols: true,
});

const selectedCharacters = ref([]);

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

updateSelectedCharacters();

function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
    }
    return arr;
}

const toggleOption = (option, isActive) => {
    selectedOptions.value[option] = isActive;
    updateSelectedCharacters();
};

const generatePassword = () => {
    if (!selectedCharacters.value.length) {
        generatedPassword.value = "";
        console.warn("No character sets selected for password generation.");
        return;
    }

    const requiredGroups = [];
    if (selectedOptions.value.uppercases) requiredGroups.push(uppercasesArray);
    if (selectedOptions.value.lowercases) requiredGroups.push(lowercasesArray);
    if (selectedOptions.value.numbers) requiredGroups.push(numbersArray);
    if (selectedOptions.value.symbols) requiredGroups.push(symbolsArray);

    const guaranteedChars = [];
    requiredGroups.forEach((group) => {
        if (group && group.length) {
            const rand = Math.floor(Math.random() * group.length);
            guaranteedChars.push(group[rand]);
        }
    });

    const finalLength = Math.max(passwordLength.value, guaranteedChars.length);
    const remaining = finalLength - guaranteedChars.length;

    const passwordChars = [...guaranteedChars];

    for (let i = 0; i < remaining; i++) {
        const idx = Math.floor(Math.random() * selectedCharacters.value.length);
        passwordChars.push(selectedCharacters.value[idx]);
    }

    shuffleArray(passwordChars);

    generatedPassword.value = passwordChars.join("");
};

const updatePasswordLength = (newLength) => {
    passwordLength.value = newLength;
};
</script>

<style lang="scss">
.generator_container {
    position: relative;
    width: 100vw;
    height: 100vh;

    z-index: 99;
    padding: 0 20px;
    background: $primary_black;
    border-radius: 40px 40px 0 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.generator_content {
    width: 500px;
}
</style>
