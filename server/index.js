const express = require('express');
const app = express();
const { join } = require('path');

const rootDir = join(__dirname, '..', 'public');
app.use(express.static(rootDir, {index: false}));

app.get('*', (req, res) => {
  res.sendFile(join(rootDir, 'index.html'));
})

app.listen(80);
