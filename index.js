const { convert2xkt } = require('@xeokit/xeokit-convert/dist/convert2xkt.cjs.js');
const WebIFC = require('web-ifc/web-ifc-api-node.js');
const fs = require('fs');

const input = process.env.INPUT;
const output = process.env.OUTPUT;
console.log(output);

convert2xkt({
  sourceData: fs.readFileSync(__dirname + '/' + input),
  sourceFormat: 'ifc',
  WebIFC,
  outputXKT: (xtkArrayBuffer) => {
    fs.writeFileSync(__dirname + '/' + output, xtkArrayBuffer);
  },
}).then(
  () => {
    console.log('Converted.');
  },
  (errMsg) => {
    console.error('Conversion failed: ' + errMsg);
  }
);
