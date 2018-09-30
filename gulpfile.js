/*jshint globalstrict: true*/
/*global require*/

'use strict'

const gulp = require('gulp')
const typescript = require('gulp-typescript')
const linenum = require('gulp-linenum')
const jdists = require('gulp-jdists')
const replace = require('gulp-replace')
const examplejs = require('gulp-examplejs')
const rename = require('gulp-rename')
const merge2 = require('merge2')
const packageInfo = require('./package')

function build() {
  const tsResult = gulp
    .src('./src/*.ts')
    .pipe(
      linenum({
        prefix: packageInfo.name + '/src/index.ts:',
      })
    )
    .pipe(jdists())
    .pipe(gulp.dest('./lib'))
    .pipe(
      typescript({
        moduleResolution: 'node',
        module: 'commonjs',
        target: 'es2015',
        declaration: true,
      })
    )

  return merge2([
    tsResult.dts.pipe(gulp.dest('./lib')),
    tsResult.js
      .pipe(
        replace(
          /^(\s*)var extendStatics/m,
          '\n$1/* istanbul ignore next */\n$&'
        )
      )
      .pipe(gulp.dest('./lib')),
  ])
}

function example() {
  return gulp
    .src(`src/index.ts`)
    .pipe(
      jdists({
        trigger: 'example',
      })
    )
    .pipe(
      examplejs({
        header: `
const mikecrm = require('../')
const request = require('request')
require('./mock/')
      `,
      })
    )
    .pipe(
      rename({
        extname: '.js',
      })
    )
    .pipe(gulp.dest('test'))
}

gulp.task('dist', gulp.series(build, example))
