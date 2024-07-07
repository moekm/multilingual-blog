# Multilingual Blog

A minimalist front-end single-page blog built entirely with **React**, featuring support for multiple languages.

![multilingual-blog-screenshot](https://github.com/moekm/multilingual-blog/assets/76806132/85006136-6c06-4f44-8efa-39c429086d49)

### Table Of Content
- [Installation](#install)
- - [Development Environment](#install-dev)
- - [Production Build](#install-prod)
- [Features](#feat)
- [TODO](#todo) 


<a name="install"></a>
## Installation:

**1. clone this repo**
```bash
$> git clone https://github.com/moekm/multilingual-blog.git
```

**2. cd into the local repo folder**
```bash
cd ./multilingual-blog
```

**3. install the dependencies**
```bash
$> npm install
```

<a name="install-dev"></a>
### Development Environment

**To start the development server:**
```bash
$> npm run dev
...
..
  ➜  Local:   http://localhost:5173/multilingual-blog/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

<a name="install-prod"></a>
### Producation Build

**To build project:**
```bash
$> npm run build
```
After a few seconds, a `./dist` folder will be generated, and inside it will be all the production ready files.

> **Note:** To make the default route "/" rather than "/multilingual-blog" before you build, remove the ``base: "..."`` property in `vite.config.js`

```js
export default defineConfig({
  // base: "/multilingual-blog/",
  plugins: [react()],
})
```

<a name="feat"></a>
## Features:

***elements will be added soon*** 

<a name="todo"></a>
## TODO:

***...*** 