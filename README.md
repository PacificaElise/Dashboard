# dashboard

## Структура проекта:
* В названии файлов **scss** которые не **main.scss** нужно ставить нижнее подчеркивание: **_base.scss**
* Шрифты подключать не нужно. Они уже подключены.

 ```
├── src
|   ├── html
|   |   ├── index.html
|   |   └── todo.html
|   └── js
|   |   ├── services
|   |   |   └── api
|   |   |       └── index.html
|   └── scss
|       ├── base
|       |   ├── _base.scss
|       |   ├── _fonts.scss
|       |   ├── _mixins.scss
|       |   ├── _reset.scss
|       |   └── _vars.scss
|       ├── blocks
|       └── main.scss
├── .gitignore
├── package.json
├── package-lock.json
└── index.js
 ```
