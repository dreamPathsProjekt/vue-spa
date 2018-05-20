const express = require('express');
const app = express();

// Include filesystem and path modules
const fs = require('fs');
const path = require('path');

const indexHTML = (() => {
  // read synchronously, path always relative to server.js file even if node server.js is run from another location
  return fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf-8');
})();

// Serve static files from /dist folder
app.use('/dist', express.static(path.resolve(__dirname, './dist')));

// Create event handler for all get requests (*), request, response parameters to callback
app.get('*', (req, res) => {
  // return the index.html file for all routes
  res.write(indexHTML);
  res.end();
});

// Default port 3000
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Express Server started at http://localhost:${port}`);
});
