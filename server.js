const express = require('express');
const app = express();

// Create event handler for all get requests (*), request, response parameters to callback
app.get('*', (req, res) => {
  res.write('Hello from Express');
  res.end();
});

// Default port 3000
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Express Server started at http://localhost:${port}`);
});
