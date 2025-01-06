<template>
    <header>
        <nav class="nav_bar">
            <button class="change_lang_btn" @click="changeLanguage">
                <svg class="globe_icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10M9.254 20.047a8 8 0 0 1-.768-1.378c-.404-.91-.722-1.985-.935-3.169h-3.3a8.53 8.53 0 0 0 5.003 4.547m.603-1.988c.336.757.718 1.324 1.103 1.69.382.364.732.501 1.04.501s.658-.137 1.04-.5c.385-.367.767-.934 1.103-1.69.321-.723.588-1.59.78-2.56H9.076c.192.97.459 1.837.78 2.56ZM8.75 12q.001 1.038.103 2h6.294q.102-.962.103-2-.001-1.038-.103-2H8.853q-.102.962-.103 2m-1.405-2H3.737a8.5 8.5 0 0 0-.237 2c0 .689.082 1.359.237 2h3.608a21 21 0 0 1 0-4m1.732-1.5h5.845c-.19-.97-.458-1.837-.779-2.56-.336-.756-.718-1.323-1.103-1.69-.382-.363-.732-.5-1.04-.5s-.658.137-1.04.5c-.385.367-.767.934-1.103 1.69-.321.723-.588 1.59-.78 2.56m7.577 1.5a20.7 20.7 0 0 1 0 4h3.61a8.5 8.5 0 0 0 .236-2 8.5 8.5 0 0 0-.237-2zm3.094-1.5a8.53 8.53 0 0 0-5.002-4.547c.287.408.543.873.768 1.378.404.91.722 1.985.935 3.169h3.3Zm-12.197 0c.213-1.184.531-2.26.935-3.169.225-.505.48-.97.768-1.378A8.53 8.53 0 0 0 4.252 8.5zm7.963 10.169c-.225.505-.48.97-.768 1.378a8.53 8.53 0 0 0 5.002-4.547h-3.3c-.212 1.184-.53 2.26-.934 3.169"
                    ></path>
                </svg>
                {{ currentLocale }}
            </button>
        </nav>
    </header>
</template>

<script setup>
import { ref, onMounted } from "vue";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

import { useI18n } from "vue-i18n";

const { locale } = useI18n();

const currentLocale = ref(locale.value);

const changeLanguage = () => {
    const newLocale = currentLocale.value === "En" ? "Ru" : "En";
    locale.value = newLocale;
    currentLocale.value = newLocale;
};

onMounted(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".change_lang_btn, .globe_icon", {
        color: "#fff",
        fill: "#fff",
        scrollTrigger: {
            trigger: "body",
            start: "top top%",
            end: "bottom 1%",
            scrub: true,
            pinSpacing: true,
        },
    });
});
</script>

<style lang="scss">
header {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 999;
    padding: 0px 20px;

    display: flex;
    justify-content: center;
    align-items: center;
}

.nav_bar {
    width: 600px;
    padding: 20px 0px;
    display: flex;
    justify-content: flex-end;
}

.change_lang_btn {
    min-width: 79px;
    transition: 0.2s;
    border-radius: 100px;
    padding: 6px 16px 6px 10px;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 5px;

    font-size: 20px;
    font-weight: 500;
    color: $primary_black;

    &:hover {
        opacity: 0.8;
    }

    &:active {
        transform: scale(0.96);
    }
}

.globe_icon {
    width: 24px;
    height: 24px;
    transition: 0.2s;
    fill: $primary_black;
}
</style>
