const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve HTML files
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Provide server information via API
app.get('/api/server-info', (req, res) => {
  const serverInfo = {
    Type: 'Express Server',
    Language: 'JavaScript',
    Port: port,
    'Current Server Time': new Date().toLocaleString()
  };

  res.json(serverInfo);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
