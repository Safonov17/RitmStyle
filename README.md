# Сборка проекта на Gulp 4

## Функционал сборки
- минификация HTML
- компиляция препроцессоров LESS, SASS
- минификация CSS
- автоматическое добавление префиксов CSS
- преобразования кода ECMAScript 2015 + в обратно совместимую версию JavaScript с помощью Babel
- минификация JavaScript
- объединение нескольких файлов JavaScript в один
- сжатие изображений
- отслеживание новых изображений, которые еще не были сжаты
- отслеживание изменений в файлах и автоматический запуск повторной обработки
- генерация sourcemaps
- отображение размеров файлов в терминале
- локальный сервер с автоматическим обновлением страницы при изменении файлов

## Input
|| HTML | Styles | Scripts | Images |
|:---|:------:|:-----:|:----:|:-----:|
| **Каталог** | src/ | src/styles/ | src/scripts/ | src/img/ |
| **Расширение** | .html, .pug | .css, .sass, .scss, .less, .styl | .js, .ts, .coffee | .jpg, .png, .gif |

## Output
|| HTML | CSS | JavaScript | Images |
|:---|:------:|:-----:|:----:|:-----:|
| **Путь** | dist/ | dist/css/style.min.css | dist/js/main.min.js | dist/img/ |

## Зупуск:  
1. Скачать все файлы проекта  
2. В терминале перейти в каталог проекта  
3. Выполнить команду: npm i (должен быть установлен node.js)  
4. Создать каталоги и файлы
5. Выполнить команду: gulp (запуск таска default)  
6. Писать свой код и наслаждаться автоматической сборкой проекта. 

## Используемые NPM пакеты
[gulp](https://www.npmjs.com/package/gulp) Сборщик Gulp  
[gulp-htmlmin](https://www.npmjs.com/package/gulp-htmlmin) Минификация HTML файлов  
[gulp-pug](https://www.npmjs.com/package/gulp-pug) Pug препроцессор HTML кода  
[gulp-less](https://www.npmjs.com/package/gulp-less) Компиляция Less файлов   
[gulp-stylus](https://www.npmjs.com/package/gulp-stylus) Компиляция Styl файлов  
[sass](https://www.npmjs.com/package/sass) Компилятор Sass  
[gulp-sass](https://www.npmjs.com/package/gulp-sass) Компиляция Sass и Scss файлов  
[gulp-uglify](https://www.npmjs.com/package/gulp-uglify) Сжатие и оптимизация Java Script кода  
[gulp-coffee](https://www.npmjs.com/package/gulp-coffee) Преобразует Coffee Script в Java Script  
[gulp-typescript](https://www.npmjs.com/package/gulp-typescript) Преобразует Type Script в Java Script  
[typescript](https://www.npmjs.com/package/typescript) Язык Type Script  
[gulp-babel](https://www.npmjs.com/package/gulp-babel) Преобразует Java Script в старый стандарт  
[@babel/core](https://www.npmjs.com/package/@babel/core) Ядро Babel  
[@babel/preset-env](https://www.npmjs.com/package/@babel/preset-env) Пресет для компиляции Babel  
[gulp-clean-css](https://www.npmjs.com/package/gulp-clean-css) Минификация и оптимизация CSS файлов   
[del](https://www.npmjs.com/package/del) Удаление каталогов и файлов  
[gulp-sourcemaps](https://www.npmjs.com/package/gulp-sourcemaps) Карта строк кода для инструментов  разработчика   
[gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer) Автоматическое добавление префиксов в CSS   
[gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin) Сжатие изображений   
[gulp-concat](https://www.npmjs.com/package/gulp-concat) Объединение нескольких файлов в один  
[gulp-newer](https://www.npmjs.com/package/gulp-newer) Отслеживание только новых файлов  
[gulp-rename](https://www.npmjs.com/package/gulp-rename) Переименовывает файлы    
[gulp-size](https://www.npmjs.com/package/gulp-size) Отображение информации о размерах файлов в терминале  
[browser-sync](https://browsersync.io/docs/gulp) Автоматическое обновление сайта при изменении файлов  
