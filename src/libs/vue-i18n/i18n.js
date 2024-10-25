import { createI18n } from "vue-i18n";

const i18n = createI18n({
    locale: "En",
    fallbackLocale: "En",
    messages: {
        En: {
            message: {
                passwordGenerator: "Password Generator",
                generateSecurePassword: "Create a strong and secure password",
                author: "Author",
                aboutPasswordBtn: "About password",
                weak: "Weak",
                medium: "Medium",
                strong: "Strong",
                copy: "Password copied!",
                uppercases: "Uppercases (A-Z)",
                lowercases: "Lowercases (a-z)",
                numbers: "Numbers (0-9)",
                symbols: "Symbols",
                length: "Length",
                generate: "Generate",
            },
        },
        Ru: {
            message: {
                passwordGenerator: "Генератор Паролей",
                generateSecurePassword: "Создайте надежный и безопасный пароль",
                author: "Автор",
                aboutPasswordBtn: "О пароле",
                weak: "Слабый",
                medium: "Средний",
                strong: "Надежный",
                copy: "Пароль скопирован!",
                uppercases: "Прописные (A-Z)",
                lowercases: "Строчные (a-z)",
                numbers: "Цифры (0-9)",
                symbols: "Символы",
                length: "Длина",
                generate: "Создать",
            },
        },
    },
});

export default i18n;
