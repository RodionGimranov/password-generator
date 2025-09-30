<template>
    <div class="password_length_container">
        <p class="option_title">{{ $t("message.length") }}</p>
        <input
            type="range"
            class="slider_length"
            min="8"
            max="32"
            step="1"
            v-model="slider_value"
            @input="passwordLength"
        />
        <p class="password_length">{{ slider_value }}</p>
    </div>
</template>

<script setup>
import { ref } from "vue";

const slider_value = ref(8);

const emit = defineEmits(["password-length"]);

const passwordLength = () => {
    emit("password-length", slider_value.value);
};
</script>

<style lang="scss">
.password_length_container {
    width: 100%;
    margin: 30px 0 50px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
}

.option_title,
.password_length {
    font-size: 18px;
    font-weight: 400;
    color: $primary_white;
}

.slider_length {
    width: 100%;
    height: 4px;

    cursor: pointer;
    background: $fourth_gray;

    &::-webkit-slider-thumb {
        width: 14px;
        height: 14px;

        border-radius: 100px;
        background: $primary_white;
        transition: 0.15s ease-in-out;

        &:hover {
            transform: scale(1.2);
        }
    }
}

.password_length {
    min-width: 21px;
    text-align: left;
}
</style>
