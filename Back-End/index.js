const express = require('express');
require('dotenv').config();
const routes = require('./route')

// Initialize express app
const app = express();

// Attach routes to app
app.use('/', routes)

// Set constant for port
const PORT = process.env.PORT || 8000

// Listen on a port
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

/******************************************************************************
***
* ITE5315 – Project
* I declare that this assignment is my own work in accordance with Humber Academic Policy. 
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
* 
* Group member Name:Swapnil Roy Chowdhury, Sayani Pal Student IDs: N01469281, N01469469 Date: 12/06/2022
******************************************************************************
***/