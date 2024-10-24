<template>
    <button class="generate_password_btn" @click="generetePassword">
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clip-path="url(#clip0_181_16)">
                <path
                    class="large_sparkle_icon"
                    d="M14.187 8.096L15 5.25L15.813 8.096C16.2402 9.59055 17.4085 10.7588 18.903 11.186L21.75 12L18.904 12.813C17.4095 13.2402 16.2412 14.4085 15.814 15.903L15 18.75L14.187 15.904C13.7598 14.4095 12.5915 13.2412 11.097 12.814L8.25 12L11.096 11.187C12.5905 10.7598 13.7588 9.59155 14.186 8.097L14.187 8.096Z"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    class="medium_sparkle_icon"
                    d="M6 14.25L5.741 15.285C5.43875 16.4944 4.49442 17.4387 3.285 17.741L2.25 18L3.285 18.259C4.49442 18.5613 5.43875 19.5056 5.741 20.715L6 21.75L6.259 20.715C6.56108 19.5058 7.50496 18.5616 8.714 18.259L9.75 18L8.714 17.741C7.50496 17.4384 6.56108 16.4942 6.259 15.285L6 14.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    class="small_sparkle_icon"
                    d="M6.5 4L6.303 4.591C6.19105 4.92723 5.92723 5.19105 5.591 5.303L5 5.5L5.591 5.697C5.92723 5.80895 6.19105 6.07277 6.303 6.409L6.5 7L6.697 6.409C6.80895 6.07277 7.07277 5.80895 7.409 5.697L8 5.5L7.409 5.303C7.07277 5.19105 6.80895 4.92723 6.697 4.591L6.5 4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </g>
            <defs>
                <clipPath id="clip0_181_16">
                    <rect width="24" height="24" fill="none" />
                </clipPath>
            </defs>
        </svg>
        {{ $t("message.generate") }}
    </button>
</template>

<script setup>
const emit = defineEmits(["generetePassword"]);

const generetePassword = () => {
    emit("generetePassword");
};
</script>

<style lang="scss">
.generate_password_btn {
    width: 100%;
    padding: 8px;
    transition: 0.2s;
    user-select: none;
    border-radius: 100px;
    background: $third_black;
    box-shadow: 0px 0px 0px 1px $sixth_gray inset;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    font-size: 20px;
    font-weight: 500;
    color: $primary_gray;

    &:hover {
        background: $fourth_black;
        color: $primary_white;
    }

    &:active {
        transform: scale(0.98);
    }
}

.large_sparkle_icon {
    fill: $primary_gray;
    stroke: $primary_gray;
    transition: 0.2s;
}

.medium_sparkle_icon {
    fill: $seventh_black;
    stroke: $seventh_black;
    transition: 0.2s;
}

.small_sparkle_icon {
    fill: $seventh_gray;
    stroke: $seventh_gray;
    transition: 0.2s;
}

.generate_password_btn:hover .large_sparkle_icon,
.generate_password_btn:hover .medium_sparkle_icon,
.generate_password_btn:hover .small_sparkle_icon {
    fill: $primary_white;
    stroke: $primary_white;
}
</style>
