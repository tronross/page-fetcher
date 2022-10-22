const request = require('request');
const fs = require('fs');

// Extract arguments from CLI
const url = process.argv[2];
const localPath = process.argv[3];

// FUNCTION
// fetcher: downloads and saves resource at argument url and saves at argument local file path
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
    
    fs.writeFile(localPath, body, () => {  // write file to localPath
      const fileStats = fs.statSync(localPath);
      const size = fileStats.size;
      console.log(`Successfully downloaded and saved ${size} bytes to ${localPath}`);
    });
  });
};

fetcher(url, localPath);