# Bumpels

Home of the Bumpels

## Commit

Because jekyll(github pages) does not support Typescript, transpiled files under `/assets/js` must be commited. Same with compiled Sass files under `/assets/css`. Though Jekyll supports sass but github pages do not support npm and i had to choose between checking in bootstrap source in `node_modules` or compiled css, because javascript files are allready checked in i choosed to check in compiled css.

## Run

```Bash
gem install bundler
bundle install
npm install

npm run start #to run normal
npm run start-dev #to run and watch for css and js changes
```
