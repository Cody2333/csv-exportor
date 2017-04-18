# csv-exportor

A Javascript library for browsers to generate and download csv file from array.


The csv parser is based on module [comma-separated-values](https://www.npmjs.com/package/comma-separated-values)

refer to [comma-separated-values](https://www.npmjs.com/package/comma-separated-values)
to see all the allowed `array patten` and `options`.


using `window.URL.createObjectURL` to create file stream, so please pay attention to the browser compatibility.

## Demo


```js
/*
using vue2 to demo its usage
by click the button, 
your brower would start a download 
of file 'test.csv' immediately.
*/
<template>
	...
	<button @click="exportCsv">EXPORT</button>
	...
</template>


import CsvExportor from 'csv-exportor'

export default {
  data: {
    tableData: [["a","b","c"],["d","e","f"]],
    header: ["foo","bar","baz"],
  },
  methods: {
    exportCsv() {
      CsvExportor.downloadCsv(
        tableData, 
        { header }, 
        'test.csv');
    }
  }
```

## Installation

Use Yarn or npm:

```bash
$ yarn add csv-exportor
```

```bash
$ npm i csv-exportor --save
```

## Module Loading

It's an UMD module, so you can:

```js
// ECMAScript 2015+ (via Babel)
import CsvExportor from 'csv-exportor'
```

```js
// CommonJS
const CsvExportor = require('csv-exportor')
```

```html
<!-- browser globals -->
<script src="YOUR_PATH_TO/node-modules/csv-exportor/dist/index.min.js"></script>
```

## Usage

```js
import CsvExportor from 'csv-exportor'

/*
 generate csv file from data,
 and automaticly download the file for browser
 */
CsvExportor.downloadCsv(data, options, fileName);

// generate data url of the generated csv file
CsvExportor.genUrl(data, options);

```

LICENSE [MIT](./LICENSE)