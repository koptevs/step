import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

// Путь к исходному файлу
const inputFile = path.join(__dirname, 'messages.json');
const outputDir = path.join(__dirname);

// Создаем директорию, если ее нет
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
}

// Поддерживаемые языки
const languages = ['en', 'ru', 'lv']; // Можете изменить или определить динамически

// / Функция для глубокого копирования объекта с фильтрацией по языку
function filterTranslations(obj, lang) {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }

    // Если объект содержит переводы (есть ключи языков)
    if (obj[lang] !== undefined) {
        return obj[lang];
    }

    // Рекурсивно обрабатываем вложенные объекты
    const result = {};

    for (const key in obj) {
        result[key] = filterTranslations(obj[key], lang);
    }
    return result;
}

// Основная функция
function splitTranslationsByLanguage(inputFile, outputDir, languages) {
    // Читаем исходный файл
    const rawData = fs.readFileSync(inputFile, 'utf8');
    const translations = JSON.parse(rawData);

    // Создаем директорию, если ее нет
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    // Для каждого языка создаем отдельный файл
    languages.forEach((lang) => {
        const langTranslations = filterTranslations(translations, lang);
        const outputFile = path.join(outputDir, `${lang}.json`);

        fs.writeFileSync(
            outputFile,
            JSON.stringify(langTranslations, null, 4),
            'utf8',
        );

        console.log(`Файл для языка ${lang} создан: ${outputFile}`);
    });

    console.log('Все файлы успешно созданы!');
}

// Использование
splitTranslationsByLanguage(inputFile, outputDir, languages);
