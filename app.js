const express = require('express');
const path = require('path');

// Init App
const app = express();

// Set Public Folder
app.use(express.static(path.join(__dirname, 'public')));

// Start Server
var PORT =  process.env.PORT || 3000 ;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));