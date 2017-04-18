import CSV from 'comma-separated-values';

/**
 * generate data url of the generated csv file
 * @param {*} data 
 * @param {*} options 
 * @returns {String} dataUrl of generated csv file 
 */
function genUrl(data, options) {
  const encoded = new CSV(data, options).encode();
  const dataBlob = new Blob([`\ufeff${encoded}`], { type: 'text/plain;charset=utf-8' });
  return window.URL.createObjectURL(dataBlob);
}

/**
 * generate csv file from data, and automatically download the file for browser
 * @param {*} data 
 * @param {*} options 
 * @param {*} fileName 
 */
function downloadCsv(data, options, fileName) {
  const url = genUrl(data, options);
  const a = document.createElement('a');
  a.href = url;
  a.download = fileName;
  a.click();
  window.URL.revokeObjectURL(url);
}

export default {
  genUrl,
  downloadCsv,
};
