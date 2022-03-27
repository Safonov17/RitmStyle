const gulp = require("gulp");
const less = require("gulp-less");
const sass = require("gulp-sass")(require("sass"));
const rename = require("gulp-rename");
const cleanCSS = require("gulp-clean-css");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");
const concat = require("gulp-concat");
const sourcemaps = require("gulp-sourcemaps");
const autoprefixer = require("gulp-autoprefixer");
const imagemin = require("gulp-imagemin");
const htmlmin = require("gulp-htmlmin");
const size = require("gulp-size");
const newer = require("gulp-newer");
const browsersync = require("browser-sync").create();
const del = require("del");

// Пути к начальным файлам и файлам назначения
const paths = {
  html: {
    src: "src/*.html",
    dest: "dist",
  },
  styles: {
    src: ["src/styles/**/*.sass", "src/styles/**/*.scss", "src/styles/**/*.less"],
    dest: "dist/css/",
  },
  scripts: {
    src: "src/scripts/**/*.js",
    dest: "dist/js/",
  },
  images: {
    src: "src/img/**",
    dest: "dist/img",
  },
};

// функция, удаляющая папку dist
function clean() {
  return del(['dist/*', '!dist/img']);
}

// Сжатие html
function html() {
  return gulp
    .src(paths.html.src)
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(size())
    .pipe(gulp.dest(paths.html.dest))
    .pipe(browsersync.stream())
}

// Обработка стилей
function styles() {
  return (
    gulp
      .src(paths.styles.src)
      .pipe(sourcemaps.init())
      // Компиляция less файлов
      // .pipe(less())
      .pipe(sass().on("error", sass.logError))
      .pipe(
        autoprefixer({
          cascade: false,
        })
      )
      // Минификация и оптимизация less файлов
      .pipe(
        cleanCSS({
          level: 2,
        })
      )
      // Переименовываем файлы
      .pipe(
        rename({
          basename: "main",
          suffix: ".min",
        })
      )
      .pipe(sourcemaps.write("."))
      .pipe(size())
      .pipe(gulp.dest(paths.styles.dest))
      .pipe(browsersync.stream())
  );
}

// Обработка скрипта
function scripts() {
  return (
    gulp
      .src(paths.scripts.src)
      .pipe(sourcemaps.init())
      // Преобразование кода в старый формат
      .pipe(
        babel({
          presets: ["@babel/env"],
        })
      )
      // Сжатие и оптимизация JS кода
      .pipe(uglify())
      // Объединение файлов скрипта в один, под названием main.min.js
      .pipe(concat("main.min.js"))
      .pipe(sourcemaps.write("."))
      .pipe(size())
      .pipe(gulp.dest(paths.scripts.dest))
      .pipe(browsersync.stream())
  );
}

// Сжатие изображений
function img() {
  return gulp
    .src(paths.images.src)
    .pipe(newer(paths.images.dest))
    .pipe(
      imagemin({
        progressive: true,
      })
    )
    .pipe(size())
    .pipe(gulp.dest(paths.images.dest));
}

// Отслеживание изменений
function watch() {
  browsersync.init({
    server: {
      baseDir: "./dist",
    },
  });
  gulp.watch(paths.html.dest).on("change", browsersync.reload);
  gulp.watch(paths.html.src, html);
  gulp.watch(paths.styles.src, styles);
  gulp.watch(paths.scripts.src, scripts);
  gulp.watch(paths.images.src, img);
}

// Объединяем все предыдущие операции в одну последовательную операцию. Используем внутри последовательной операции параллельную операцию для обработки файлов стилей и скриптов
const build = gulp.series(clean, html, gulp.parallel(styles, scripts, img), watch);

// Экспортируем команды, чтобы использовать их в gulp
exports.clean = clean;
exports.img = img;
exports.html = html;
exports.styles = styles;
exports.scripts = scripts;
exports.watch = watch;
exports.build = build;
exports.default = build;
