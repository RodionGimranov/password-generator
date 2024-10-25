<template>
    <div class="option_container" v-for="(option, index) in passwordOption" :key="index">
        <p class="option_title">{{ $t(option.title) }}</p>
        <button
            class="include_option_btn"
            :class="{ __active: option.isActive, __disabled: option.isDisabled }"
            :disabled="option.isDisabled"
            @click="toggleOption(option)"
        >
            <span class="toogleSwitch"></span>
        </button>
    </div>
</template>

<script setup>
import { reactive, watch } from "vue";

const emit = defineEmits([
    "includeUppercases",
    "excludeUppercases",
    "includeLowercases",
    "excludeLowercases",
    "includeNumbers",
    "excludeNumbers",
    "includeSymbols",
    "excludeSymbols",
]);

const passwordOption = reactive([
    {
        title: "message.uppercases",
        isActive: true,
        isDisabled: false,
        includeEvent: "includeUppercases",
        excludeEvent: "excludeUppercases",
    },
    {
        title: "message.lowercases",
        isActive: true,
        isDisabled: false,
        includeEvent: "includeLowercases",
        excludeEvent: "excludeLowercases",
    },
    {
        title: "message.numbers",
        isActive: true,
        isDisabled: false,
        includeEvent: "includeNumbers",
        excludeEvent: "excludeNumbers",
    },
    {
        title: "message.symbols",
        isActive: true,
        isDisabled: false,
        includeEvent: "includeSymbols",
        excludeEvent: "excludeSymbols",
    },
]);

function countActiveOptions() {
    return passwordOption.filter((option) => option.isActive).length;
}

function updateButtonStates() {
    const activeCount = countActiveOptions();
    passwordOption.forEach((option) => {
        option.isDisabled = activeCount === 1 && option.isActive;
    });
}

function toggleOption(option) {
    option.isActive = !option.isActive;
    updateButtonStates();

    const eventToEmit = option.isActive ? option.includeEvent : option.excludeEvent;
    emit(eventToEmit);
}

watch(passwordOption, updateButtonStates, { deep: true });
</script>

<style lang="scss">
.option_container {
    width: 100%;
    margin-bottom: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid $fourth_gray;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}

.option_title {
    font-size: 18px;
    font-weight: 500;
    color: $primary_white;
}

.include_option_btn {
    width: 40px;
    height: 24px;
    padding: 2px;
    transition: 0.2s;
    border-radius: 100px;
    background: $eighth_gray;
    display: flex;
    align-items: center;

    &.__active {
        background: $primary_blue;
    }

    &.__disabled {
        opacity: 0.5;
        cursor: default;
        background: $eighth_gray;
    }
}

.toogleSwitch {
    width: 18px;
    height: 18px;
    display: block;
    transition: 0.2s;
    border-radius: 100px;
    background: $primary_white;
    transform: translate3d(1px, 0px, 0px);
    box-shadow: 0px 2px 4px $sixth_black;
}

.include_option_btn.__active .toogleSwitch {
    transform: translate3d(17px, 0px, 0px);
}
</style>
