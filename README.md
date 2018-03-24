# Bumpels

Home of the Bumpels

## Run

```Bash
gem install bundler
bundle install
npm install

npm run start #to run normal
npm run start-dev #to run and watch for css and js changes
```

## Commit

Because jekyll(GitHub pages) does not support Typescript, transpiled files under `/assets/js` must be commited. Same with compiled Sass files under `/assets/css`. Though Jekyll supports Sass, but GitHub pages do not support npm and i had to choose between checking in bootstrap sources in `node_modules` or compiled css, because javascript files are allready checked in, i choosed to check in compiled css.
