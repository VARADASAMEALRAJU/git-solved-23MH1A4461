const express = require('express');
const app = express();
const PORT = process.env.APP_PORT || 3000;

app.get('/', (req, res) => {
  res.send('DevOps Simulator server running!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
