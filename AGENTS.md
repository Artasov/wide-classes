# Wide Classes

## 📁 Структура проекта

```
wide-classes/
├── sass/                    # SASS исходники
│   ├── _variables.sass     # Переменные
│   └── _mixins.sass        # Миксины
├── classes/                # Модули классов
│   ├── layout.sass         # Flexbox классы
│   └── transform.sass      # Transform классы
├── img/                    # Изображения
├── wide-classes.sass       # Главный файл
├── wide-classes.css        # Скомпилированный CSS
└── index.html             # Документация
```

## 📦 Добавление новых классов

1. **Определите тип класса** (layout, transform, etc.)
2. **Создайте переменные** если нужно
3. **Создайте миксин** для повторяющихся паттернов
4. **Добавьте класс** используя миксины
5. **Обновите документацию** в index.html

## 🚀 Процесс сборки

```bash
# Установить зависимости
npm install

# Собрать CSS (expanded)
npm run build

# Собрать CSS (minified)
npm run build:min

# Следить за изменениями
npm run watch
```

## 📝 Соглашения

- Используйте SASS синтаксис (не SCSS)
- Одинарные кавычки для строк
- Отступы в 2 пробела
- Комментарии для разделов
- Семантические имена переменных

# Layout классы

Каждый класс layout начинается с `f` а дальше следующие части подставляются как:

### `f{flexDirection}{justifyContent}{alignItems}`

### 1. flex-direction

* r → row
* c → column

### 2. justify-content

* c → center
* s → start
* e → end
* b → between
* a → around
* ev → evenly
* st → stretch
* '' → Пусто (не указывается)

### 3. align-items

* c → center
* s → start
* e → end
* b → baseline
* st → stretch
* '' → Пусто (не указывается)

Так `st` и `ev` значения могут сбивать с толку мы их выделяем в классе знаками `-`, по итогу у нас получаются вот такие
классы:
`fr` `fc` `fcsc` `frsc` `fce` `fc-st` `fr-ev-c` и т.д.

Так можно сгенерировать все возможные комбинации:

```python
done_classes = set()
for i in ('r', 'c'):
    for j in ('c', 's', 'e', 'b', 'a', 'ev', 'st', ''):
        for k in ('c', 's', 'e', 'b', 'st', ''):
            cls = f'f{i}'
            if not j:
                done_classes.add(cls)
                continue
            if j in ('ev', 'st'):
                cls += f'-{j}-'
            else:
                cls += j
            if not k:
                done_classes.add(cls.replace('--', '-').removesuffix('-'))
                continue
            if k == 'st':
                cls += f'-{k}-'
            else:
                cls += k
            done_classes.add(cls.replace('--', '-').removesuffix('-'))

print(f'Количество классов: {len(done_classes)}')
done_classes = sorted(done_classes, key=lambda x: (len(x), x))
print('Полученные классы:')
print(*done_classes, sep='\n')
```