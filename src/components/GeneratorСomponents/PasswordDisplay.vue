<template>
    <div class="password_container">
        <p class="password_complexity" :style="{ color: currentComplexity.color }">
            {{ $t(currentComplexity.title) }}
        </p>
        <div class="password_display_container">
            <p v-if="showPasswordText" class="password_text">{{ generatedPassword }}</p>
            <p v-if="showCopyMessage" class="password_msg">{{ $t(passwordMsg) }}</p>
            <button
                class="copy_password_btn"
                @click="passwordCopy"
                @mouseover="playAnimation"
                @mouseleave="stopAnimation"
            >
                <Vue3Lottie
                    ref="lottieAnim"
                    class="lottie_copy_icon"
                    :animationData="copyIcon"
                    :with="30"
                    :height="30"
                    :loop="1"
                    :autoPlay="false"
                    :style="{ filter: 'invert(1)' }"
                />
            </button>
            <div
                :style="{
                    backgroundColor: currentComplexity.color,
                    width: currentComplexity.width,
                }"
                class="complexity_color_line"
            ></div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { Vue3Lottie } from "vue3-lottie";
import copyIcon from "../../animations/copy-icon.json";

const lottieAnim = ref(null);

// Новые переменные состояния для управления отображением
const showCopyMessage = ref(false);
const showPasswordText = ref(true);
const passwordMsg = ref("message.copy");

const props = defineProps({
    generatedPassword: {
        type: String,
        required: true,
    },
});

const playAnimation = () => {
    lottieAnim.value.play();
};

const stopAnimation = () => {
    lottieAnim.value.stop();
};

const passwordLength = computed(() => props.generatedPassword.length);

const passwordCopy = () => {
    const el = document.createElement("textarea");
    el.value = props.generatedPassword;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);

    showCopyMessage.value = true;
    showPasswordText.value = false;

    setTimeout(() => {
        showCopyMessage.value = false;
        showPasswordText.value = true;
    }, 2000);
};

const complexityInfo = [
    { title: "message.weak", color: "#E5405C", width: "30%" },
    { title: "message.medium", color: "#FA802E", width: "60%" },
    { title: "message.strong", color: "#82B320", width: "85%" },
    { title: "", color: "transparent", width: "0%" },
];

const currentComplexity = computed(() => {
    if (passwordLength.value >= 8 && passwordLength.value <= 11) {
        return complexityInfo[0];
    } else if (passwordLength.value >= 12 && passwordLength.value <= 19) {
        return complexityInfo[1];
    } else if (passwordLength.value >= 20 && passwordLength.value <= 32) {
        return complexityInfo[2];
    } else {
        return complexityInfo[3];
    }
});
</script>

<style lang="scss">
.password_container {
    margin-bottom: 65px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 5px;
}

.password_complexity {
    height: 24px;
    font-size: 20px;
    font-weight: 400;
    transition: color 0.3s;
}

.password_display_container {
    position: relative;
    width: 100%;
    height: 52px;

    transition: 0.2s;
    padding-left: 25px;
    border-radius: 100px;
    background: $third_black;
    box-shadow: 0px 0px 0px 1px $sixth_gray inset;

    display: flex;
    justify-content: space-between;
    align-items: center;
}

.password_text,
.password_msg {
    width: 90%;
    overflow: hidden;

    font-size: 18px;
    font-weight: 500;
    color: $primary_white;
    text-wrap: wrap;
}

.copy_password_btn {
    min-width: 50px;
    height: 100%;
    transition: 0.2s;
    border-radius: 100px;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        background: $third_gray;
    }
}

.lottie_copy_icon {
    transition: 0.2s;
}

.copy_password_btn:active .lottie_copy_icon {
    transform: scale(0.95);
}

.complexity_color_line {
    position: absolute;
    top: calc(100% - 1.5px);
    left: 25px;
    height: 2px;
    transition: 0.3s ease-in;
    border-radius: 100px;
}
</style>
