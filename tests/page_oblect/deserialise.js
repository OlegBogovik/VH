const fs = require('fs');
const csv = require('csv-parser');

async function readCSVFile(filePath) {
  const results = [];
  return new Promise((resolve, reject) => {
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', () => resolve(results))
      .on('error', (error) => reject(error));
  });
}

(async () => {
  const data = await readCSVFile('./tests/page_oblect/expectedData.csv');
  console.log(data); // Do something with the deserialized data
})();