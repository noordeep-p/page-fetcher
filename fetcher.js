const fs = require('fs');
const request = require('request');
const urlFile = process.argv.slice(2);

request(`${urlFile[0]}`, (error, response, body) => {
  if (error) console.log(`Error: ${error}`);
  fs.writeFile(`${urlFile[1]}`, body, (err) => {
    if (err) console.log(err);
    console.log(`Downloaded and saved ${response.headers['content-length']} bytes to ${urlFile[1]}`);
  });
});