<template>
    <section class="intro_text_container">
        <div class="title_container">
            <p class="project_title">{{ $t("message.passwordGenerator") }}</p>
            <p class="project_subtitle">{{ $t("message.generateSecurePassword") }}</p>
        </div>
        <div class="link_container">
            <a
                href="https://rodiongimranov.github.io/personal-site/#/Home"
                class="author_link"
                target="_blank"
                >{{ $t("message.author") }}</a
            >
            <div class="about_password_btn">
                {{ $t("message.aboutPasswordBtn") }}
                <span class="arrow_container">
                    <img :src="arrow_icon" alt="Arrow icon" />
                </span>
            </div>
        </div>
    </section>
</template>

<script setup>
import { onMounted } from "vue";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

import arrow_icon from "../assets/images/svg/arrow-icon.svg";

onMounted(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".intro_text_container", {
        backgroundColor: "#111111",
        scrollTrigger: {
            trigger: ".intro_text_container",
            start: "80% 10%",
            scrub: true,
            pinSpacing: true,
        },
    });
});
</script>

<style lang="scss">
.intro_text_container {
    position: sticky;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100vh;
    padding: 0px 20px;
    background: $primary_white;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
}

.title_container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
}

.project_title {
    font-size: 56px;
    font-weight: 700;
    color: $primary_black;
    text-align: center;
}

.project_subtitle {
    font-size: 24px;
    font-weight: 400;
    color: $primary_gray;
    text-align: center;
}

.link_container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
}

.author_link {
    transition: 0.2s;
    padding: 7.5px 16px;
    border-radius: 100px;
    background: $primary_black;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 18px;
    font-weight: 500;
    color: $primary_white;

    &:hover {
        background: $second_black;
    }
}

.about_password_btn {
    transition: 0.2s;
    border-radius: 100px;
    padding: 6px 10px 6px 16px;
    box-shadow: 0px 0px 0px 1px $second_white inset;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    font-size: 18px;
    font-weight: 500;
    color: $primary_black;

    &:hover {
        background: $second_gray;
    }

    .arrow_container {
        width: 24px;
        height: 24px;
        border-radius: 100px;
        background: $second_gray;

        display: flex;
        justify-content: center;
        align-items: center;
    }
}

.author_link:active,
.abour_password_btn:active {
    transform: scale(0.98);
}
</style>
