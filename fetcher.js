const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const localPath = process.argv[3];

const fetcher = function(url, localPath) {
  
  request(url, (error, response, body) => {
    // Print the error if one occurred
    if (error !== null) {
      console.log('error:', error);
    }
    // Print the response status code if not 200
    if (response.statusCode !== 200) {
      console.log('statusCode:', response && response.statusCode);
    }
    
    fs.writeFile(localPath, body, () => {
      const fileStats = fs.statSync(localPath);
      const size = fileStats.size;
      console.log(`Successfully downloaded and saved ${size} bytes to ${localPath}`);
    });
  });
};

fetcher(url, localPath);