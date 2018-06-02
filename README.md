# Home of the Bumpels

[![Travis branch](https://img.shields.io/travis/simplyRoba/bumpels/master.svg)](https://travis-ci.org/simplyRoba/bumpels)

This repository contains the sources of the [bumpels.de](http://www.bumpels.de) site. The repository with the generated static files, build by travis, is [bumpels_site](https://github.com/simplyRoba/bumpels_site).

## Run

You need [Ruby](https://www.ruby-lang.org/en/downloads/) and [Node.js](https://nodejs.org/en/).

```Bash
# install dependencies
gem install bundler
bundle install
npm install -g gulp
npm install

# builds and runs the site, also watches for changes
gulp serve 
```
