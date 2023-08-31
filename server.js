const express = require('express');
const path = require('path');
const pidusage = require('pidusage');

const app = express();
const port = 3000;

// Serve HTML files
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Provide server information via API
app.get('/api/server-info', (req, res) => {
    cpuIntensiveTask(100);  // 5 seconds of CPU intensive task
    pidusage(process.pid, function (err, stats) {
      const serverInfo = {
        Type: 'Express Server',
        Language: 'JavaScript',
        Port: port,
        'Current Server Time': new Date().toLocaleString(),
        'CPU usage': stats.cpu
      };
  
      res.json(serverInfo);
    });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

// Function to perform CPU intensive task for durationMs milliseconds
function cpuIntensiveTask(durationMs) {
  const end = Date.now() + durationMs;
  while (Date.now() < end) {
    Math.sqrt(Math.random());
  }
}