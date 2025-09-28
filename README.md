# Wide Classes

<img height="85" src="img/logo.png" width="85" alt="Wide Classes Logo"/>

<h1 style="margin: 0;">
    <a target="_blank" href="https://artasov.github.io/wide-classes/">DOCS</a>
</h1>

> Библиотека утилитарных CSS классов для лучшего опыта в layout

## 🚀 Быстрый старт

### Установка
```bash
# Клонировать репозиторий
git clone https://github.com/Artasov/wide-classes.git
cd wide-classes

# Установить зависимости
npm install
```

### Сборка
```bash
# Разработка (с source maps)
npm run build

# Продакшн (минифицированный)
npm run build:min

# Следить за изменениями
npm run watch

# Очистить файлы
npm run clean
```

### Использование
```html
<link rel="stylesheet" href="wide-classes.css">
```

## 📖 Документация

- [Онлайн документация](https://artasov.github.io/wide-classes/)
- [AGENTS.md](AGENTS.md) - Архитектура проекта

## 🛠 Разработка

### Структура проекта
```
wide-classes/
├── sass/                    # SASS исходники
│   ├── _variables.sass     # Переменные
│   └── _mixins.sass        # Миксины
├── classes/                # Модули классов
│   ├── layout.sass         # Flexbox классы
│   └── transform.sass      # Transform классы
├── wide-classes.sass       # Главный файл
└── wide-classes.css        # Скомпилированный CSS
```

### Команды npm
```bash
npm install    # Установить зависимости
npm run build # Собрать CSS (expanded)
npm run build:min # Собрать CSS (minified)
npm run watch  # Следить за изменениями
npm run clean  # Очистить файлы
```

## 📄 Лицензия

MIT License