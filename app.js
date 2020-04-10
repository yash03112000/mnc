const express = require('express');
const path = require('path');

// Init App
const app = express();

// Set Public Folder
app.use(express.static(path.join(__dirname, 'public')));

// Start Server
app.listen(3000, function(){
    console.log('Server started on port 3000...');
  });